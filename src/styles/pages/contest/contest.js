import { makeStyles } from "@material-ui/core"
import { container } from "styles/general"
import image from "assets/img/contest.webp"

const contestStyle = makeStyles(() => ({
  container,
  root: {
    position: "relative",
    background: `url(${image})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
}))

export default contestStyle
