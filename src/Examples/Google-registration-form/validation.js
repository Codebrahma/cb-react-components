import isRequired from '../../FormBindings/Validations/isRequired';
import minLength from '../../FormBindings/Validations/minLength';
import maxLength from '../../FormBindings/Validations/maxLength';
import isEmail from '../../FormBindings/Validations/isEmail';
import isMobileNumber from '../../FormBindings/Validations/isMobileNumber';

export const validationConfig = {
  'first': {
    validations: [isRequired('First name is required'), minLength(2),
      maxLength(15)],
  },
  'last': {
    validations: [isRequired('Last name is required'), minLength(2),
      maxLength(15)],
  },
  'userName': {
    validations: [isRequired('User name is required'), minLength(2),
      maxLength(15)],
  },
  'password': {
    validations: [isRequired('Password is required'), minLength(5),
      maxLength(15)],
  },
  'confirmPassword': {
    validations: [isRequired('Confirm Password is required'), minLength(5),
      maxLength(15)],
  },
  'mobilePhone': {
    validations: [isRequired('Mobile Phone is required'), isMobileNumber(),
      minLength(2), maxLength(15)],
  },
  'currentEmail': {
    validations: [isRequired('Current email is required'), isEmail(),
      minLength(2), maxLength(15)],
  },
  'birthdayMonth': {
    validations: [isRequired('Month is required')],
  },
  'birthdayDay': {
    validations: [isRequired('Day is required')],
  },
  'birthdayYear': {
    validations: [isRequired('Year is required')],
  },
  'gender': {
    validations: [isRequired('Gender is required')],
  },
  'location': {
    validations: [isRequired('Location is required')],
  }
};
