import React, { useContext, createContext, useState } from 'react';

type AuthContextType = {
  mobile: string;
  token: string;
  setMobile: React.Dispatch<React.SetStateAction<string>>;
  setToken: React.Dispatch<React.SetStateAction<string>>;
};
type AuthProviderProp = {
  children: JSX.Element;
};
export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

export const AuthProvider = ({ children }: AuthProviderProp): JSX.Element => {
  const [mobile, setMobile] = useState<string>('');
  const [token, setToken] = useState<string>('');

  return (
    <AuthContext.Provider value={{ mobile, setMobile, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
