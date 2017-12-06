export default (message = 'Invalid email address') => value => {
  const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (value && !emailRegEx.test(value)) {
    return message;
  }
  return undefined;
}
