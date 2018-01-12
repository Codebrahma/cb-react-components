import isRequired from '../../FormBindings/Validations/isRequired';
import minLength from '../../FormBindings/Validations/minLength';
import maxLength from '../../FormBindings/Validations/maxLength';
import isEmail from '../../FormBindings/Validations/isEmail';

export const validationConfig = {
  'text': {
    validations: [isRequired('Text input is required'), minLength(5),
      maxLength(15)],
  }
};
