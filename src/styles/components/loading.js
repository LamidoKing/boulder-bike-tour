import { makeStyles } from "@material-ui/core/styles"

const loadingStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  topMargin: {
    marginTop: "64px",
    "@media (max-width: 576px)": {
      marginTop: "30px",
    },
  },
}))

export default loadingStyles
