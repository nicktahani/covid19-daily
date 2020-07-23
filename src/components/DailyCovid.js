// I realize the way i'm bringing in the data below is not ideal,
// but since the data is just a single object in this case, it'll suffice 
import React from 'react'

const numStyle = {
  fontSize: '2em',
  color: 'red'
}

const DailyCovid = ({ dailyData }) => {
  const { todayCases, todayDeaths, todayRecovered } = dailyData
  
  return (
    <>
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
        </>
      }  
    </>
  )
}


export default DailyCovid
