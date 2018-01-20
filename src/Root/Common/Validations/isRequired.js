export default (message = 'Required') => value => (value ? undefined : message);
