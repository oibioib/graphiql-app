import i18n from 'i18next';
import { z } from 'zod';

export const validationTest = (value: string, errorArray: string[]) => {
  if (value.length < 8) {
    errorArray.push(i18n.t('formError.chars'));
  }

  if (!/[a-zA-Z]/.test(value)) {
    errorArray.push(i18n.t('formError.letter'));
  }

  if (!/[0-9]/.test(value)) {
    errorArray.push(i18n.t('formError.digit'));
  }

  if (!/[#?!@$%^_&*-]/.test(value)) {
    errorArray.push(i18n.t('formError.specialChar'));
  }

  return errorArray;
};

export const validationTestRefine = (val: string, ctx: z.RefinementCtx) => {
  const issues: string[] = [];
  validationTest(val, issues);
  if (issues.length) {
    const errorMessage = i18n.t('formError.start') + `${issues.join(', ')}.`;
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: errorMessage,
    });
  }
};
