export default (max, message) => value => {
  if(value && value > max) {
    if(message){
      return message;
    }else{
      return `Must be less than ${max}`;
    }
  }
  return undefined;
}