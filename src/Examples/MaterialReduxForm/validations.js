import {
  isRequired,
  minLength,
  maxLength,
  isEmail,
  isNumber,
} from '../../FormBindings/Validations';

export const fieldsValidationConfig = {
  'username': {
    validations: [isRequired(), minLength(3), maxLength(10)],
  },
  'email': {
    validations: [isEmail()],
  },
  'age': {
    validations: [isNumber()]
  }
};