import { ACCOUNT_DIR } from '../constants/accountConfig.js';
import { writeFile, readFile, fileExists } from '../utils/handleFile.js';

const getAccountFilePath = (accountName) =>
  `${ACCOUNT_DIR}/${accountName}.json`;

export const getAccount = (accountName) => {
  const accountFile = getAccountFilePath(accountName);
  return JSON.parse(readFile(accountFile, 'utf-8'));
};

export const accountExists = (accountName) => {
  const accountFile = getAccountFilePath(accountName);
  return fileExists(accountFile);
};

export const saveAccountData = (account) => {
  const accountFile = getAccountFilePath(account.accountName);
  writeFile(accountFile, JSON.stringify(account, null, 2));
};
