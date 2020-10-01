import { makeStyles } from "@material-ui/core"
import { container } from "styles/general"

const photosStyle = makeStyles(() => ({
  container,
  root: {
    background: "#424242",
    minHeight: "100vh",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "#424242",
  },
  image: {
    cursor: "pointer",
    transition: "transform 2s, filter 1.5s ease-in-out",
    transformOrigin: "center center",
    filter: "brightness(80%)",

    "&:hover": {
      transform: "scale(1.9)",

      filter: "brightness(50%)",
    },
  },
}))

export default photosStyle
