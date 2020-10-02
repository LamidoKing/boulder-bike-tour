import { DirectionsBike, Mail } from "@material-ui/icons"

const AdminRoutes = [
  {
    path: "/admin/riders",
    name: "Riders",
    icon: DirectionsBike,
    component: "",
  },
  {
    path: "/admin/submissions",
    name: "Submissions",
    icon: Mail,
    component: "",
  },
]

export default AdminRoutes
