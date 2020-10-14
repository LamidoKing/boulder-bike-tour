import React from "react"
import PropTypes from "prop-types"
import {
  Button,
  Paper,
  Typography,
  TextField,
  withStyles,
} from "@material-ui/core"
import { formStyles, inputProps } from "styles/pages/contest/sections/form"

const CssTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "yellow",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "yellow",
      },
    },
  },
})(TextField)

const Form = (props) => {
  const classes = formStyles()
  const { handleChange, values, disableButton, handleSummit } = props
  return (
    <>
      <Paper className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <div className={classes.input}>
            <Typography variant="subtitle1" className={classes.text}>
              First Name
            </Typography>
            <CssTextField
              value={values.first_name || ""}
              inputProps={{ style: inputProps }}
              variant="outlined"
              id="first name"
              error={values.first_name === ""}
              label={values.first_name === "" ? "first name" : ""}
              required={values.first_name === ""}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              helperText={
                values.first_name === "" ? "First name cannot be empathy" : ""
              }
              size="small"
              onChange={handleChange("first_name")}
            />
          </div>
          <div className={classes.input}>
            <Typography variant="subtitle1" className={classes.text}>
              Last Name
            </Typography>
            <CssTextField
              value={values.last_name || ""}
              inputProps={{ style: inputProps }}
              variant="outlined"
              id="last name"
              error={values.last_name === ""}
              label={values.last_name === "" ? "last name" : ""}
              required={values.last_name === ""}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              helperText={
                values.last_name === "" ? "Last name cannot be empathy" : ""
              }
              size="small"
              onChange={handleChange("last_name")}
            />
          </div>
          <div className={classes.input}>
            <Typography variant="subtitle1" className={classes.text}>
              Email
            </Typography>
            <CssTextField
              value={values.email || ""}
              inputProps={{ style: inputProps }}
              variant="outlined"
              id="email"
              error={values.email === ""}
              label={values.email === "" ? "Email" : ""}
              required={values.email === ""}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              helperText={values.email === "" ? "Email cannot be empathy" : ""}
              size="small"
              onChange={handleChange("email")}
            />
          </div>
          <div className={classes.input}>
            <Typography variant="subtitle1" className={classes.text}>
              Slogan
            </Typography>
            <CssTextField
              value={values.slogan || ""}
              inputProps={{ style: inputProps, maxLength: 50 }}
              variant="outlined"
              id="slogan"
              error={values.slogan === ""}
              label={values.slogan === "" ? "Email" : ""}
              required={values.slogan === ""}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              helperText={
                values.slogan === "" ? "Slogan cannot be empathy" : ""
              }
              size="small"
              multiline
              rows={2}
              onChange={handleChange("slogan")}
            />
          </div>
          <div className={classes.center}>
            <Button
              disabled={disableButton}
              variant="contained"
              size="large"
              color="secondary"
              className={classes.button}
              onClick={handleSummit}
            >
              summit slogoan
            </Button>
          </div>
        </form>
      </Paper>
    </>
  )
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.oneOfType([PropTypes.object]).isRequired,
  disableButton: PropTypes.bool.isRequired,
  handleSummit: PropTypes.func.isRequired,
}

export default Form
