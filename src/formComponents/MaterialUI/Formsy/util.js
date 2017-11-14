import { pick, omit } from 'lodash';

export const extractObjectHavingKeys = (keys = [], entireObject = {}) => pick(entireObject, keys);
export const extractObjectOmittingKeys = (keys = [], entireObject = {}) => omit(entireObject, keys);
