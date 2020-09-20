import React from "react";
import { Typography, AppBar, CssBaseline, Toolbar } from "@material-ui/core";
import Links from "components/Header/HeaderLinks";
import footerStyles from "styles/components/footerStyles";

const Footer = () => {
  const classes = footerStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Links />
          <div className={classes.grow} />
          <Typography className={classes.title} variant="h6" noWrap>
            © 2020 Bulder Biker Tour
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Footer;
