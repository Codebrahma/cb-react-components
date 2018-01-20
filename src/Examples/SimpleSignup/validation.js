import isRequired from '../../Root/Common/Validations/isRequired';
import minLength from '../../Root/Common/Validations/minLength';
import maxLength from '../../Root/Common/Validations/maxLength';
import isEmail from '../../Root/Common/Validations/isEmail';

export const validationConfig = {
  name: {
    validations: [isRequired('Text input is required'), minLength(5), maxLength(15)],
  },
  email: {
    validations: [isRequired('Email is required'), isEmail()]
  },
  password: {
    validations: [isRequired('Password is required', minLength(6))]
  },
  dob: {
    validations: [isRequired('Date of Birth is Required')]
  },
  gender: {
    validations: [isRequired('Password is required')]
  },
  size: {
    validations: [isRequired('Size Range should be selected')]
  }

};

// name
// email
// password
// dob 
// gender
// mobile
// subscription 
// size 
