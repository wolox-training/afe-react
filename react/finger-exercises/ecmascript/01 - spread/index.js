import isArray from './utils';

export function min() {
  const args = arguments[0];
  if (arguments.length === 0) {
    return undefined;
  }
  if (isArray(args)) {
    return Math.min(...args);
  }
  return Math.min(...arguments);
}

export function copy(val) {
  if (isArray(val)) {
    const arrayClone = [...val];
    return arrayClone;
  }
  const objClone = { ...val };
  return objClone;
}

export function reverseMerge(val1, val2) {
  const result = [...val2, ...val1];
  return result;
}

export function filterAttribs(obj) {
  const { a, b, ...z } = obj;
  return z;
}
