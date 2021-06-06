import { createMuiTheme } from "@material-ui/core/styles";
import Astana from "./app/fonts/Astana-regular-italic.woff2";
import { FontFace } from "./fontFaceInterface";

const astanaWeb: FontFace = {
  fontFamily: "Astana",
  fontStyle: "regular-italic",
  fontDisplay: "swap",
  fontWeight: "600",
  src: `
  local('Astana'),
   local('Astana-regular-italic'),
   url(${Astana}) format('woff2')
  `,
  unicodeRange:
    "U+0034, U+0035, U+0037, U+0039, U+0041-0091, U+0093, U+0097-0122, U+0192-0220, U+0224-0252",
};
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 300,
      sm: 600,
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

  typography: {
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
    h2: {
      fontFamily: "Astana",
      fontSize: "7rem",
    },
  },
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
    MuiCssBaseline: {
      "@global": {
        "@font-face": [astanaWeb],
      },
    },
  },
});

export default theme;
