import isRequired from '../../FormBindings/Validations/isRequired';
import minLength from '../../FormBindings/Validations/minLength';
import maxLength from '../../FormBindings/Validations/maxLength';
import isEmail from '../../FormBindings/Validations/isEmail';

export const validationConfig = {
  'name': {
    validations: [isRequired('Email is Required'), minLength(5), maxLength(15)],
  },
  'email': {
    validations: [isRequired(), isEmail()]
  },
  'country': {
    validations: [isRequired('Need to select a country')],
  },
  'tShirtSize': {
    validations: [isRequired('Need to pick a t shirt size')],
  },
  'acceptTerms': {
    validations: [isRequired('You need to accept to terms')],
  },
};
