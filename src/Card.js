import React from 'react'

// I realize the way i'm bringing in the data below is not ideal,
// but since the data is just a single object in this case, it'll suffice 

const Card = ({ dailyNumbers }) => {
  const { todayCases, todayDeaths, todayRecovered } = dailyNumbers
  return (
    <div className='cards'>
      {dailyNumbers && 
        <div>
          <h1>Cases: {todayCases.toLocaleString()}</h1>
          <h1>Deaths: {todayDeaths.toLocaleString()}</h1>
          <h1>Recovered: {todayRecovered.toLocaleString()}</h1>
        </div>
      }
    </div>
  )
}

export default Card