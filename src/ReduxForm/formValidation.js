export default (values) => {
  let error = {};
  console.log('values ', values);
  if (values.name && values.name.length < 6 && values.name.length > 10) {
    error.name = 'Length should be between 6 and 10';
  }
  if (!values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = 'Invalid email address'
  }
  if (!values.age) {
    error.age = 'Age is not valid';
  }
  return error;
}