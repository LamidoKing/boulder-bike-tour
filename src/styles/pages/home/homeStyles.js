import { makeStyles } from "@material-ui/core"
import home from "assets/img/home4.jpg"

const main = {
  background: "white",
  position: "relative",
  zIndex: "3",
}

const mainRaised = {
  "@media (max-width: 576px)": {
    marginTop: "-30px",
  },
  "@media (max-width: 830px)": {
    marginLeft: "10px",
    marginRight: "10px",
  },
  margin: "-60px 30px 0px",
  borderRadius: "6px",
  boxShadow: `0 16px 24px 2px black`,
}
const homeStyle = makeStyles(() => ({
  mainRaised,
  main,
  root: {
    background: `url(${home})`,
    paddingBottom: "60px",
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)",
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
    },
  },
}))

export default homeStyle
