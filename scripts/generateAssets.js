import * as fs from 'fs';
import {
  FileManager,
  __rootDir,
  capitalizeEveryWordFile,
  getFileName,
  isDirectory,
  omitFileNameEntry,
  pathDirEntryFile,
  prettier,
} from './utils.js';

import TurboConfig from '../turbo.json' assert { type: 'json' };

const mapExtFile = {
  icons: 'ts',
  images: 'ts',
  fonts: 'css',
};

const mapFontStyle = {
  Black: {
    style: 'normal',
    weight: 900,
  },
  BlackItalic: {
    style: 'italic',
    weight: 900,
  },
  Bold: { style: 'normal', weight: 700 },
  BoldItalic: {
    style: 'italic',
    weight: 700,
  },
  ExtraBold: {
    style: 'normal',
    weight: 800,
  },
  ExtraBoldItalic: {
    style: 'italic',
    weight: 800,
  },
  ExtraLight: { style: 'normal', weight: 200 },
  ExtraLightItalic: { style: 'italic', weight: 200 },
  Italic: { style: 'italic', weight: 400 },
  Light: { style: 'normal', weight: 300 },
  LightItalic: { style: 'italic', weight: 300 },
  Medium: { style: 'normal', weight: 500 },
  MediumItalic: { style: 'italic', weight: 500 },
  Regular: { style: 'normal', weight: 400 },
  SemiBold: { style: 'normal', weight: 600 },
  SemiBoldItalic: { style: 'italic', weight: 600 },
  Thin: { style: 'normal', weight: 200 },
  ThinItalic: { style: 'italic', weight: 200 },
};

const mapFormatContent = {
  icons(fileName) {
    return `export { ReactComponent as ${capitalizeEveryWordFile(
      getFileName(fileName),
    )}Icon } from './${fileName}'; \n`;
  },
  images(fileName) {
    return `export { default as ${capitalizeEveryWordFile(
      getFileName(fileName),
    )}Image } from './${fileName}'; \n`;
  },
  fonts(pathFile) {
    const fileName = getFileName(pathFile);
    const [, type] = fileName.split('-');
    const fontStyle = mapFontStyle[type];
    return `
    /* ${getFileName(pathFile)} */
    @font-face {
      font-family: 'Montserrat';
      font-style: ${fontStyle.style};
      font-weight:  ${fontStyle.weight};
      src: url('./${pathFile}') format('truetype');
    }
    `;
  },
};

const main = async () => {
  const __dirAssets = `${__rootDir}/src/assets`;

  const assetsDir = fs.readdirSync(__dirAssets, 'utf-8');

  assetsDir.forEach((dirName) => {
    const pathDir = `${__dirAssets}/${dirName}`;
    if (isDirectory(pathDir) && TurboConfig.assets.includes(dirName)) {
      let content = '';
      const filesDir = fs.readdirSync(pathDir, 'utf-8');
      const allFiles = omitFileNameEntry(filesDir);
      allFiles.forEach((fileName) => {
        const fn = mapFormatContent[dirName];
        content += fn ? fn(fileName) : '';
      });

      const entry = pathDirEntryFile(pathDir, mapExtFile[dirName]);

      FileManager.forceWrite(
        pathDirEntryFile(pathDir, mapExtFile[dirName]),
        content,
      );
      prettier(entry);
    }
  });
};

main();
