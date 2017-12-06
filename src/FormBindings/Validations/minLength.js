export default (min, message) => value => {
  if(value && value.length < min) {
    if(message){
      return message;
    }else{
      return `Must be ${min} characters or more`
    }
  }
  return undefined;
}