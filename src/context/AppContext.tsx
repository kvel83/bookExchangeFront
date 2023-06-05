/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState, ReactNode } from 'react';
import AuthService from '../services/auth.service';

interface IAppContext {
  isLoggedIn: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
}

export const AppContext = createContext<IAppContext>({
  isLoggedIn: false,
  handleLogin: () => {},
  handleLogout: () => {},
});

interface AppProviderProps{
  children: ReactNode;
}
export const AppProvider: React.FC<AppProviderProps> = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const handleLogout = () => {
        setIsLoggedIn(false);
        AuthService.logout();
      };

      return (
        <AppContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
          {children}
        </AppContext.Provider>
      );

}