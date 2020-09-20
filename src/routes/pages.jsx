import Home from "pages/Home/Home"

const pagesRoutes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/photos",
    name: "Photos",
    component: Home,
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
