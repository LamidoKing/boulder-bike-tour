import { makeStyles } from "@material-ui/core/styles"

const mapStyles = makeStyles(() => ({
  map: {
    width: "100%",
    height: "90vh",
  },
  marker: {
    width: "50px",
    height: "50px",
    borderRadius: "50% !important",
    boxShadow: "0 5px 15px -8px white",
  },
  align: {
    textAlign: "center",
    color: "white",
  },
  dialogImg: {
    width: "100px",
    height: "100px",
    borderRadius: "50% !important",
    boxShadow: "0 5px 15px -8px white",
  },
}))

export default mapStyles
