import React, { useState, useEffect } from 'react'

const FetchData = () => {
  const [errors, setErrors] = useState(false)
  const [data, setData] = useState({})

  async function fetchData() {
    await fetch("https://corona.lmao.ninja/v2/all")
      .then(res => res.json())
      .then(covidData => setData(covidData), () => console.log(covidData))
      .catch(err => setErrors(err))
  }

  useEffect(() => {
    fetchData()
  }, [])

 
  return (
    <div>
      <span>{JSON.stringify(data)}</span>
      <br></br>
      <span>{JSON.stringify(errors)}</span>
    </div>
  )

}

export default FetchData