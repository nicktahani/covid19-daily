import React from 'react'
import styled from 'styled-components'

// I realize the way i'm bringing in the data below is not ideal,
// but since the data is just a single object in this case, it'll suffice 

const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

`

const Card = ({ dailyNumbers }) => {
  const { todayCases, todayDeaths, todayRecovered } = dailyNumbers
  
  return (
    <CardContainer>
      {dailyNumbers && 
        <>
          <div>
            <h1>Cases: {todayCases.toLocaleString()}</h1>
          </div>
          <div>
            <h1>Deaths: {todayDeaths.toLocaleString()}</h1>
          </div>
          <div>
            <h1>Recovered: {todayRecovered.toLocaleString()}</h1>
          </div>
        </>
      }  
    </CardContainer>
  )
}

export default Card