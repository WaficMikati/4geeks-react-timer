import { useState, useEffect, useMemo } from 'react'
import { secToTime } from '../utilities/timeConvert.js'

export const useTimer = () => {
  const [startTime, setStartTime] = useState(0)
  const [elapsed, setElapsed] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [completed, setCompleted] = useState(false)

  const timeDisplay = useMemo(() => secToTime(elapsed), [elapsed])

  const reset = () => {
    setStartTime(0)
    setElapsed(0)
    setIsPaused(false)
  }

  const stopTimer = () => {
    setElapsed(startTime)
    setIsPaused(true)
  }

  const pause = () => {
    setIsPaused(prev => !prev)
  }

  const setCountdown = (time) => {
    setCompleted(false)
    setStartTime(time)
    setElapsed(time)
  }

  useEffect(() => {
    if (isPaused) return
    
    const interval = setInterval(() => {
      setElapsed(prev => {
        if (prev === 1) setCompleted(true)
        let nextTime = startTime > 0 && !completed ? prev - 1 : prev + 1
        return nextTime
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [elapsed, isPaused, startTime])

  return { timeDisplay, pause, stopTimer, reset, setCountdown, isPaused: isPaused} 
}
