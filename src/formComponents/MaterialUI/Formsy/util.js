import { indexOf, pick, omitBy } from 'lodash';

export const extractObjectHavingKeys = (keys = [], entireObject = {}) => pick(entireObject, keys);

export const extractObjectOmittingKeys = (keys = [], entireObject = {}) => {
  return omitBy(entireObject, (value, key) => (indexOf(keys, key) !== -1))
}
