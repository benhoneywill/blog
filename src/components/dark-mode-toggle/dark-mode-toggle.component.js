import React from "react";

// Contexts
import { useTheme } from "../../contexts/theme";

// Icons
import MoonIcon from "../../icons/moon.svg";
import SunIcon from "../../icons/sun.svg";

// Styles
import { Button } from "./dark-mode-toggle.styles";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <Button darkMode={darkMode} onClick={toggleDarkMode}>
      {darkMode ? (
        <MoonIcon fill="rgba(255,255,255,0.5)" />
      ) : (
        <SunIcon fill="#ffbf00" />
      )}
    </Button>
  );
};

export default DarkModeToggle;
