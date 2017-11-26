/*
  Higher order functions whose return value is a function
  compatibile with <Field/> of Redux Form
*/

/*
  Pass custom error message to override
  default error messages
*/

export const isRequired = (message = 'Required') => value => (value ? undefined : message)

export const isNumber = (message = 'Must be a number') => value =>
  value && isNaN(Number(value)) ? message : undefined

export const isEmail = (message = 'Invalid email address') =>  value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? message
    : undefined

export const isAlphaNumeric = (message = 'Only alphanumeric characters') => value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? message
    : undefined

export const isMobileNumber = (message = 'Invalid phone number, must be 10 digits') => value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? message
    : undefined

export const maxLength = (max, message = '') => value =>
  value && value.length > max ? (message || `Must be ${max} characters or less`) : undefined

export const minLength = (min, message = '') => value =>
  value && value.length < min ? (message || `Must be ${min} characters or more`) : undefined

export const minValue = (min, message = '') => value =>
  value && value < min ? (message || `Must be at least ${min}`) : undefined
 