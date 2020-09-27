import React from "react"
import { useFetch } from "hooks"
import { Urls } from "utils"
import ridersStyles from "styles/pages/riders/riders"
import RiderList from "./Sections/RidersList"

const Riders = () => {
  const { data, status } = useFetch({
    url: `${Urls.bbtApiUrl}/riders`,
    method: "GET",
  })

  const classes = ridersStyles()
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <RiderList status={status} riders={data} classes={classes} />
      </div>
    </div>
  )
}

export default Riders
