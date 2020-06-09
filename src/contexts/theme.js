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
  headerLineHeight: 1.2,
  fonts: {
    serif: `"Lora", Constantia, ‘Lucida Bright’, Lucidabright, ‘Lucida Serif’, Lucida, ‘DejaVu Serif’, ‘Bitstream Vera Serif’, ‘Liberation Serif’, Georgia, serif`,
    sansSerif: `"lato",Frutiger, ‘Frutiger Linotype’, Univers, Calibri, ‘Gill Sans’, ‘Gill Sans MT’, ‘Myriad Pro’, Myriad, ‘DejaVu Sans Condensed’, ‘Liberation Sans’, ‘Nimbus Sans L’, Tahoma, Geneva, ‘Helvetica Neue’, Helvetica, Arial, sans-serif`
  }
};

const colorThemes = {
  light: {
    background: "#fefefe",
    light: "#f1f1f1",
    text: "#333333",
    lightText: "#666666",
    heading: "#111111",
    primary: "#1E90FF",
    border: "rgba(0, 0, 0, 0.1)",
    codeBackground: "#f5f5f5",
    codeForeground: "#A159C7"
  },

  dark: {
    background: "#191b1f",
    light: "#08090a",
    text: "#C4C6C7",
    lightText: "#888888",
    heading: "#fefefe",
    primary: "#00aced",
    border: "rgba(255, 255, 255, 0.1)",
    codeBackground: "#212329",
    codeForeground: "#ffca8b"
  }
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState(false);

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
