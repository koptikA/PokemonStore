import * as yup from 'yup';
import { VALIDATION_MESSAGES } from '../../constants/validationMessages';

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email(VALIDATION_MESSAGES.EMAIL)
    .required(VALIDATION_MESSAGES.REQUIRED),
  password: yup
    .string()
    .min(8, VALIDATION_MESSAGES.MIN(8))
    .required(VALIDATION_MESSAGES.REQUIRED),
});
