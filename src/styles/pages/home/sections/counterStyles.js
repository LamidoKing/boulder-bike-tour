import { makeStyles } from "@material-ui/core"
import { paper } from "styles/general"

const counterStyles = makeStyles(() => ({
  paper1: {
    ...paper,
    margin: "-60px 80px 0px",
  },

  countdownItem: {
    background: "black",
    // opacity: "0.8",
    boxShadow: `0 8px 12px 1px black`,
    borderRadius: " 50% !important",
    color: "#111",
    fontSize: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    lineHeight: "30px",
    margin: "30px 40px",
    paddingTop: "10px",
    position: "relative",
    width: "100px",
    height: "100px",
  },
  count: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  box: {
    top: "0",
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    textAlign: "center",
    textTransform: "uppercase",
    paddingTop: "30px",
    paddingBottom: "30px",
    color: "white",
  },

  icon: {
    paddingLeft: "20px",
    marginTop: "40px",
    color: "white",
    fontSize: 50,
  },
}))

export default counterStyles
