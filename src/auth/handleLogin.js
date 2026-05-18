import { loginConfirmExitAction } from '../prompts/accountMenuPrompt.js';
import { loginMenu } from '../prompts/authMenuPrompt.js';
import {
  getUpdatedAccount,
  validateAccount
} from '../service/accountService.js';
import { displayAccountMessage } from '../utils/displayMessage.js';

export const handleLogin = async () => {
  do {
    const { accountName, password } = await loginMenu();
    const account = validateAccount(accountName, password);
    if (account) return account;
    console.log(displayAccountMessage.INVALID_LOGIN);
  } while (!(await loginConfirmExitAction()));
};

// This function is used to update the account information after a transaction is made, so the user can see the updated balance and history without having to log out and log back in.
export const updateLogin = (accountName) => getUpdatedAccount(accountName);
