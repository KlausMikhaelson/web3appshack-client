import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

type AppContextType = {
  isFullHeight: boolean;
  updateIsFullHeight: Dispatch<SetStateAction<boolean>>;
  isHeaderFullWidth: boolean;
  updateIsHeaderFullWidth: Dispatch<SetStateAction<boolean>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  address: string;
  setAddress: Dispatch<SetStateAction<string>>;
};

const defaultState: AppContextType = {
  isFullHeight: false,
  updateIsFullHeight: () => {},
  isHeaderFullWidth: false,
  updateIsHeaderFullWidth: () => {},
  email: '',
  setEmail: () => {},
  address: '',
  setAddress: () => {},
};

const AppContext = createContext<AppContextType>(defaultState);

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }: {
  children: ReactNode | ReactNode[];
}) => {
  const [isFullHeight, setIsFullHeight] = useState(false);
  const updateIsFullHeight = (height: any) => {
    setIsFullHeight(height);
  };

  const [isHeaderFullWidth, setIsHeaderFullWidth] = useState(false);
  const updateIsHeaderFullWidth = (height: any) => {
    setIsHeaderFullWidth(height);
  };

  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  return (
    <AppContext.Provider value={{
      isFullHeight, 
      updateIsFullHeight, 
      isHeaderFullWidth, 
      updateIsHeaderFullWidth, 
      email,
      setEmail,
      address,
      setAddress,
    }}>
      {children}
    </AppContext.Provider>
  );
};
