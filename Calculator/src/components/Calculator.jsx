import { useState } from 'react'
import Button from './Button'
import './Calculator.css'

function Calculator() {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)
  const [equation, setEquation] = useState('')

  const handleNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num))
      setEquation(equation + num)
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? String(num) : display + num)
      if (equation && operation) {
        setEquation(equation + num)
      }
    }
  }

  const handleDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.')
      setEquation(equation + '0.')
      setWaitingForOperand(false)
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.')
      if (equation && operation) {
        setEquation(equation + '.')
      }
    }
  }

  const handleOperation = (nextOperation) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
      setEquation(display + ' ' + nextOperation + ' ')
    } else if (operation) {
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)
      
      setDisplay(String(newValue))
      setPreviousValue(newValue)
      setEquation(String(newValue) + ' ' + nextOperation + ' ')
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue
      case '-':
        return firstValue - secondValue
      case '×':
        return firstValue * secondValue
      case '÷':
        return firstValue / secondValue
      default:
        return secondValue
    }
  }

  const handleEquals = () => {
    const inputValue = parseFloat(display)

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation)
      setDisplay(String(newValue))
      setEquation(equation + ' = ' + String(newValue))
      setPreviousValue(null)
      setOperation(null)
      setWaitingForOperand(true)
    }
  }

  const handleClear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
    setEquation('')
  }

  const handlePercentage = () => {
    const value = parseFloat(display)
    setDisplay(String(value / 100))
  }

  const handleToggleSign = () => {
    const value = parseFloat(display)
    setDisplay(String(value * -1))
  }

  return (
    <div className="calculator">
      <div className="equation">{equation || '\u00A0'}</div>
      <div className="display">{display}</div>
      <div className="buttons">
        <Button onClick={handleClear} className="function">AC</Button>
        <Button onClick={handleToggleSign} className="function">+/-</Button>
        <Button onClick={handlePercentage} className="function">%</Button>
        <Button onClick={() => handleOperation('÷')} className="operator">÷</Button>

        <Button onClick={() => handleNumber(7)}>7</Button>
        <Button onClick={() => handleNumber(8)}>8</Button>
        <Button onClick={() => handleNumber(9)}>9</Button>
        <Button onClick={() => handleOperation('×')} className="operator">×</Button>

        <Button onClick={() => handleNumber(4)}>4</Button>
        <Button onClick={() => handleNumber(5)}>5</Button>
        <Button onClick={() => handleNumber(6)}>6</Button>
        <Button onClick={() => handleOperation('-')} className="operator">-</Button>

        <Button onClick={() => handleNumber(1)}>1</Button>
        <Button onClick={() => handleNumber(2)}>2</Button>
        <Button onClick={() => handleNumber(3)}>3</Button>
        <Button onClick={() => handleOperation('+')} className="operator">+</Button>

        <Button onClick={() => handleNumber(0)} className="zero">0</Button>
        <Button onClick={handleDecimal}>.</Button>
        <Button onClick={handleEquals} className="operator">=</Button>
      </div>
    </div>
  )
}

export default Calculator