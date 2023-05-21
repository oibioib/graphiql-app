export const validationTest = (value: string, errorArray: string[]) => {
  if (value.length < 8) {
    errorArray.push('8 chars');
  }

  if (!/[a-zA-Z]/.test(value)) {
    errorArray.push('one letter');
  }

  if (!/[0-9]/.test(value)) {
    errorArray.push('one digit');
  }

  if (!/[#?!@$%^_&*-]/.test(value)) {
    errorArray.push('one special character');
  }
  return errorArray;
};
