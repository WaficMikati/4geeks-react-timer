import '../styles/TimerDisplay.css'

export const TimerDisplay = props => {
  return (
    <>
      <span className="timer-display timer-bg">00:00:00</span>
      <span className="timer-display">{props.time}</span>
    </>
  )
}
