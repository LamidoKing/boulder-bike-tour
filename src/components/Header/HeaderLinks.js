import React from "react"
import { Link } from "react-router-dom"

import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"

import headerLinksRoutes from "routes/pages"

import Button from "@material-ui/core/Button"

import headerLinksStyle from "styles/components/headerLinksStyle"

const HeaderLinks = () => {
  const classes = headerLinksStyle()
  return (
    <List className={`${classes.list} ${classes.mlAuto}`}>
      {headerLinksRoutes.map((prop) => {
        if (prop.redirect) return ""
        return (
          <ListItem className={classes.listItem} key={prop.path}>
            <Button component={Link} to={prop.path} className={classes.navLink}>
              {prop.name}
            </Button>
          </ListItem>
        )
      })}
    </List>
  )
}

export default HeaderLinks
