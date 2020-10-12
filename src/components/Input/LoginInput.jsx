import { withStyles } from "@material-ui/styles"
import TextField from "@material-ui/core/TextField"

const Input = withStyles(() => ({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  },
}))(TextField)

export default Input
