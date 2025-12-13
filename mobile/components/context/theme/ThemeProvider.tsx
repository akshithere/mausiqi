/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState, createContext, ReactNode } from "react";
import { useColorScheme } from "react-native";
import color, { ColorsType } from "@/constants/colors";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
  colors: ColorsType['light'] | ColorsType['dark'];
}
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const preferredTheme = useColorScheme() ?? "light";
  const [theme, setTheme] = useState(preferredTheme);
  const colors = useMemo(
    () => (theme === "light" ? color.light : color.dark),
    [theme]
  );
  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };
  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      colors,
    }),
    [theme, colors]
  );
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
