import { makeStyles } from "@material-ui/core"
import { container } from "styles/general"

const photosStyle = makeStyles(() => ({
  container,
  root: {
    background: "#424242",
    minHeight: "100vh",
  },
  card: {
    display: "inline-block",
    position: "relative",
    width: "100%",
    maxHeight: "160px",
    margin: "10px 0",
    // boxShadow: `0 5px 12px 1px black`,
    // borderRadius: "3px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff",
    borderRadius: "6px",
    // borderTop: "2px solid yellow",
    boxShadow: "0 5px 15px -8px black)",
  },
}))

export default photosStyle
