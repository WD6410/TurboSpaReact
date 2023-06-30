import * as fs from 'fs';
import TurboConfig from '../turbo.json' assert { type: 'json' };
import {
  ENV_CONFIG,
  ENV_TEMPLATE,
  FileManager,
  __rootDir,
  addPrefixToObjectKeys,
  isDirectory,
  parseEnvFile,
  parseObjToEnv,
  prettier,
  toCamelCase,
} from './utils.js';

const envTemplate = FileManager.get(`${__rootDir}/${ENV_TEMPLATE}`);
const envToObj = parseEnvFile(envTemplate);

function validateEnvTemplate() {
  const envLines = envTemplate.split('\n');

  for (let line of envLines) {
    // Skip empty lines and comment lines
    if (/^\s*(|#)/.test(line)) {
      continue;
    }

    const parts = line.split('=');
    const name = parts[0].trim();
    const value = parts[1] ? parts[1].trim() : '';

    if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) {
      throw new Error(`Invalid environment variable name: "${name}"`);
    }

    if (value === '') {
      throw new Error(`Missing value for environment variable: "${name}"`);
    }
  }
}

const clearEnvFileBeforeGenerate = () => {
  const files = fs.readdirSync(__rootDir, 'utf-8');
  files.forEach(function (file) {
    const isUnLink =
      !isDirectory(file) && file.startsWith('.env') && file !== ENV_TEMPLATE;
    if (isUnLink) {
      fs.unlink(`${__rootDir}/${file}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(file + ' was deleted');
      });
    }
  });
};

const formatEnvWithPrefix = (mode) => {
  return addPrefixToObjectKeys(
    envToObj,
    `${TurboConfig.prefixEnv}_`,
    mode && {
      key: 'NODE_ENV',
      value: mode,
    },
  );
};

const generateEnvConfig = () => {
  const envConfig = addPrefixToObjectKeys(
    envToObj,
    `${TurboConfig.prefixEnv}_`,
  );
  const content = `
  export const envConfig = {
    ${Object.keys(envConfig)
      .map((key) => {
        return `${toCamelCase(key)}: import.meta.env.${key}`;
      })
      .join(',')}
  }
  `;
  FileManager.forceWrite(ENV_CONFIG, content);
  prettier(ENV_CONFIG);
};

const generateEnv = () => {
  TurboConfig.envMode.forEach((mode) => {
    const fileName = `${__rootDir}/.env.${mode}`;

    FileManager.write(fileName, parseObjToEnv(formatEnvWithPrefix(mode)));
  });
};

const generateTsEnv = () => {
  const envDTs = `${__rootDir}/src/env.d.ts`;
  const fileContent = fs.readFileSync(envDTs, 'utf-8');

  const envObj = formatEnvWithPrefix();
  console.log(envObj);
  const startPattern = /interface ImportMetaEnv {[\n\r]+/g;
  const endPattern = /[\n\r]+}\n/g;
  const startIndex = startPattern.exec(fileContent).index;
  const endIndex = endPattern.exec(fileContent).index + 2;

  const newContent =
    fileContent.slice(0, startIndex) +
    `interface ImportMetaEnv {\n` +
    Object.entries(envObj)
      .map(([key, value]) => `  readonly ${key}: ${typeof value};`)
      .join('\n') +
    `\n}` +
    fileContent.slice(endIndex);

  fs.writeFileSync(envDTs, newContent);
};

const main = async () => {
  try {
    validateEnvTemplate();
    if (TurboConfig.clearEnvWhenGenerate) {
      clearEnvFileBeforeGenerate();
    }
    generateEnv();
    generateTsEnv();
    generateEnvConfig();
  } catch (error) {
    console.log('[configEnv] ', error);
  }
};

main();
