import '../styles/Modal.css'
import { useState } from 'react'
import { arrToTime, timeToSec } from '../utilities/timeConvert'

export const Modal = props => {
  const numPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'C', 0, 'B']
  const [secondsInput, setSecondsInput] = useState(new Array(6).fill(0))
  const [position, setPosition] = useState(0)
  const visibilityState = props.isOpen ? 'grid' : 'none'

  const handleClick = event => {
    const name = event.target.id ? 
      event.target.id : 
      (/^[0-9]$/.test(event.target.innerText) ? 
        Number(event.target.innerText) : 
        event.target.innerText)

    switch (true) {
      case name === 'btn-submit':
        props.onClose()
        props.onSubmit(timeToSec(secondsInput))
        break
      case name === 'modal':
        props.setIsOpen(false)
        break
      case typeof name === 'number':
        updateTimerInput(name)
        break
      case name === 'C':
        updateTimerInput(0, 'clear')
        break
      case name === 'B':
        updateTimerInput(0, 'erase')
        break
      default:
        break
    }
  }

  const updateTimerInput = (num, cmd) => {
    const arr = [...secondsInput]

    switch(cmd) {
      case 'clear':
        setSecondsInput(new Array(6).fill(0))
        setPosition(0)
        break
      case 'erase':
        if (position < 0) break 
        setPosition(position - 1)
        arr.pop()
        arr.unshift(0)
        setSecondsInput(arr)
        break
      default:
        if (position > 5) break 
        setPosition(position + 1)
        arr.shift()
        arr.push(num)
        setSecondsInput(arr)
        break
    }
  }

  return (
    <div id='modal' onClick={handleClick} style={{display: visibilityState}}>
      <div id='console'>
        <span id='time-display'>{arrToTime(secondsInput)}</span>
        <div id='numpad'>
          {numPad.map((e, i) => (
            <button key={i} className='btn-numpad'>{e}</button>
          ))}
        </div>
        <button id="btn-submit">set timer</button>
      </div>
    </div>
  )
}
