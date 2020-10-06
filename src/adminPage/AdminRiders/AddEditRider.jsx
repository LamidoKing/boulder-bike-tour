/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"
import EditIcon from "@material-ui/icons/Edit"
import Tooltip from "@material-ui/core/Tooltip"
import Dialog from "components/Dialog/Dialog"
import { useFetch } from "hooks"
import { Urls } from "utils"
import { useHistory } from "react-router-dom"
import Form from "./RiderForm"

const AddEditRider = (props) => {
  const history = useHistory()
  const { type, rider } = props
  const [open, setOpen] = useState(false)
  const [body, setbBody] = useState()
  const [riderBody, setRiderBody] = useState()
  const [url, setUrl] = useState()

  const addRider = useFetch({
    url: `${Urls.bbtApiUrl}/riders`,
    body,
    method: "POST",
  })

  const editRider = useFetch({
    url,
    body: riderBody,
    method: "PATCH",
  })

  const editRiderdata = rider && {
    first_name: rider.first_name,
    last_name: rider.last_name,
    state_of_origin: rider.state_of_origin,
    city_of_origin: rider.city_of_origin,
    latitude: rider.latitude,
    longitude: rider.longitude,
  }
  const iniatialState = rider
    ? editRiderdata
    : {
        first_name: "",
        last_name: "",
        state_of_origin: "",
        city_of_origin: "",
        latitude: "",
        longitude: "",
      }
  const [values, setValues] = useState(iniatialState)

  const [errors, setErrors] = useState({
    first_name_error: false,
    last_name_error: false,
    state_of_origin_error: false,
    city_of_origin_error: false,
    latitude_error: false,
    lonngitude_error: false,
  })

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const verifyLength = (value, length) => {
    if (value.length >= length) {
      return true
    }
    return false
  }

  const handleChange = (prop) => (event) => {
    const { value } = event.target

    if (
      prop === "first_name" ||
      prop === "last_name" ||
      prop === "state_of_origin" ||
      prop === "city_of_origin"
    ) {
      setValues({ ...values, [prop]: value })
      setErrors({
        ...errors,
        [`${prop}_error`]: !verifyLength(value, 1),
      })
    }
    if (prop === "latitude" || prop === "longitude") {
      const toFloat = parseFloat(value)
      if (toFloat) {
        setValues({ ...values, [prop]: value })
        setErrors({
          ...errors,
          [`${prop}_error`]: false,
        })
        return
      }
      setValues({ ...values, [prop]: "" })
      setErrors({
        ...errors,
        [`${prop}_error`]: true,
      })
    }
  }

  const handleSummit = () => {
    if (
      values.first_name &&
      values.last_name &&
      values.state_of_origin &&
      values.city_of_origin &&
      values.latitude &&
      values.longitude
    ) {
      if (type === "edit" && rider.id && editRider.status === "idle") {
        setRiderBody(values)
        setUrl(`${Urls.bbtApiUrl}/riders/${rider.id}`)
        return
      }

      if (type === "add" && addRider.status === "idle") {
        setbBody(values)
      }
    }
  }

  useEffect(() => {
    if (editRider.status === "fetched") {
      setRiderBody("")
      setUrl("")
      setOpen(false)
      history.push("/admin")
    }
    if (addRider.status === "fetched") {
      setbBody("")
      setOpen(false)
      history.push("/admin")
    }
  }, [editRider.status, addRider.status, history])
  return (
    <>
      <Tooltip
        title={type === "add" ? "New Rider" : "Edit Rider"}
        aria-label="add"
      >
        <Fab
          color="secondary"
          aria-label="add"
          size="medium"
          style={{ marginRight: "15px" }}
          onClick={handleClickOpen}
        >
          {type === "add" ? <AddIcon /> : <EditIcon />}
        </Fab>
      </Tooltip>
      <Dialog
        open={open}
        handleClose={handleClose}
        Component={
          <Form
            values={values}
            errors={errors}
            handleChange={handleChange}
            handleSummit={handleSummit}
            type={type}
          />
        }
      />
    </>
  )
}

AddEditRider.defaultProps = {
  type: "add",
  rider: null,
}
AddEditRider.propTypes = {
  type: PropTypes.string,
  rider: PropTypes.object,
}
export default AddEditRider
