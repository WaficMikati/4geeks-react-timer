import { useEffect } from "react"
import { useState } from "react"

import bgImage from "../assets/bedroom.gif"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

export const Counter = () => {
  let [timeDisplay, setTimeDisplay] = useState(secToTime(0))
  let elapsed = 0

  useEffect(() => {
    const interval = setInterval(() => {
      elapsed++
      setTimeDisplay(secToTime(elapsed))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div id="main-grid">
      <span className="time-display ph">00:00:00</span>
      <span className="time-display">{timeDisplay}</span>
      <img src={bgImage} id="main-bg"></img>
    </div>
  )
}

const secToTime = sec => {
  const hour = Math.trunc(sec / 3600)
  const minute = Math.trunc((sec % 3600) / 60)
  const second = Math.trunc(sec % 60)
  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`
}
