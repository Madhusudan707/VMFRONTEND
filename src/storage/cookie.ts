import Cookies, { CookieAttributes } from 'js-cookie';
import { StorageKey } from '../types/typings';

export const getItem = (key: StorageKey) => {
  return Cookies.get(key) || null;
};

export const setItem = (
  key: StorageKey,
  value: string | string[],
  options?: CookieAttributes,
) => {
  return Cookies.set(key, value, options);
};

export const removeItem = (key: StorageKey) => {
  return Cookies.remove(key);
};
