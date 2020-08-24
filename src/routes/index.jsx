import Pages from "Layouts/Pages"
import Admin from "Layouts/Admin"

const indexRoutes = [
  { path: "/admin", type: "private", component: Admin },
  { path: "/", component: Pages },
]

export default indexRoutes
