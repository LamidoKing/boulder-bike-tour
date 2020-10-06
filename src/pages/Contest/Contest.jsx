import React, { useEffect, useState } from "react"
import GridContainer from "components/Grid/GridContainer"
import GridItem from "components/Grid/GridItem"
import Notification from "components/Notification/Notifications"
import contestStyle from "styles/pages/contest/contest"
import { useFetch } from "hooks"
import { Urls } from "utils"
import Loading from "components/Loading/Loading"
import { useHistory } from "react-router-dom"
import Dialog from "components/Dialog/Dialog"
import Form from "./Sections/Form"
import Info from "./Sections/Info"

const Contest = () => {
  const history = useHistory()
  const classes = contestStyle()
  const [open, setOpen] = useState(false)
  const [succesDiaog, setSuccesDiaog] = useState(false)
  const [disableButton, setDisableButton] = useState(true)
  const [message, setMessage] = useState(false)
  const [body, setBody] = useState()
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    slogan: "",
  })

  const [errors, setErrors] = useState({
    first_name_error: false,
    last_name_error: false,
    email_error: false,
    slogan_error: false,
  })
  const { status, error } = useFetch({
    url: `${Urls.bbtApiUrl}/submissions`,
    body,
    method: "POST",
  })

  const verifyEmail = (value) => {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (emailRex.test(value)) {
      return true
    }
    return false
  }

  const verifyLength = (value, length) => {
    if (value.length >= length) {
      return true
    }
    return false
  }

  const handleChange = (prop) => (event) => {
    const { value } = event.target

    if (prop === "first_name" || prop === "last_name") {
      setValues({ ...values, [prop]: value })
      setErrors({
        ...errors,
        [`${prop}_error`]: !verifyLength(value, 1),
      })
    }

    if (prop === "email") {
      setValues({ ...values, [prop]: value })
      setErrors({
        ...errors,
        [`${prop}_error`]: !verifyEmail(value),
      })
    }

    if (prop === "slogan" && value.length <= 50) {
      setValues({ ...values, [prop]: value })
      setErrors({
        ...errors,
        [`${prop}_error`]: !verifyLength(value, 1),
      })
    }
  }

  const handleSummit = () => {
    if (
      values.first_name &&
      values.last_name &&
      values.email &&
      values.slogan
    ) {
      setBody(values)
      return ""
    }
    setBody()
    return ""
  }

  const handleCloseNotification = () => {
    setOpen(false)
  }

  useEffect(() => {
    const valuesKeys = Object.keys(values)

    valuesKeys.map((key) => {
      if (!values[key]) {
        setDisableButton(true)
      }
      return ""
    })

    if (
      values.first_name &&
      values.last_name &&
      values.email &&
      values.slogan
    ) {
      setDisableButton(false)
    }
  }, [values])

  const handleCloseDialog = () => {
    setSuccesDiaog(false)
    history.push("/home")
  }

  useEffect(() => {
    const handleNotification = () => {
      if (status === "error") {
        setMessage(`Email ${error && error.data.email[0]}`)
        setOpen(true)
        return true
      }

      if (status === "fetching") {
        setMessage(``)
        setOpen(false)

        return true
      }
      if (status === "fetched") {
        setMessage(
          "Slogan Summitted Successfull You will recieve email if you are selected"
        )
        setSuccesDiaog(true)
        return true
      }
      return false
    }

    handleNotification()
    return () => {
      handleNotification()
    }
  }, [status, error])

  return (
    <div className={classes.root}>
      <Dialog
        open={succesDiaog}
        message={message}
        handleClose={handleCloseDialog}
      />
      <Loading status={status} />
      <div className={classes.container}>
        <Notification
          open={open}
          setOpen={setOpen}
          message={message}
          handleCloseNotification={handleCloseNotification}
        />
        <GridContainer container justify="center" alignItems="center">
          <GridItem xs={12} sm={6} md={6} lg={6}>
            <Info />
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={6}>
            <Form
              handleChange={handleChange}
              values={values}
              errors={errors}
              status={status}
              disableButton={disableButton}
              handleSummit={handleSummit}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
export default Contest
