import chalk from 'chalk';

import {
  accountErrorMessage,
  accountMessage,
  inputErrorMessage,
  systemMessage
} from './message.js';

export const displayAccountMessage = Object.freeze({
  ACCOUNT_CREATED: chalk.green(accountMessage.ACCOUNT_CREATED),
  DEPOSIT_SUCCESS: chalk.green(accountMessage.DEPOSIT_SUCCESS),
  WITHDRAW_SUCCESS: chalk.green(accountMessage.WITHDRAW_SUCCESS),
  INSUFFICIENT_FUNDS: chalk.red(accountMessage.INSUFFICIENT_FUNDS),
  CURRENT_BALANCE: (accountName, balance) =>
    chalk.yellow(accountMessage.CURRENT_BALANCE(accountName, balance)),
  INVALID_LOGIN: chalk.red(accountMessage.INVALID_LOGIN),
  TRANSACTION_HISTORY: (index, type, amount, date) =>
    chalk.blue(accountMessage.TRANSACTION_HISTORY(index, type, amount, date)),
  NO_TRANSACTION_HISTORY: chalk.yellow(accountMessage.NO_TRANSACTION_HISTORY)
});

export const displaySystemMessage = Object.freeze({
  WELCOME: chalk.blue(systemMessage.WELCOME),
  GOODBYE: chalk.green(systemMessage.GOODBYE),
  DEPOSIT_CANCEL_INFO: chalk.yellow(systemMessage.DEPOSIT_CANCEL_INFO),
  WITHDRAW_CANCEL_INFO: chalk.yellow(systemMessage.WITHDRAW_CANCEL_INFO)
});

export const displayInputErrorMessage = Object.freeze({
  INVALID_ACCOUNT_NAME: chalk.red(inputErrorMessage.INVALID_ACCOUNT_NAME),
  INVALID_ACCOUNT_NAME_REGEX: chalk.red(
    inputErrorMessage.INVALID_ACCOUNT_NAME_REGEX
  ),
  INVALID_PASSWORD: chalk.red(inputErrorMessage.INVALID_PASSWORD),
  INVALID_AGE: chalk.red(inputErrorMessage.INVALID_AGE),
  INVALID_AMOUNT: chalk.red(inputErrorMessage.INVALID_AMOUNT),
  INSUFFICIENT_FUNDS: chalk.red(inputErrorMessage.INSUFFICIENT_FUNDS)
});

export const displayAccountErrorMessage = Object.freeze({
  INVALID_TRANSACTION_TYPE: (transactionType) =>
    chalk.red(accountErrorMessage.INVALID_TRANSACTION_TYPE(transactionType)),
  ACCOUNT_ALREADY_EXISTS: chalk.red(accountErrorMessage.ACCOUNT_ALREADY_EXISTS)
});
