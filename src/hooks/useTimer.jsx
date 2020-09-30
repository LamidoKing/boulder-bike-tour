/* eslint-disable consistent-return */
import { useEffect, useState } from "react"
import moment from "moment"

const useTimer = (date) => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    if (!date) return
    let cancelRequest = false
    const interval = () =>
      setInterval(() => {
        const timeFormat = "MM-DD-YYYY, h:mm a"
        const then = moment(date, timeFormat).format("X")
        const now = moment().format("X")
        const countdown = moment(then - now)

        if (cancelRequest) return

        setDays(parseInt(countdown / (60 * 60 * 24), 10))
        setHours(parseInt((countdown % (60 * 60 * 24)) / (60 * 60), 10))
        setMinutes(parseInt((countdown % (60 * 60)) / 60, 10))
        setSeconds(parseInt(countdown % 60, 10))
      }, 1000)

    interval()

    return () => {
      cancelRequest = true
    }
  }, [date])

  return { days, hours, minutes, seconds }
}

export default useTimer
