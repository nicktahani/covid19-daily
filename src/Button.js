import React, { useState } from 'react'

const Button = () => {
  const [showResults, setShowResults] = useState(true)
  const [isToggled, setIsToggled] = useState(false)

  const toggleButtonText = () => {
    setIsToggled(!isToggled)
    setShowResults(!showResults)
  }

  return (
    <>
      <button onClick={toggleButtonText}>
        {isToggled ? 'Show Daily' : 'Show Total'}
      </button>
      { showResults ? 'daily' : 'total' }
    </>
  )
}

export default Button

