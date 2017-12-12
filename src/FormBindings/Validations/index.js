/*
  Higher order functions whose return value is a function
  compatibile with <Field/> of Redux Form
*/

import inRange from './inRange';
import isAlphaNumeric from './isAlphaNumeric.js';
import isEmail from './isEmail.js';
import isMobileNumber from './isMobileNumber.js';
import isNumber from './isNumber.js';
import isRequired from './isRequired.js';
import maxLength from './maxLength.js';
import maxValue from './maxValue.js';
import minLength from './minLength.js';
import minValue from './minValue.js';


export { 
  inRange,
  isAlphaNumeric, 
  isEmail, 
  isMobileNumber,
  isNumber,
  isRequired,
  maxLength,
  maxValue,
  minLength,
  minValue,
}