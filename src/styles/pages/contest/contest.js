import { makeStyles } from "@material-ui/core"
import { container } from "styles/general"
import image from "assets/img/contest.jpg"

const contestStyle = makeStyles(() => ({
  container,
  root: {
    position: "relative",
    background: `url(${image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "100vh",
  },
}))

export default contestStyle
