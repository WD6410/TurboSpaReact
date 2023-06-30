import { exec } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

export const __rootDir = path.resolve('.');
export const ENV_CONFIG = path.resolve(
  '.',
  'src/shared/config',
  'envConfig.ts',
);
export const ENV_TEMPLATE = '.env.template';

export const FileManager = {
  get(pathFile, opts = 'utf-8') {
    if (!fs.existsSync(pathFile)) {
      console.log(`File ${pathFile} not exist.`);
      return;
    }
    return fs.readFileSync(pathFile, opts);
  },
  write(pathFile, content = '', opts = 'utf-8') {
    if (fs.existsSync(pathFile)) {
      console.log(`File ${pathFile} has exist.`);
      return;
    }
    fs.writeFileSync(pathFile, content, opts);
  },
  getOrCreate(path, opts = 'utf-8') {
    if (!fs.existsSync(path)) {
      fs.writeFileSync(path, '', opts);
      return '';
    }
    return fs.readFileSync(path, opts);
  },
  forceWrite(pathFile, content = '', opts = 'utf-8') {
    fs.writeFileSync(pathFile, content, opts);
  },

  delete(fileName) {
    const fullPath = `${__rootDir}/${fileName}`;
    if (!fs.existsSync(fullPath)) {
      console.log(`File ${fileName} not exist.`);
      return;
    }
    return fs.unlinkSync(fullPath);
  },
  mkdir(path, opts) {
    return fs.mkdirSync(path, opts);
  },
};

export function isDirectory(path) {
  try {
    const stat = fs.statSync(path);
    return stat.isDirectory();
  } catch (err) {
    return false;
  }
}

export function parseValue(value) {
  // Attempt to parse as number
  const numberValue = Number(value);
  if (!isNaN(numberValue)) {
    return numberValue;
  }

  // Attempt to parse as boolean
  const lowerCaseValue = value.toLowerCase();
  if (lowerCaseValue === 'true') {
    return true;
  } else if (lowerCaseValue === 'false') {
    return false;
  }

  // Return value as string
  return value;
}

export function toCamelCase(str) {
  const cleanString = str.replace(/[^\w\s]/g, ''); // Remove special characters

  const words = cleanString.toLowerCase().split(/[_\s-]+/);

  const camelWords = words.map(function (word, index) {
    if (index === 0) {
      return word;
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  });

  const camelCaseStr = camelWords.join('');

  return camelCaseStr;
}

export const parseEnvFile = (content) => {
  const lines = content.split(/\r?\n/);
  const envObject = {};
  for (const line of lines) {
    // Skip empty lines and comments
    if (line.trim() === '' || line.startsWith('#')) {
      continue;
    }

    const [key, value] = line.split('=');

    envObject[key] = value;
  }
  return envObject;
};

export const parseObjToEnv = (obj) => {
  const lines = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
  return lines.join('\n');
};

export const addPrefixToObjectKeys = (obj, prefix, map) => {
  const result = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = prefix + key;
      if (map && map.key === key) {
        result[newKey] = map.value;
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
};

export const promisifyExec = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      if (error !== null) {
        reject(error);
        console.log(`exec error: ${error}`);
      }
      resolve();
    });
  });
};

export const capitalizeEveryWordFile = (str) =>
  str
    .replace(/(-|_)/g, ' ')
    .replace(/\b[a-z]/g, (char) => char.toUpperCase())
    .split(' ')
    .join('');

export const getFileName = (pathFile = '') =>
  path.basename(pathFile, path.extname(pathFile));

export const getExtFile = (pathFile = '') => path.extname(pathFile);

export const pathDirEntryFile = (pathFile, ext = 'ts') =>
  `${pathFile}/index.${ext}`;

export const prettier = (...args) =>
  promisifyExec(`npx prettier --write ${args.join(' ')}`);

export const omitFileNameEntry = (nameList = []) =>
  nameList.filter((name) => !name.startsWith('index.'));
