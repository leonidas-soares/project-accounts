import z from 'zod';

import { displayInputErrorMessage } from '../utils/displayMessage.js';
import { transactionTypes } from '../enum/transactionTypesEnum.js';

const accountSchema = z.object({
  accountName: z
    .string()
    .regex(/^[a-zA-Z ]+$/, displayInputErrorMessage.INVALID_ACCOUNT_NAME_REGEX)
    .min(6, displayInputErrorMessage.INVALID_ACCOUNT_NAME),
  balance: z.number().default(0),
  password: z.string().min(6, displayInputErrorMessage.INVALID_PASSWORD),
  age: z
    .number()
    .int()
    .positive()
    .min(18, displayInputErrorMessage.INVALID_AGE),
  history: z
    .array(
      z.object({
        type: z.enum([transactionTypes.DEPOSIT, transactionTypes.WITHDRAW], {
          errorMap: (issue, ctx) => ({
            message: displayInputErrorMessage.INVALID_TRANSACTION_TYPE(ctx.data)
          })
        }),
        amount: z.number(),
        date: z.string().default(() => new Date().toISOString())
      })
    )
    .default([]),
  createAt: z.string().default(() => new Date().toISOString()),
  updatedAt: z.string().default(() => new Date().toISOString())
});

const accountDisplaySchema = accountSchema.pick({
  accountName: true,
  balance: true,
  age: true,
  history: true
});

export const formatAccountDatafactory = (account) => {
  return accountDisplaySchema.parse(account);
};

export const newAccountFactory = (accountName, password, age) => {
  return accountSchema.parse({ accountName, password, age });
};

export const verifyField = (fieldName, value) => {
  const result = accountSchema.shape[fieldName].safeParse(value);
  return result.success ? true : result.error.issues[0].message;
};

export const updateAccountFactory = (account) => {
  return accountSchema.parse({
    ...account,
    updatedAt: new Date().toISOString()
  });
};
