export const validatePositiveNumber = (value) => {
  return !isNaN(value) && value > 0;
};
