import { createMuiTheme } from "@material-ui/core/styles"
import { red, amber, grey } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      main: amber.A400,
      light: amber[200],
      dark: amber[700],
    },
    white: grey[50],
  },
  type: "dark",
})

export default theme
