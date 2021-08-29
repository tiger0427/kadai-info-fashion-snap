import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#707070",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export const BodoniFont = createTheme({
  typography: {
    fontFamily: ["Bodoni Moda"].join(","),
  },
});

export const SmallFont = createTheme({
  typography: {
    fontSize: 10,
  },
});

export default theme;
