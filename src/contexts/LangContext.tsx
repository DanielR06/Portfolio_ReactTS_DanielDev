// import { createContext } from 'react';
// import { useLocalStorage } from '../hooks/UseLocalStorage';

// export const langContext = createContext(null);

// export const UserProvider = ({ children }) => {
//   const [lang, setLang, removeLang] = useLocalStorage('lang', null);
//   const value = { lang, setLang, removeLang };

//   return <langContext.Provider value={value}>{children}</langContext.Provider>;
// };