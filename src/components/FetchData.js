import React, { useState, useEffect } from 'react'
import Card from './Card'
import Title from './Title'
import Dropdown from './Dropdown';

const baseApiUrl = `https://disease.sh/v3/covid-19/states`

const FetchData = () => {
  const [errors, setErrors] = useState(false)
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [location, setLocation] = useState('California') 
  
  const onSelectResult = result => {
    setLocation(result)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${baseApiUrl}/${location}`)
        if (!res.ok) {
          throw Error(`Looks like there was a problem. Status Code: ${res.status}`)
        }
        const covidData = await res.json()
        setIsLoading(false)
        setErrors(false)
        // console.log(covidData)
        setData(covidData)
        
      } catch (e) {
        setIsLoading(false)
        setErrors(e)
        console.error(e)
      }
    }

    fetchData()
  }, [location])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className='wrapper'>
      {data &&
        <>
          <Title lastUpdate={data} location={location}/>
          <Dropdown onSelectResult={onSelectResult} />
          <Card cardData={data} />    
        </>
      }
    </div>
  )

}

export default FetchData