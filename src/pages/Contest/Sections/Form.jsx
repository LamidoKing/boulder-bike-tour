/* eslint-disable react/forbid-prop-types */
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
  const { handleChange, values, errors, disableButton, handleSummit } = props
  return (
    <>
      <Paper className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <div className={classes.input}>
            <Typography variant="subtitle1" className={classes.text}>
              First Name
            </Typography>
            <CssTextField
              value={values.first_name}
              inputProps={{ style: inputProps }}
              variant="outlined"
              id="text"
              error={errors.first_name_error}
              label={errors.first_name_error ? "required" : ""}
              required={errors.first_name_error}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              helperText={errors.first_name_error ? "Incorrect entry." : ""}
              size="small"
              onChange={handleChange("first_name")}
            />
          </div>
          <div className={classes.input}>
            <Typography variant="subtitle1" className={classes.text}>
              Last Name
            </Typography>
            <CssTextField
              value={values.last_name}
              inputProps={{ style: inputProps }}
              variant="outlined"
              id="text"
              error={errors.last_name_error}
              label={errors.last_name_error ? "required" : ""}
              required={errors.last_name_error}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              helperText={
                errors.last_name_error ? "last name cannot be emphty." : ""
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
              inputProps={{ style: inputProps }}
              variant="outlined"
              id="email"
              error={errors.email_error}
              label={errors.email_error ? "required" : ""}
              required={errors.email_error}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              helperText={errors.email_error ? "Invalid Email" : ""}
              size="small"
              onChange={handleChange("email")}
            />
          </div>
          <div className={classes.input}>
            <Typography variant="subtitle1" className={classes.text}>
              Slogan
            </Typography>
            <CssTextField
              value={values.slogan}
              inputProps={{ style: inputProps }}
              variant="outlined"
              id="text"
              error={errors.slogan_error}
              label={errors.slogan_error ? "required" : ""}
              required={errors.slogan_error}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              helperText={errors.first_name_error ? "Incorrect entry." : ""}
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
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  disableButton: PropTypes.bool.isRequired,
  handleSummit: PropTypes.func.isRequired,
}

export default Form
