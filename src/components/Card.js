import React, { useState } from 'react'
import Button from './Button'
import styled from 'styled-components' 
import DailyCovid from './DailyCovid'
import TotalCovid from './TotalCovid' 

const DataContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 3em;
`

const Card = ({ cardData }) => {
  const [showResults, setShowResults] = useState(true)

  return (
    <>
      <DataContainer>
        {showResults ? <DailyCovid dailyData={cardData}/> : <TotalCovid totalData={cardData}/>}
      </DataContainer>
      <Button toggle={() => setShowResults(!showResults)}/>
    </>
  )
}

export default Card