import React from "react"
import Parallax from "components/Parallax/Parallax"
import pImage from "assets/img/home.webp"
import homeStyle from "styles/pages//home/homeStyles"
import Counter from "./Sections/Counter"
import ContestInfo from "./Sections/ContestInfo"
import Photos from "./Sections/Photos"

const Home = () => {
  const classes = homeStyle()

  return (
    <div className={classes.root}>
      <Parallax image={pImage} filter />
      <Counter />
      <ContestInfo />
      <Photos image={pImage} />
    </div>
  )
}

export default Home
