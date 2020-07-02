import React from 'react'
import * as moment from 'moment'

const Title = ({ lastUpdate }) => {
  const { updated } = lastUpdate

  return (
    <div className='title-wrapper'>
      {lastUpdate &&
        <>
          <div id='title'>
            <h1>Daily Global COVID-19 Numbers</h1>
          </div>
          <div>
          Last updated: {moment(new Date(updated)).format('L h:mm:ss A')}
          </div>
        </>
      }
    </div>
  )
}

export default Title