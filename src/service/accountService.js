import {
  accountExists,
  getAccount,
  saveAccountData
} from '../repository/accountRepository.js';
import {
  formatAccountDatafactory,
  newAccountFactory,
  updateAccountFactory
} from '../model/account.js';
import { transactionTypes } from '../enum/transactionTypesEnum.js';

const updateTransactionHistory = (history, type, amount) => {
  history.push({ type, amount, date: new Date().toISOString() });
  return history;
};

export const validateAccount = (accountName, password) => {
  const accountData = accountExists(accountName)
    ? JSON.parse(getAccount(accountName))
    : null;
  if (!accountData) return false;
  return accountData.password === password
    ? formatAccountDatafactory(accountData)
    : false;
};

// This function is intended to be used after a successful login to ensure that the account data is up-to-date.
export const getUpdatedAccount = (accountName) => {
  const accountData = JSON.parse(getAccount(accountName));
  return formatAccountDatafactory(accountData);
};

export const createAccount = (accountName, password, age) => {
  if (accountExists(accountName)) return false;
  const account = newAccountFactory(accountName, password, age);
  saveAccountData(account);
  return account;
};

export const addAmountToBalance = (accountName, newAmount) => {
  const account = JSON.parse(getAccount(accountName));
  account.balance += newAmount;
  account.history = updateTransactionHistory(
    account.history,
    transactionTypes.DEPOSIT,
    newAmount
  );
  saveAccountData(updateAccountFactory(account));
};

export const reduceAmountToBalance = (accountName, newAmount) => {
  const account = JSON.parse(getAccount(accountName));
  account.balance -= newAmount;
  account.history = updateTransactionHistory(
    account.history,
    transactionTypes.WITHDRAW,
    newAmount
  );
  saveAccountData(updateAccountFactory(account));
};
