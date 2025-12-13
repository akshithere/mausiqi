import * as SecureStore from "expo-secure-store";
import { createContext, ReactNode, RefObject, useRef } from "react";

interface AuthContextType {
  login: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
  isAuthenticated: RefObject<boolean>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const isAuthenticated = useRef(false);  

  const login = (accessToken: string, refreshToken: string) => {
    if (accessToken && refreshToken) {
      SecureStore.setItemAsync("accessToken", accessToken);
      SecureStore.setItemAsync("refreshToken", refreshToken);
      isAuthenticated.current = true;
    } else {
      isAuthenticated.current = false;
    }
  };

  const logout = () => {
    SecureStore.deleteItemAsync("accessToken");
    SecureStore.deleteItemAsync("refreshToken");
    isAuthenticated.current = false;
  };

  const value = {
    login,
    logout,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
