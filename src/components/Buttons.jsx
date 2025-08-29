import '../styles/Buttons.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Buttons = props => {
  const playPause = props.isPaused ? "play" : "pause"
  const faIcon = ["fas", playPause]
  return (
    <div id="btn-row">
      <button className="btn" onClick={props.onOpenModal}>
        <FontAwesomeIcon icon={["fas", "clock"]} />
      </button>
      <button className="btn" onClick={props.onPause}>
        <FontAwesomeIcon icon={playPause} />
      </button>
      <button className="btn" onClick={props.onStop}>
        <FontAwesomeIcon icon={["fas", "stop"]} />
      </button>
      <button className="btn" onClick={props.onReset}>
        <FontAwesomeIcon icon={["fas", "rotate"]} />
      </button>
    </div>
  )
}
