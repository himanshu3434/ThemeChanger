import React, { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeColor: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeContextProvider = ThemeContext.Provider;

export const useTheme = () => {
  return useContext(ThemeContext);
};
