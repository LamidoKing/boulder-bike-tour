import { makeStyles } from "@material-ui/core"
import { paper } from "styles/general"
// import counterBike from "assets/img/counterBike.jpg"

const contestInfoStyles = makeStyles(() => ({
  paper2: {
    ...paper,
    margin: "60px 80px 60px",
    "@media (max-width: 576px)": {
      marginTop: "50px",
    },
  },
  title: {
    textAlign: "center",
    textTransform: "uppercase",
    paddingTop: "30px",
    paddingBottom: "30px",
    color: "white",
  },
  text: {
    textAlign: "center",
    paddingTop: "20px",
    paddingBottom: "30px",
    color: "white",
  },
  center: {
    textAlign: "center !important",
    paddingBottom: "30px",
  },
  button: {
    borderRadius: "30px",
  },
}))

export default contestInfoStyles
