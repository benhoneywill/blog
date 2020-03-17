import darkModeTheme from "prism-react-renderer/themes/nightOwl";
import lightModeTheme from "prism-react-renderer/themes/nightOwlLight";

export const getCodeTheme = ({ theme, darkMode }) => {
  const codeTheme = darkMode ? darkModeTheme : lightModeTheme;
  return {
    ...codeTheme,
    plain: {
      ...codeTheme.plain,
      backgroundColor: theme.colors.code
    }
  };
};
