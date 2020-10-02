import Pages from "Layouts/Pages"
import Admin from "Layouts/Admin"
import Login from "adminPage/Login/Login"

const indexRoutes = [
  { path: "/admin", type: "private", component: Admin },
  { path: "/login", component: Login },
  { path: "/", component: Pages },
]

export default indexRoutes
