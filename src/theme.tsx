import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 300,
      sm: 800,
      md: 960,
      lg: 1080,
      xl: 1360,
    },
  },
  palette: {
    primary: {
      main: "#f8b816",
      contrastText: "#fff",
    },
    secondary: {
      main: "#e53743",
    },
  },
  spacing: 0,

  overrides: {
    MuiButton: {
      text: {
        color: "white",
      },
    },
    MuiAppBar: {
      root: {
        flexGrow: 1,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        maxHeight: 100,
      },
    },
    MuiToolbar: {
      root: {
        minHeight: 100,
      },
    },
  },
});

export default theme;
