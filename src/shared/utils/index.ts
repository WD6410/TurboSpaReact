import * as str from './string';
import * as arr from './array';
import * as num from './number';
import * as obj from './object';
import * as date from './date';

export const appUtils = {
  ...str,
  ...arr,
  ...num,
  ...obj,
  ...date,
};
