import { input, select, Separator } from '@inquirer/prompts';

import { menuCommand } from '../enum/menuActionsEnum.js';
import {
  displayAccountMessage,
  displayInputErrorMessage,
  displaySystemMessage
} from '../utils/displayMessage.js';
import { validatePositiveNumber } from '../utils/handleNumber.js';

export const accessAccountMenu = () => {
  console.log(displaySystemMessage.WELCOME);
  return select({
    message: 'What would you like to do?',
    choices: [
      { name: 'Login to an existing account', value: menuCommand.LOGIN },
      { name: 'Create a new account', value: menuCommand.CREATE_ACCOUNT },
      new Separator(),
      { name: 'Exit', value: menuCommand.EXIT }
    ]
  });
};

export const operationsMenu = (accountName, balance) => {
  console.log(displayAccountMessage.CURRENT_BALANCE(accountName, balance));

  return select({
    message: 'What do you want to do?',
    choices: [
      { name: 'Deposit money', value: menuCommand.DEPOSIT },
      { name: 'Withdraw money', value: menuCommand.WITHDRAW },
      { name: 'View account balance', value: menuCommand.VIEW_BALANCE },
      new Separator(),
      { name: 'Go back to login menu', value: menuCommand.LOGOUT },
      { name: 'Exit', value: menuCommand.EXIT }
    ]
  });
};

export const depositMenu = async () => {
  console.log(displaySystemMessage.DEPOSIT_CANCEL_INFO);
  return Number(
    await input({
      message: 'Enter the amount you want to deposit:',
      validate: (input) => {
        const newAmount = Number(input);

        if (newAmount === 0) return true;

        return (
          validatePositiveNumber(newAmount) ||
          displayInputErrorMessage.INVALID_AMOUNT
        );
      }
    })
  );
};

export const withdrawMenu = async (balance) => {
  console.log(displaySystemMessage.WITHDRAW_CANCEL_INFO);
  return Number(
    await input({
      message: 'Enter the amount you want to withdraw:',
      validate: (input) => {
        const newAmount = Number(input);

        if (newAmount === 0) return true;

        if (!validatePositiveNumber(newAmount))
          return displayInputErrorMessage.INVALID_AMOUNT;

        if (newAmount > balance)
          return displayInputErrorMessage.INSUFFICIENT_FUNDS;

        return true;
      }
    })
  );
};

export const loginConfirmExitAction = () => {
  return select({
    message: 'Do you want to go back to the menu?',
    choices: [
      { name: 'Yes', value: true },
      { name: 'No', value: false }
    ]
  });
};

export const confirmExitAction = () => {
  return select({
    message: 'Go back to menu?',
    choices: [{ name: 'Yes', value: true }]
  });
};
