import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import DailyCovid from './DailyCovid'

// I realize the way i'm bringing in the data below is not ideal,
// but since the data is just a single object in this case, it'll suffice 

const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 3em;

`

const Card = ({ cardData }) => {
  
  
  return (
    <CardContainer> 
      <DailyCovid dailyData={cardData} />
      <Button /> 
    </CardContainer>
  )
}

export default Card