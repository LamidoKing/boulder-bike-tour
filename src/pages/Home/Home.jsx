import React from "react"
import Parallax from "components/Parallax/Parallax"
import pImage from "assets/img/home.jpg"
import homeStyle from "styles/pages//home/homeStyles"
import Counter from "./Sections/Counter"
import ContestInfo from "./Sections/ContestInfo"

const Home = () => {
  const classes = homeStyle()
  return (
    <div className={classes.root}>
      <Parallax image={pImage} />

      <Counter date="9-22-2020, 4:57 pm" />
      <ContestInfo />
    </div>
  )
}

export default Home
