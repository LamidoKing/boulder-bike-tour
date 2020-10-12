import { makeStyles } from "@material-ui/core"
import { container } from "styles/general"
import image from "assets/img/rider1.webp"

const ridersStyle = makeStyles(() => ({
  container,
  paper1: {
    opacity: 0.99,
    background: "#f44336",
    position: "relative",
    zIndex: "3",
    margin: "70px 0px",
    borderRadius: "40px",
  },
  root: {
    position: "relative",
    background: `url(${image})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)",
    },
    "&:after,&:before": {
      position: "absolute",
      width: "100%",
      minHeight: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
    },
  },
  img: {
    width: "150px",
    height: "150px",
    borderRadius: "50% !important",
    boxShadow: "0 5px 15px -8px white",
    transform: "translate3d(0, -40%, 0)",
  },
  align: {
    textAlign: "center",
    color: "white",
  },
  text: {
    textAlign: "center",
    paddingTop: "20px",
    paddingBottom: "30px",
    color: "white",
  },
}))

export default ridersStyle
