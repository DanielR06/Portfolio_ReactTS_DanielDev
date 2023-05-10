import { useState } from 'react';

type valueStorage = string | number;

export const useLocalStorage = (key: string , initialValue: valueStorage ) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  const setValue = (value: valueStorage) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };
  const removeValue = () => {
    try {
      setStoredValue(null);
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  };
  return [storedValue, setValue, removeValue];
};