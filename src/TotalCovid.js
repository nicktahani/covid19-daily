import React from 'react'

const numStyle = {
  fontSize: '2em',
  color: 'red'
}

const TotalCovid = ({ totalData }) => {
  const { cases, deaths, recovered } = totalData
  
  return (
    <>
      {totalData && 
        <>
          <div>
            <h1>
              Cases: <span style={numStyle}>{cases.toLocaleString()}</span>
            </h1>
          </div>
          <div>
            <h1>
              Deaths: <span style={numStyle}>{deaths.toLocaleString()}</span>
            </h1>
          </div>
          <div>
            <h1>
              Recovered: <span style={numStyle}>{recovered.toLocaleString()}</span>
            </h1>
          </div>
        </>
      }  
    </>
  )
}


export default TotalCovid

