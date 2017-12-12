export default (message = 'Only alphanumeric characters') => value => {
  const alphanumericRegEx = /[^a-zA-Z0-9 ]/i
  if( value && alphanumericRegEx.test(value) ){
    return message;
  }
  return undefined;
}
