export default (message = 'Must be a number') => value => value && isNaN(Number(value)) ? message : undefined;
