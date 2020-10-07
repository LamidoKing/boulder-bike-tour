import React, { useState } from "react"
import Accordion from "@material-ui/core/Accordion"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { useFetch } from "hooks"
import { Urls } from "utils"
import Loading from "components/Loading/Loading"
import AdminSumStyles from "styles/adminPage/AdminSummision/AdminSumStyles"

const AdminSummision = () => {
  const classes = AdminSumStyles()
  const [expanded, setExpanded] = useState(false)
  const { data, status } = useFetch({
    url: `${Urls.bbtApiUrl}/submissions`,
    method: "GET",
    authGet: true,
  })

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div className={classes.root}>
      <Loading status={status} top />
      {data.map((subm) => {
        return (
          <Accordion
            className={classes.accordion}
            key={subm.id}
            expanded={expanded === subm.id}
            onChange={handleChange(subm.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="secondary" />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <div className={classes.column}>
                <Typography className={classes.heading}>
                  {subm.first_name}
                </Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.heading}>
                  {subm.last_name}
                </Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.heading}>
                  {subm.email}
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.heading}>{subm.slogan}</Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  )
}

export default AdminSummision
