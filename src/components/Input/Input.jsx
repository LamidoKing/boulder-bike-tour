import React from "react"
import PropTypes, { number, string } from "prop-types"
import TextField from "@material-ui/core/TextField"

const Input = (props) => {
  const { label, id, value, error, type, required, handleChange } = props
  return (
    <>
      <TextField
        label={label}
        id={id}
        value={value}
        error={error}
        required={required}
        inputProps={{ style: { color: "yellow" } }}
        style={{ width: 300, color: "white" }}
        margin="normal"
        InputLabelProps={{
          style: { color: "yellow" },
        }}
        type={type}
        fullWidth
        color="secondary"
        onChange={handleChange}
      />
    </>
  )
}

Input.defaultProps = {
  label: "",
  id: "",
  value: "",
  type: "string",
  error: false,
  required: false,
  handleChange: () => {},
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.oneOfType([string, number]),
  error: PropTypes.bool,
  type: PropTypes.oneOfType([string, number]),
  required: PropTypes.bool,
  handleChange: PropTypes.func,
}
export default Input
