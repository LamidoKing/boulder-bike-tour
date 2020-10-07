import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useFetch } from "hooks"
import { Urls } from "utils"
import Dialog from "components/Dialog/Dialog"
import ridersStyles from "styles/pages/riders/riders"
import RiderList from "./Sections/RidersList"

const Riders = () => {
  const history = useHistory()
  const [open, setOpen] = useState(false)
  const errorMessage =
    "Network Error Check Your Internet Connetion Do you want refresh"

  const { data, status, error } = useFetch({
    url: `${Urls.bbtApiUrl}/riders`,
    method: "GET",
  })

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    if (status === "error" && !error) {
      setOpen(true)
    }
  }, [status, error])

  const handleRefresh = () => {
    setOpen(false)
    history.go(0)
  }

  const classes = ridersStyles()
  return (
    <div className={classes.root}>
      <Dialog
        open={open}
        errorMessage={errorMessage}
        handleClose={handleClose}
        handleRefresh={handleRefresh}
      />
      <div className={classes.container}>
        <RiderList status={status} riders={data} classes={classes} />
      </div>
    </div>
  )
}

export default Riders
