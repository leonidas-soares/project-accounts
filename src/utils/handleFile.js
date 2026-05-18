import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');

export const createDirectory = (dirname) => {
  const dirPath = resolve(root, dirname);
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
  }
};

export const writeFile = (file, data) => {
  writeFileSync(resolve(root, file), JSON.stringify(data, null, 2));
};

export const readFile = (file) => {
  return readFileSync(resolve(root, file), {
    encoding: 'utf-8',
    flag: 'r'
  });
};

export const fileExists = (file) => {
  return existsSync(resolve(root, file));
};
