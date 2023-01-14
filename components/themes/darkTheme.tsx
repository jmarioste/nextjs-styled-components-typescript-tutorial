import { DefaultTheme } from "styled-components";
export const darkTheme: DefaultTheme = {
  name: "dark",
  borderRadius: "4px",
  bodyColor: "#121212",
  textColor: "#a5a5a5",
  palette: {
    common: {
      black: "#121212",
      white: "#ffffff",
    },
    primary: {
      main: "#3b82f6",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#d946ef",
      contrastText: "#ffffff",
    },
  },
};
