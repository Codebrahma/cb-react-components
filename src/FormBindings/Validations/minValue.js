export default (min, message) => value => {
  if(value && value < min) {
    if(message){
      return message;
    }else{
      return `Must be at least ${min}`;
    }
  }
  return undefined;
}