export const accountMessage = Object.freeze({
  ACCOUNT_CREATED: 'Account created successfully!',
  DEPOSIT_SUCCESS: 'Deposit successful!',
  WITHDRAW_SUCCESS: 'Withdrawal successful!',
  INSUFFICIENT_FUNDS: 'Insufficient funds for withdrawal.',
  CURRENT_BALANCE: (accountName, balance) =>
    ` Account: ${accountName} -- Current Balance: $${balance.toFixed(2)}`,
  INVALID_LOGIN: 'Invalid username or password.',
  TRANSACTION_HISTORY: (index, type, amount, date) =>
    `Transaction ${index}: ${type} of R$${amount.toFixed(2)} on ${new Date(
      date
    ).toLocaleString()}`,
  NO_TRANSACTION_HISTORY: 'No transaction history available.'
});

export const systemMessage = Object.freeze({
  WELCOME: 'Login to your account to access the Account Management System.',
  GOODBYE: 'Thank you for using the Account Management System. Goodbye!',
  DEPOSIT_CANCEL_INFO:
    'Type 0 if you want to cancel the deposit and return to the menu:',
  WITHDRAW_CANCEL_INFO:
    'Type 0 if you want to cancel the withdrawal and return to the menu:'
});

export const inputErrorMessage = Object.freeze({
  INVALID_ACCOUNT_NAME:
    'Account name is required and must be at least 6 characters long',
  INVALID_ACCOUNT_NAME_REGEX:
    'Account name can only contain letters and spaces',
  INVALID_PASSWORD: 'Password must be at least 6 characters long',
  INVALID_AGE: 'Age must be at least 18 years old',
  INVALID_AMOUNT: 'Please enter a valid positive number for the amount.',
  INSUFFICIENT_FUNDS: 'Insufficient funds for withdrawal.'
});

export const accountErrorMessage = Object.freeze({
  INVALID_TRANSACTION_TYPE: (transactionType) =>
    `Invalid transaction type: ${transactionType}`,
  ACCOUNT_ALREADY_EXISTS: 'This account already exists.'
});
