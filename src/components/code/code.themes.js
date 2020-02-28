import darkModeTheme from "prism-react-renderer/themes/nightOwl";
import lightModeTheme from "prism-react-renderer/themes/nightOwlLight";

export const darkTheme = {
  ...darkModeTheme,
  plain: {
    ...darkModeTheme.plain,
    backgroundColor: "#212329"
  }
};

export const lightTheme = {
  ...lightModeTheme,
  plain: {
    ...lightModeTheme.plain,
    backgroundColor: "#f5f5f5"
  }
};
