import { menuCommand } from '../enum/menuActionsEnum.js';
import {
  depositMenu,
  withdrawMenu,
  confirmExitAction
} from '../prompts/accountMenuPrompt.js';
import {
  addAmountToBalance,
  reduceAmountToBalance
} from '../service/accountService.js';
import { displayAccountMessage } from '../utils/displayMessage.js';

const commandMap = new Map([
  [menuCommand.DEPOSIT, depositCommand],
  [menuCommand.WITHDRAW, withdrawCommand],
  [menuCommand.VIEW_BALANCE, viewHistoryCommand]
]);

export const accountCommands = async (action, account) => {
  await commandMap.get(action)(account);
};

async function withdrawCommand(account) {
  if (account.balance <= 0) {
    console.clear();
    console.log(displayAccountMessage.INSUFFICIENT_FUNDS);
    return;
  }
  const amount = await withdrawMenu(account.balance);
  console.clear();
  if (amount === 0) return;
  reduceAmountToBalance(account.accountName, amount);
  console.log(displayAccountMessage.WITHDRAW_SUCCESS);
}

async function depositCommand(account) {
  const amount = await depositMenu();
  console.clear();
  if (amount === 0) return;
  addAmountToBalance(account.accountName, amount);
  console.log(displayAccountMessage.DEPOSIT_SUCCESS);
}

async function viewHistoryCommand(account) {
  console.clear();
  if (account.history.length === 0) {
    console.log(displayAccountMessage.NO_TRANSACTION_HISTORY);
  } else {
    account.history.forEach((transaction, index) => {
      console.log(
        displayAccountMessage.TRANSACTION_HISTORY(
          index + 1,
          transaction.type,
          transaction.amount,
          transaction.date
        )
      );
    });
  }
  await confirmExitAction();
  console.clear();
}
