import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";

const themeContext = React.createContext({});

export const useTheme = () => {
  return React.useContext(themeContext);
};

const themeDefaults = {
  baseFontSize: 20,
  baseLineHeight: 1.6,
  headerLineHeight: 1.2
};

const colorThemes = {
  light: {
    background: "#fefefe",
    text: "#333333",
    lightText: "#555555",
    heading: "#111111",
    primary: "#1E90FF",
    border: "rgba(0, 0, 0, 0.2)"
  },

  dark: {
    background: "#191b1f",
    text: "#C4C6C7",
    lightText: "#949697",
    heading: "#fefefe",
    primary: "#00aced",
    border: "rgba(255, 255, 255, 0.2)"
  }
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState(true);

  React.useEffect(() => {
    window.localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  React.useEffect(() => {
    const initialDarkMode = window.localStorage.getItem("darkMode");
    if (initialDarkMode === "false") setDarkMode(false);
  }, []);

  const colors = darkMode ? colorThemes.dark : colorThemes.light;
  const theme = { ...themeDefaults, colors };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <themeContext.Provider value={{ theme, darkMode, toggleDarkMode }}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </themeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default themeContext;
