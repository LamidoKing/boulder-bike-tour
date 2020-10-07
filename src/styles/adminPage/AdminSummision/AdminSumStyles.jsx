import { makeStyles } from "@material-ui/core/styles"

const AdminSumStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    color: "yellow",
  },
  column: {
    flexBasis: "33.33%",
  },
  accordion: {
    background: "#424242",
  },
}))

export default AdminSumStyles
