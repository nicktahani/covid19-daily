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
          <div>
            <h1>
              Recovered: <span style={numStyle}>{todayRecovered.toLocaleString()}</span>
            </h1>
          </div>
          {/* <Button /> */}
        </>
      }  
    </>
  )
}


export default DailyCovid
