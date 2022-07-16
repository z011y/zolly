import { useContext } from "react";
import { MoonIcon, SunIcon } from "@primer/octicons-react";

import { ThemeContext } from "../pages/_app";

export default function ThemeToggle() {
  const theme = useContext(ThemeContext);

  return (
    <button onClick={() => theme.toggleTheme(theme.color)}>
      {theme.color === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
