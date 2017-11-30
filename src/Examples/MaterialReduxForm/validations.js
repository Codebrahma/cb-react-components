import {
  isRequired,
  minLength,
  maxLength,
} from '../../FormBindings/Validations';

export const fieldsValidationConfig = {
  'username': {
    validations: [isRequired(), minLength(3), maxLength(10)],
  }
};