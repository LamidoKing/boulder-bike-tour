import React, { useState } from "react"
import classnames from "classnames"
import Accordion from "@material-ui/core/Accordion"
import {
  AccordionDetails,
  AccordionSummary,
  AccordionActions,
  Divider,
  Typography,
} from "@material-ui/core"
import ExpandMore from "@material-ui/icons/ExpandMore"
import { useFetch } from "hooks"
import { Urls } from "utils"
import adminRidersStyles from "styles/adminPage/adminRiders/adminRiders"
import Loading from "components/Loading/Loading"
import Edit from "./AddEditRider"
import Delete from "./DeleteRider"

const AdminRiders = () => {
  const classes = adminRidersStyles()
  const [expanded, setExpanded] = useState(false)
  const { data, status } = useFetch({
    url: `${Urls.bbtApiUrl}/riders`,
    method: "GET",
  })

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div className={classes.root}>
      <Loading status={status} top />
      {data.map((rider) => {
        return (
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            color="primary"
            key={rider.id}
            className={classes.accordion}
            expanded={expanded === rider.id}
            onChange={handleChange(rider.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMore color="secondary" />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <div className={classes.column}>
                <Typography className={classes.heading}>
                  {rider.first_name}
                </Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.heading}>
                  {rider.last_name}
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <div className={classes.column}>
                <Typography className={classes.heading}>
                  City of Origin: {rider.city_of_origin}
                </Typography>
                <br />
                <Divider />
                <br />
                <Typography className={classes.heading}>
                  State of Origin: {rider.state_of_origin}
                </Typography>
              </div>
              <div className={classnames(classes.column, classes.helper)}>
                <Typography className={classes.heading}>
                  Latitude: {rider.latitude}
                </Typography>
                <br />
                <Divider />
                <br />
                <Typography className={classes.heading}>
                  Longitude: {rider.longitude}
                </Typography>
              </div>
            </AccordionDetails>
            <Divider />
            <AccordionActions>
              <Edit type="edit" rider={rider} />
              <Delete rider={rider} />
            </AccordionActions>
          </Accordion>
        )
      })}
    </div>
  )
}

export default AdminRiders
