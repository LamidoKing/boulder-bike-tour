import { makeStyles } from "@material-ui/core"
import { container } from "styles/general"

const HomePhotosStyle = makeStyles((theme) => ({
  container,
  root: {
    ...container,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "red",
    paddingBottom: "5px",
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

  image2: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important",
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "yellow",
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: "red",
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "white",
  },
}))

export default HomePhotosStyle
