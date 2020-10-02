import React from "react";
import { Switch, Redirect, Route, useHistory } from "react-router-dom";
import classnames from "classnames";
import {
  useTheme,
  Button,
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Menu, ChevronLeft, ChevronRight } from "@material-ui/icons";
import dashBoardRoutes from "routes/admin";
import { AuthToken } from "utils";
import drawerStyles from "styles/components/drawer";

const switchRoutes = (
  <Switch>
    {dashBoardRoutes.map((prop) => {
      if (prop.redirect) {
        return <Redirect from={prop.path} to={prop.pathTo} key={prop.path} />;
      }

      return (
        <Route path={prop.path} component={prop.component} key={prop.path} />
      );
    })}
  </Switch>
);

const MiniDrawer = () => {
  const history = useHistory();
  const classes = drawerStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const leftPanelLinks = dashBoardRoutes.map((prop) => (
    <ListItem
      button
      key={prop.path}
      onClick={() => history.push(prop.path)}
      className={classes.whiteColor}
    >
      <ListItemIcon className={classes.whiteColor}>
        <prop.icon />
      </ListItemIcon>
      <ListItemText primary={prop.name} />
    </ListItem>
  ));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    AuthToken.logout();
    history.push("/admin");
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classnames(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.container}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={classnames(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            Mini variant drawer
          </Typography>
          <div>
            <Button className={classes.whiteColor} onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={classnames(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: classnames({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton
            className={classes.whiteColor}
            onClick={handleDrawerClose}
          >
            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </div>
        <Divider />
        <List>{leftPanelLinks}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {switchRoutes}
      </main>
    </div>
  );
};

export default MiniDrawer;
