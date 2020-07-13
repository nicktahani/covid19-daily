import React, { useState } from 'react'
import styled from 'styled-components' 

const BtnContainer = styled.button`
  display: flex;
  margin: auto; 
  border-radius: 3em;
  border-color: #2ecc71;
  color: #2ecc71;
  background-color: transparent;
  font-size: 1rem;
  border: 2px solid #2ecc71;
  padding: 1.2em 2.8em;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: #2ecc71;
    color: #2c3e50;
  }
`

const Button = ({ toggle }) => {
  const [isToggled, setIsToggled] = useState(false)

  const toggleButton = () => {
    setIsToggled(!isToggled)
    toggle()
  }

  return (
    <>
      <BtnContainer onClick={toggleButton}>
        {isToggled ? 'Show Daily' : 'Show Total'}
      </BtnContainer>
    </>
  )
}

export default Button

