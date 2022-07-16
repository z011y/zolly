import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useEffect, useState } from "react";

interface Theme {
  isSystem: boolean;
  color: string;
}

interface ThemeContext extends Theme {
  toggleTheme: (currentTheme: string) => void;
}

export const ThemeContext = createContext<ThemeContext>({
  isSystem: true,
  color: "light",
  toggleTheme: () => {},
});

export default function App({ Component, pageProps }: AppProps) {
  type IsMobile = boolean;

  const [theme, setTheme] = useState<Theme>({ isSystem: true, color: "light" });
  const [isMobile, setIsMobile] = useState<IsMobile>(false);

  function getCurrentTheme() {
    if (!("theme" in localStorage)) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme({ isSystem: true, color: "dark" });
      } else {
        setTheme({ isSystem: true, color: "light" });
      }
    } else {
      if (localStorage.theme === "dark") {
        setTheme({ isSystem: false, color: "dark" });
      } else {
        setTheme({ isSystem: false, color: "light" });
      }
      localStorage.theme = theme.color;
    }
  }

  function toggleTheme(currentTheme: string) {
    setTheme({
      isSystem: false,
      color: currentTheme === "dark" ? "light" : "dark",
    });
  }

  useEffect(() => {
    getCurrentTheme();
  }, []);

  useEffect(() => {
    if (theme.color === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.theme = theme.color;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme: toggleTheme }}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}
