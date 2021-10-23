import React, { useContext, createContext, useState } from 'react';
type AppContextType = {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
};
type AppContextProviderProp = {
  children: JSX.Element;
};
export const AppContext = createContext<AppContextType>({} as AppContextType);
export const AppContextProvider = ({
  children,
}: AppContextProviderProp): JSX.Element => {
  const [user, setUser] = useState<any>({
    id: '',
    name: '',
    mobile: '',
    isVerified: false,
    candidateList: [],
  });

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);
