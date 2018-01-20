export default (min, max, message) => value => {
  if (!value || value < min || value > max) {
    if (message) {
      return message;
    } else {
      return `Value should be between ${min} & ${max}`
    }
  }
  return undefined;
}