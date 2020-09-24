import Home from "pages/Home/Home"
import Photos from "pages/Photos/Photos"

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
    component: Home,
  },
  {
    path: "/riders",
    name: "Riders",
    component: Home,
  },
  {
    path: "/contest",
    name: "Contest",
    component: Home,
  },
  { redirect: true, path: "/", pathTo: "/home" },
]

export default pagesRoutes
