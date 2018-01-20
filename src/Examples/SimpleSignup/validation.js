import isRequired from '../../Root/Common/Validations/isRequired';
import minLength from '../../Root/Common/Validations/minLength';
import maxLength from '../../Root/Common/Validations/maxLength';
import isEmail from '../../Root/Common/Validations/isEmail';

export const validationConfig = {
  'text': {
    validations: [isRequired('Text input is required'), minLength(5),
      maxLength(15)],
  }
};
