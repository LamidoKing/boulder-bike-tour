import React from "react"
import AppBar from "@material-ui/core/AppBar"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import CssBaseline from "@material-ui/core/CssBaseline"
import Hidden from "@material-ui/core/Hidden"
import Fab from "@material-ui/core/Fab"
import IconButton from "@material-ui/core/IconButton"
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike"
import Menu from "@material-ui/icons/Menu"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import Links from "components/Header/HeaderLinks"
import headerStyle from "styles/components/headerStyle"
import ScrollTop from "./ScrollTop"
import ElevationScroll from "./ElevationScroll"

const Header = () => {
  const classes = headerStyle()
  const [state, setState] = React.useState({ left: false })
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Links />
    </div>
  )

  return (
    <>
      <CssBaseline />
      <ElevationScroll>
        <AppBar>
          <Toolbar className={classes.container}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              aria-label="open drawer"
            >
              <DirectionsBikeIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Builder Bike Tour
            </Typography>
            <Hidden smDown implementation="css">
              <div>
                <Links />
              </div>
            </Hidden>
            <Hidden mdUp>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer("left", true)}
              >
                <Menu />
              </IconButton>
            </Hidden>
          </Toolbar>
          <Hidden mdUp implementation="js">
            <>
              <SwipeableDrawer
                anchor="left"
                open={state.left}
                onClose={toggleDrawer("left", false)}
                onOpen={toggleDrawer("left", true)}
              >
                {list("left")}
              </SwipeableDrawer>
            </>
          </Hidden>
        </AppBar>
      </ElevationScroll>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  )
}

export default Header
