import React from "react";

// Contexts
import { useTheme } from "../../contexts/theme";

// Components
import Emoji from "../emoji";

// Styles
import { Button } from "./dark-mode-toggle.styles";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  if (darkMode === null) return null;

  return (
    <Button
      title="Toggle dark mode"
      darkMode={darkMode}
      onClick={toggleDarkMode}
    >
      <Emoji emoji={darkMode ? "🌙" : "☀️"} label={darkMode ? "Moon" : "Sun"} />
    </Button>
  );
};

export default DarkModeToggle;
