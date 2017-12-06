export default (max, message) => value => {
  if(value && value.length > max) {
    if(message){
      return message;
    }else{
      return `Must be ${max} characters or less`
    }
  }
  return undefined;
}