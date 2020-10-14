import React, { useEffect, useState } from "react"
import GridContainer from "components/Grid/GridContainer"
import GridItem from "components/Grid/GridItem"
import Notification from "components/Notification/Notifications"
import contestStyle from "styles/pages/contest/contest"
import { useFetch, useForm } from "hooks"
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
  const [message, setMessage] = useState("")

  const initialState = {
    first_name: undefined,
    last_name: undefined,
    email: undefined,
    slogan: undefined,
  }

  const {
    values,
    handleChange,
    toggleSummitButton,
    body,
    handleSummit,
  } = useForm({ initialState })

  const { status, error } = useFetch({
    url: `${Urls.bbtApiUrl}/submissions`,
    body,
    method: "POST",
  })

  const handleCloseNotification = () => {
    setOpen(false)
  }

  const handleCloseDialog = () => {
    setSuccesDiaog(false)
    history.push("/home")
  }

  useEffect(() => {
    const handleNotification = () => {
      if (status === "error") {
        const errorMessage = error
          ? `Email ${error.data.email[0]}`
          : "Network Error Check Your Internet Connetion"
        setMessage(errorMessage)
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
              status={status}
              disableButton={toggleSummitButton}
              handleSummit={handleSummit}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
export default Contest
