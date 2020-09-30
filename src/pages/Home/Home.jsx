import React, { useState } from "react"
import Parallax from "components/Parallax/Parallax"
import pImage from "assets/img/home.jpg"
import homeStyle from "styles/pages//home/homeStyles"
import { useTimer } from "hooks"
import Counter from "./Sections/Counter"
import ContestInfo from "./Sections/ContestInfo"

const Home = () => {
  const classes = homeStyle()
  const [date] = useState("10-22-2020, 4:57 pm")

  const { days, hours, minutes, seconds } = useTimer(date)

  return (
    <div className={classes.root}>
      <Parallax image={pImage} />
      <Counter days={days} hours={hours} minutes={minutes} seconds={seconds} />
      <ContestInfo />
    </div>
  )
}

export default Home
