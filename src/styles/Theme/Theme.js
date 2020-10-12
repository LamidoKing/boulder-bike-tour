import { createMuiTheme } from "@material-ui/core/styles"
import { red, amber, grey } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[500],
      light: red.A100,
    },
    secondary: {
      main: amber.A400,
      light: amber[200],
      dark: amber[700],
    },
    white: grey[50],
  },
  type: "dark",
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*::-webkit-scrollbar": {
          display: "none",
        },
      },
    },
  },
})

export default theme
