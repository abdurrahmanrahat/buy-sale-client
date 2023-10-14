import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [mood, setMood] = useState("dark");

  const toggle = () => {
    setMood((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mood }}>
      <div className={`theme ${mood}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
