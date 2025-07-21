import { useState } from 'react'

function App() {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const inputNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num))
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? String(num) : display + num)
    }
  }

  const inputOperation = (nextOperation) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)

      setDisplay(String(newValue))
      setPreviousValue(newValue)
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
      case '=':
        return secondValue
      default:
        return secondValue
    }
  }

  const performCalculation = () => {
    const inputValue = parseFloat(display)

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation)
      setDisplay(String(newValue))
      setPreviousValue(null)
      setOperation(null)
      setWaitingForOperand(true)
    }
  }

  const clear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const toggleSign = () => {
    if (display !== '0') {
      setDisplay(display.charAt(0) === '-' ? display.slice(1) : '-' + display)
    }
  }

  const percentage = () => {
    const value = parseFloat(display)
    setDisplay(String(value / 100))
  }

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-black rounded-3xl p-6 shadow-2xl w-80 max-w-sm">
        {/* Display */}
        <div className="bg-black text-white text-right text-5xl font-light p-6 mb-4 rounded-xl min-h-20 flex items-center justify-end overflow-hidden">
          {display}
        </div>
        
        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-3">
          {/* First Row */}
          <button 
            className="bg-gray-400 hover:bg-gray-300 text-black text-xl font-medium h-16 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            onClick={clear}
          >
            AC
          </button>
          <button 
            className="bg-gray-400 hover:bg-gray-300 text-black text-xl font-medium h-16 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            onClick={toggleSign}
          >
            +/-
          </button>
          <button 
            className="bg-gray-400 hover:bg-gray-300 text-black text-xl font-medium h-16 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            onClick={percentage}
          >
            %
          </button>
          <button 
            className="bg-orange-500 hover:bg-orange-400 text-white text-2xl font-medium h-16 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            onClick={() => inputOperation('÷')}
          >
            ÷
          </button>
          
          {/* Second Row */}
          <button 
            className="bg-gray-700 hover:bg-gray-600 text-white text-2xl font-medium h-16 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            onClick={() => inputNumber(7)}
          >
            7
          </button>
          <button 
            className="bg-gray-700 hover:bg-gray-600 text-white text-2xl font-medium h-16 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            onClick={() => inputNumber(8)}
          >
            8
          </button>
          <button 
            className="bg-gray-700 hover:bg-gray-600 text-white text-2xl font-medium h-16 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            onClick={() => inputNumber(9)}
          >
            9
          </button>
          <button 
            className="bg-orange-500 hover:bg-orange-400 text-white text-2xl font-medium h-16 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            onClick={() => inputOperation('×')}
          >
            ×
          </button>
          
          {/* Third Row */}
          <button 
            className="bg-gray-700 hover:bg-gray-600 text-white text-2xl font-medium h-16 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            onClick={() => inputNumber(4)}
          >
            4
          </button>
          <button 
            className="bg-gray-700 hover:bg-gray-600 text-white text-2xl font-medium h-16 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            onClick={() => inputNumber(5)}
          >
            5
          </button>
          <button 
            className="bg-gray-700 hover:bg-gray-600 text-white text-2xl font-medium h-16 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            onClick={() => inputNumber(6)}
          >
            6
          </button>
          <button 
            className="bg-orange-500 hover:bg-orange-400 text-white text-2xl font-medium h-16 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            onClick={() => inputOperation('-')}
          >
            -
          </button>
          
          {/* Fourth Row */}
          <button 
            className="bg-gray-700 hover:bg-gray-600 text-white text-2xl font-medium h-16 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            onClick={() => inputNumber(1)}
          >
            1
          </button>
          <button 
            className="bg-gray-700 hover:bg-gray-600 text-white text-2xl font-medium h-16 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            onClick={() => inputNumber(2)}
          >
            2
          </button>
          <button 
            className="bg-gray-700 hover:bg-gray-600 text-white text-2xl font-medium h-16 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            onClick={() => inputNumber(3)}
          >
            3
          </button>
          <button 
            className="bg-orange-500 hover:bg-orange-400 text-white text-2xl font-medium h-16 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            onClick={() => inputOperation('+')}
          >
            +
          </button>
          
          {/* Fifth Row */}
          <button 
            className="bg-gray-700 hover:bg-gray-600 text-white text-2xl font-medium h-16 rounded-full col-span-2 text-left pl-6 transition-all duration-200 hover:scale-105 active:scale-95"
            onClick={() => inputNumber(0)}
          >
            0
          </button>
          <button 
            className="bg-gray-700 hover:bg-gray-600 text-white text-2xl font-medium h-16 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            onClick={inputDecimal}
          >
            .
          </button>
          <button 
            className="bg-orange-500 hover:bg-orange-400 text-white text-2xl font-medium h-16 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            onClick={performCalculation}
          >
            =
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
