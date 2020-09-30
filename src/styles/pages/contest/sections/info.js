import { makeStyles } from "@material-ui/core"

const infoStyle = makeStyles(() => ({
  paper: {
    background: "#424242",
    opacity: 0.85,
    marginTop: "50px",
    padding: "30px 50px 10px 50px",
  },
  text: {
    textAlign: "center !important",
    paddingBottom: "10px",
  },
  input: {
    paddingTop: "10px",
    paddingBottom: "15px",
  },
  center: {
    textAlign: "center !important",
    padding: "20px 0px 10px",
  },
}))

export default infoStyle
