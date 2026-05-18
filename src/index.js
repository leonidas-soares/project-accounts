import { menuCommand } from './enum/menuActionsEnum.js';
import { createAccountMenu } from './prompts/authMenuPrompt.js';
import {
  accessAccountMenu,
  operationsMenu
} from './prompts/accountMenuPrompt.js';
import {
  displayAccountErrorMessage,
  displayAccountMessage,
  displaySystemMessage
} from './utils/displayMessage.js';
import { createDirectory } from './utils/handleFile.js';
import { ACCOUNT_DIR } from './constants/accountConfig.js';
import { sessionState } from './enum/sessionStatesEnum.js';
import { createAccount } from './service/accountService.js';
import { handleLogin, updateLogin } from './auth/handleLogin.js';
import { accountCommands } from './commands/accountCommands.js';

createDirectory(ACCOUNT_DIR);

let state = sessionState.NOT_AUTHENTICATED;
let account = null;

while (true) {
  let action = await accessAccountMenu();

  if (action === menuCommand.CREATE_ACCOUNT) {
    const { accountName, password, age } = await createAccountMenu();
    console.clear();
    createAccount(accountName, password, age)
      ? console.log(displayAccountMessage.ACCOUNT_CREATED)
      : console.log(displayAccountErrorMessage.ACCOUNT_ALREADY_EXISTS);
    continue;
  }

  if (action === menuCommand.LOGIN) {
    account = await handleLogin();
    if (account) state = sessionState.AUTHENTICATED;
  }

  console.clear();

  while (state === sessionState.AUTHENTICATED) {
    action = await operationsMenu(account.accountName, account.balance);

    if (action === menuCommand.EXIT || action === menuCommand.LOGOUT) {
      state = sessionState.NOT_AUTHENTICATED;
      break;
    }

    await accountCommands(action, account);
    account = updateLogin(account.accountName);
  }

  console.clear();
  account = null;

  if (action === menuCommand.EXIT) {
    console.log(displaySystemMessage.GOODBYE);
    break;
  }
}
