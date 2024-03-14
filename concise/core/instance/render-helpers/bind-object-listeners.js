/* @flow */

import { extend, isPlainObject } from 'core/util/index';

export function bindObjectListeners(data, value) {
  if (value) {
    if (!isPlainObject(value)) {
    } else {
      const on = (data.on = data.on ? extend({}, data.on) : {});
      for (const key in value) {
        const existing = on[key];
        const ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data;
}
