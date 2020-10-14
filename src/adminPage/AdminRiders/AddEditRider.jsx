import React, { createRef, useEffect, useState } from "react"
import PropTypes from "prop-types"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"
import EditIcon from "@material-ui/icons/Edit"
import Tooltip from "@material-ui/core/Tooltip"
import Dialog from "components/Dialog/Dialog"
import { useFetch, useForm } from "hooks"
import { Urls } from "utils"
import { useHistory } from "react-router-dom"
import defaultAvatar from "assets/img/avatar.webp"
import Form from "./RiderForm"

const AddEditRider = (props) => {
  const history = useHistory()
  const { type, rider } = props
  const [open, setOpen] = useState(false)
  const [body, setbBody] = useState()
  const [riderBody, setRiderBody] = useState()
  const [url, setUrl] = useState()
  const [file, setFile] = useState(null)
  const [imagePreviewUrl, setImagePreviewUrl] = useState(defaultAvatar)

  const fileInput = createRef()

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
  const initialState = rider
    ? editRiderdata
    : {
        first_name: undefined,
        last_name: undefined,
        state_of_origin: undefined,
        city_of_origin: undefined,
        latitude: undefined,
        longitude: undefined,
      }
  const { values, empathyField, handleChange } = useForm({ initialState })

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleImageClick = () => {
    fileInput.current.click()
  }

  const handleRemoveUmage = () => {
    setFile(null)
    setImagePreviewUrl(defaultAvatar)
    fileInput.current.value = null
  }

  const handleImageChange = (e) => {
    const reader = new FileReader()
    const uploadedFile = e.target.files[0]
    reader.onloadend = () => {
      setFile(uploadedFile)
      setImagePreviewUrl(reader.result)
    }
    reader.readAsDataURL(uploadedFile)
  }

  const handleSummit = () => {
    if (empathyField.length === 0) {
      const formdata = new FormData()
      if (type === "edit" && rider.id && editRider.status === "idle") {
        if (file) formdata.append("rider[photo]", file)

        const valuesKeys = Object.keys(values)

        valuesKeys.map((key) => {
          if (key === "latitude" || key === "longitude") {
            const value = parseFloat(values[key])
            return formdata.append(`rider[${key}]`, value)
          }
          return formdata.append(`rider[${key}]`, values[key])
        })

        setRiderBody(formdata)
        setUrl(`${Urls.bbtApiUrl}/riders/${rider.id}`)
        return
      }

      if (type === "add" && addRider.status === "idle") {
        if (file) formdata.append("rider[photo]", file)

        const valuesKeys = Object.keys(values)

        valuesKeys.map((key) => {
          if (key === "latitude" || key === "longitude") {
            const value = parseFloat(values[key])
            return formdata.append(`rider[${key}]`, value)
          }

          return formdata.append(`rider[${key}]`, values[key])
        })
        setbBody(formdata)
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
            handleChange={handleChange}
            handleSummit={handleSummit}
            type={type}
            handleImageChange={handleImageChange}
            fileInput={fileInput}
            handleImageClick={handleImageClick}
            handleRemoveImage={handleRemoveUmage}
            imagePreviewUrl={imagePreviewUrl}
            file={file}
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
  rider: PropTypes.oneOfType([PropTypes.object]),
}
export default AddEditRider
