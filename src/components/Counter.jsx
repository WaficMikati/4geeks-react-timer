import '../styles/Counter.css'
import bgImage from "../assets/images/bg.gif"
import { useState } from 'react'
import { useTimer } from '../hooks/userTimer.jsx'
import { Buttons } from './Buttons.jsx'
import { TimerDisplay } from './TimerDisplay.jsx'
import { Modal } from './Modal.jsx'

export const Counter = () => {
  const { timeDisplay, pause, stopTimer, reset, setCountdown, isPaused } = useTimer()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div id="main-grid">
      <img src={bgImage} id="main-bg" />
      <TimerDisplay time={timeDisplay}/>
      <Buttons
        onOpenModal={() => setIsModalOpen(true)}
        onPause={pause}
        onStop={stopTimer}
        onReset={reset}
        isPaused={isPaused}
      />
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        onClose={() => setIsModalOpen(false)} 
        onSubmit={setCountdown} 
      />
    </div>
  )
}

