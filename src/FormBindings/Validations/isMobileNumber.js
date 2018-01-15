export default (message = 'Invalid phone number, must be 10 digits') => value => {
  const numberRegEx = /^(0|[1-9][0-9]{9})$/i
  if(value && !numberRegEx.test(value)){
    return message;
  }
  return undefined;
}
