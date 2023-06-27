import { useState, createContext } from "react";
export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  console.log("ThemeProvider rendered");
  const [theme, setTheme] = useState("light");

  const value = {
    theme,
    setTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
