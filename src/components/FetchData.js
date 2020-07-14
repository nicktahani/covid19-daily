import React, { useState, useEffect } from 'react'
import Card from './Card'
import Title from './Title'

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
        console.log(covidData)
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
    <div className='wrapper'>
      {/* if data &&  (in other words...if the data exists)*/}
      {data &&
        <>
          <Title lastUpdate={data} />
          <Card cardData={data} />    
        </>
      }
    </div>
  )

}

export default FetchData