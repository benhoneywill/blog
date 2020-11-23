/* eslint-disable no-underscore-dangle */
import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";

import { appTheme } from "../styles";

const themeContext = React.createContext({});

export const useTheme = () => {
  return React.useContext(themeContext);
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState(null);

  React.useEffect(() => {
    setDarkMode(window.__theme === "dark");
    window.__onThemeChange = () => {
      setDarkMode(window.__theme === "dark");
    };
  }, []);

  const { colors, ...baseTheme } = appTheme;
  const themeColors = darkMode ? colors.dark : colors.light;
  const theme = { ...baseTheme, ...themeColors };

  const toggleDarkMode = () => {
    window.__setPreferredTheme(!darkMode ? "dark" : "light");
    setDarkMode(!darkMode);
  };

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
