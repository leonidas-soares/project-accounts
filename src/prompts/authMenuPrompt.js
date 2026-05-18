import { input, password } from '@inquirer/prompts';

import { verifyField } from '../model/account.js';

export const createAccountMenu = async () => {
  const accountName = await input({
    message: 'Enter your name:',
    validate: (input) => verifyField('accountName', input)
  });

  const pWord = await password({
    message: 'Enter your password:',
    mask: '*',
    validate: (input) => verifyField('password', input)
  });

  const age = Number(
    await input({
      message: 'Enter your age:',
      validate: (input) => verifyField('age', Number(input))
    })
  );

  return {
    accountName,
    password: pWord,
    age: age
  };
};

export const loginMenu = async () => {
  const accountName = await input({
    message: 'Enter your login username:'
  });

  const pWord = await password({
    message: 'Enter your login password:',
    mask: '*'
  });

  return { accountName, password: pWord };
};
