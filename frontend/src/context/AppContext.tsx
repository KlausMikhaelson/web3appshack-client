import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

type AppContextType = {
  isFullHeight: boolean;
  updateIsFullHeight: Dispatch<SetStateAction<boolean>>;
};

const defaultState: AppContextType = {
  isFullHeight: false,
  updateIsFullHeight: () => {},
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

  return (
    <AppContext.Provider value={{
      isFullHeight, 
      updateIsFullHeight, 
    }}>
      {children}
    </AppContext.Provider>
  );
};
