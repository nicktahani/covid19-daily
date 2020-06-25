import React from 'react'

const Card = ({ todaysData }) => {

  return (
  <div className='cards'>
    {/* if data &&  */}
    {todaysData && 
      <div>
        <h1>{todaysData.cases.toLocaleString()}</h1>
        <h1>{todaysData.deaths.toLocaleString()}</h1>
        <h1>{todaysData.recovered.toLocaleString()}</h1>
      </div>
    }
  </div>

  )
}

export default Card