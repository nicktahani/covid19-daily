import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'

// I realize the way i'm bringing in the data below is not ideal,
// but since the data is just a single object in this case, it'll suffice 

const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 3em;

`

const numStyle = {
  fontSize: '2em',
  color: 'red'
}

const Card = ({ dailyData }) => {
  const { todayCases, todayDeaths, todayRecovered } = dailyData
  
  return (
    <CardContainer>
      {dailyData && 
        <>
          <div>
            <h1>
              Cases: <span style={numStyle}>{todayCases.toLocaleString()}</span>
            </h1>
          </div>
          <div>
            <h1>
              Deaths: <span style={numStyle}>{todayDeaths.toLocaleString()}</span>
            </h1>
          </div>
          <div>
            <h1>
              Recovered: <span style={numStyle}>{todayRecovered.toLocaleString()}</span>
            </h1>
          </div>
          <Button />
        </>
      }  
    </CardContainer>
  )
}

export default Card