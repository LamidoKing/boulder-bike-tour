import { makeStyles } from "@material-ui/core"

const formStyles = makeStyles(() => ({
  paper: {
    background: "#424242",
    marginTop: "40px",
    marginBottom: "40px",
    padding: "30px 50px 10px 50px",
  },
  text: {
    paddingBottom: "10px",
    color: "white",
  },
  input: {
    paddingTop: "10px",
    paddingBottom: "15px",
  },
  center: {
    textAlign: "center !important",
    padding: "20px 0px 10px",
  },
  button: {
    borderRadius: "30px",
  },
}))

const inputProps = {
  color: "white",
}

export { formStyles, inputProps }
