/* eslint-disable react/forbid-prop-types */
import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import { Button, Typography } from "@material-ui/core"
import Input from "components/Input/Input"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "200px",
    },
  },
  container: {
    padding: "30px 50px 10px 50px",
  },
  text: {
    textAlign: "center",
  },
  button: {
    padding: "0px 20px",
  },
}))

const RiderForm = (props) => {
  const { values, errors, type, handleSummit, handleChange } = props
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Typography variant="h6" color="secondary" className={classes.text}>
        {type === "add" ? "Add New Rider" : "Edit Rider"}
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <Input
          label="First Name"
          id="text"
          value={values.first_name}
          error={errors.first_name_error}
          handleChange={handleChange("first_name")}
        />
        <br />
        <Input
          label="Last Name"
          id="text"
          value={values.last_name}
          error={errors.last_name_error}
          handleChange={handleChange("last_name")}
        />
        <br />
        <Input
          label="State of Origin"
          id="text"
          value={values.state_of_origin}
          error={errors.state_of_origin}
          handleChange={handleChange("state_of_origin")}
        />
        <br />
        <Input
          label="City of Origin"
          id="text"
          value={values.city_of_origin}
          error={errors.city_of_origin}
          handleChange={handleChange("city_of_origin")}
        />
        <br />
        <Input
          label="Latitude"
          id="text"
          value={values.latitude}
          error={errors.latitude_error}
          handleChange={handleChange("latitude")}
        />
        <br />
        <Input
          label="Longitude"
          id="text"
          value={values.longitude}
          error={errors.longitude_error}
          handleChange={handleChange("longitude")}
        />
        <br />
        <div>
          <Button variant="contained" color="primary" onClick={handleSummit}>
            {type === "add" ? "Submmit" : "Edit"}
          </Button>
        </div>
      </form>
    </div>
  )
}

RiderForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleSummit: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}
export default RiderForm
