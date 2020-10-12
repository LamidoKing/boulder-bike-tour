import { makeStyles } from "@material-ui/core/styles"

const riderFormStyle = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "200px",
    },
  },
  container: {
    padding: "30px 50px 10px 50px",
  },
  text: {
    textAlign: "center",
  },
  button: {
    padding: "0px 20px",
  },
  img: {
    width: "100px",
    height: "100px",
    borderRadius: "50% !important",
    cursor: "pointer",
  },
  align: {
    textAlign: "center",
    marginTop: "15px",
  },
}))

export default riderFormStyle
