import React, { useState, useEffect } from 'react'
import Card from './Card'
import * as moment from 'moment'

const FetchData = () => {
  const [errors, setErrors] = useState(false)
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://corona.lmao.ninja/v2/all")
        if (!res.ok) {
          throw Error(`Looks like there was a problem. Status Code: ${res.status}`)
        }
        const covidData = await res.json()
        setIsLoading(false)
        setErrors(false)
        setData(covidData)
      } catch (e) {
        setIsLoading(false)
        setErrors(e)
        console.error(e)
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {data &&
        <React.Fragment>
          <div>
            {Object.keys(data).map((key, i) => (
              <li key={i}>
                <span><b>{key}</b>: {data[key]}</span>
              </li>
            ))}
          </div>
        
          <br/>

          Last updated: {moment(new Date(data.updated)).format('dddd, MMMM Do, YYYY h:mm:ss A')}
          <Card todaysData={data}/>
        </React.Fragment>
      }
    </div>
  )

}

export default FetchData