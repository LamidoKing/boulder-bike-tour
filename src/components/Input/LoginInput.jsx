import { withStyles } from "@material-ui/styles"
import TextField from "@material-ui/core/TextField"

const Input = withStyles(({ filed, hover, focused }) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: filed || "black",
      },
      "&:hover fieldset": {
        borderColor: hover || "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: focused || "black",
      },
    },
  },
}))(TextField)

export default Input
