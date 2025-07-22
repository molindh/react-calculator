import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [text, setText] = useState('')
  const calculate = () => {
    try {
      // Evaluate the equation in text and update the state
      // Only allow numbers and +, - for safety
      if (/^[\d+\-\*\/ ]+$/.test(text)) {
        // eslint-disable-next-line no-eval
        const answer = eval(text)
        let newText = answer.toString()
        if (answer === 42) {
          newText += ' (Meaning of Life)'
        }
        setText(newText)
      } else {
        setText('Error 246')
      }
    } catch {
      setText('Error 364')
    }
  }

  const reset = () => {
    setText('')
  }

  const textInput = (e) => {
    const inputValue = e.target.value
     if (inputValue === '' || /^[\d+\-\*\/ ]+$/.test(inputValue)) {
      setText(inputValue)
    }

  }

  const keyDown = (e) => {
     if (e.key === 'Enter') calculate()
     if (e.key === 'Escape') reset()
      if (e.key.toLowerCase() === 'm') {
        setText('😎😎😎😎😎😎🤐')
      }
  }


  return (
    <>
      <div>

       
      </div>
      <h1>calculator

      </h1>
      <div className="card">
        <input
          className="calc-input"
          onInput={textInput}
          autoFocus={true}
          onKeyDown={keyDown}
          value={text}
          type="text"
        />
        <br />
        <div className="calc-grid">
          <button className="calc-btn" onClick={reset}>C</button>
          <button className="calc-btn" onClick={() => setText(text + '1')}>1</button>
          <button className="calc-btn" onClick={() => setText(text + '2')}>2</button>
          <button className="calc-btn" onClick={() => setText(text + '3')}>3</button>
          <button className="calc-btn" onClick={() => setText(text + '*')}>*</button>
          <button className="calc-btn" onClick={() => setText(text + '4')}>4</button>
          <button className="calc-btn" onClick={() => setText(text + '5')}>5</button>
          <button className="calc-btn" onClick={() => setText(text + '6')}>6</button>
          <button className="calc-btn" onClick={() => setText(text + '/')}>/</button>
          <button className="calc-btn" onClick={() => setText(text + '7')}>7</button>
          <button className="calc-btn" onClick={() => setText(text + '8')}>8</button>
          <button className="calc-btn" onClick={() => setText(text + '9')}>9</button>
          <button className="calc-btn" onClick={() => setText(text + '+')}>+</button>
          <button className="calc-btn" onClick={() => setText(text + '0')}>0</button>
          <button className="calc-btn" onClick={() => setText(text + '-')}>-</button>
          <button className="calc-btn" onClick={calculate}>=</button>
        </div>
      </div>
     
    </>
  )
}

export default App
