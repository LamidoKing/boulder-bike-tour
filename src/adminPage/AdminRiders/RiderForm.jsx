import React from "react"
import PropTypes from "prop-types"
import { Button, Typography } from "@material-ui/core"
import Input from "components/Input/Input"
import riderFormStyle from "styles/adminPage/adminRiders/riderFormStyle"

const RiderForm = (props) => {
  const {
    values,
    type,
    handleSummit,
    handleChange,
    file,
    fileInput,
    imagePreviewUrl,
    handleImageClick,
    handleRemoveImage,
    handleImageChange,
  } = props
  const classes = riderFormStyle()

  return (
    <div className={classes.container}>
      <Typography variant="h6" color="secondary" className={classes.text}>
        {type === "add" ? "Add New Rider" : "Edit Rider"}
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.align}>
          <img
            src={imagePreviewUrl}
            className={classes.img}
            alt="..."
            onClick={() => handleImageClick()}
            role="presentation"
          />
          <div>
            {file === null ? (
              <Button
                color="secondary"
                size="small"
                onClick={() => handleImageClick()}
              >
                Add Photo
              </Button>
            ) : (
              <Button
                color="secondary"
                size="small"
                onClick={() => handleRemoveImage()}
              >
                Remove
              </Button>
            )}
          </div>
          <input
            type="file"
            onChange={handleImageChange}
            ref={fileInput}
            style={{ display: "none" }}
          />
        </div>
        <Input
          label="First Name"
          id="first name"
          value={values.first_name || ""}
          error={values.first_name === ""}
          handleChange={handleChange("first_name")}
        />
        <br />
        <Input
          label="Last Name"
          id="last name"
          value={values.last_name || ""}
          error={values.last_name === ""}
          handleChange={handleChange("last_name")}
        />
        <br />
        <Input
          label="State of Origin"
          id="state of origin"
          value={values.state_of_origin || ""}
          error={values.state_of_origin === ""}
          handleChange={handleChange("state_of_origin")}
        />
        <br />
        <Input
          label="City of Origin"
          id="city of origin"
          value={values.city_of_origin || ""}
          error={values.city_of_origin === ""}
          handleChange={handleChange("city_of_origin")}
        />
        <br />
        <Input
          label="Latitude"
          id="latitude"
          value={values.latitude}
          error={values.latitude === ""}
          type="number"
          handleChange={handleChange("latitude")}
        />
        <br />
        <Input
          label="Longitude"
          id="longitude"
          value={values.longitude}
          error={values.longitude === ""}
          type="number"
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

RiderForm.defaultProps = {
  file: null,
}

RiderForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleSummit: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  file: PropTypes.oneOfType([PropTypes.object]),
  fileInput: PropTypes.oneOfType([PropTypes.object]).isRequired,
  imagePreviewUrl: PropTypes.string.isRequired,
  handleImageClick: PropTypes.func.isRequired,
  handleRemoveImage: PropTypes.func.isRequired,
  handleImageChange: PropTypes.func.isRequired,
}
export default RiderForm
