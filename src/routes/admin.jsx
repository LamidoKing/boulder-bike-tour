import { DirectionsBike, Mail } from "@material-ui/icons"
import AdminRiders from "adminPage/AdminRiders//AdminRiders"

const AdminRoutes = [
  {
    path: "/admin/riders",
    name: "Riders",
    icon: DirectionsBike,
    component: AdminRiders,
  },
  {
    path: "/admin/submissions",
    name: "Submissions",
    icon: Mail,
    component: "",
  },
  { redirect: true, path: "/admin", pathTo: "/admin/riders", name: "Home" },
]

export default AdminRoutes
