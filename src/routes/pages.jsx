import Home from "pages/Home/Home"
import Photos from "pages/Photos/Photos"
import Location from "pages/Location/Location"
import Riders from "pages/Riders/Riders"
import Contest from "pages/Contest/Contest"

const pagesRoutes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/photos",
    name: "Photos",
    component: Photos,
  },
  {
    path: "/locations",
    name: "Location",
    component: Location,
  },
  {
    path: "/riders",
    name: "Riders",
    component: Riders,
  },
  {
    path: "/contest",
    name: "Contest",
    component: Contest,
  },
  { redirect: true, path: "/", pathTo: "/home" },
]

export default pagesRoutes
