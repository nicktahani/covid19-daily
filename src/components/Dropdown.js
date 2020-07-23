import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const DropContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Dropdown = ({ onSelectResult }) => {
  const [allStates, setAllStates] = useState(null)
  const [selectedState, setSelectedState] = useState('California')
  const [isLoading, setIsLoading] = useState(true)

  const handleSelectResult = e => {
    console.log(e.target.value)

    const { value } = e.target
    if (value === selectedState) {
      return
    }
    setSelectedState(value)
    onSelectResult && onSelectResult(value)
  }

  useEffect(() => {
    async function fetchStatesData() {
      try {
        const res = await fetch("https://disease.sh/v3/covid-19/states") 
        if (!res.ok) {
          throw Error(`Error fetching states. Status Code: ${res.status}`)
        }
        const statesData = await res.json()
        setIsLoading(false)
        setAllStates(statesData.map(({ state }) => state))
        console.log(statesData)
      } catch {
        setIsLoading(false)
      }
    }

    fetchStatesData()
  }, [])

  return (
    <DropContainer>
      {allStates &&
        <select
          value={selectedState || 'Select One'} 
          style={{ fontSize: '1em', padding: '.5em' }}
          onChange={handleSelectResult}
          disabled={isLoading}
        >
          {allStates.map(item => (
            <option 
              key={item}
              value={item} 
              onClick={() => handleSelectResult(item)}
            >
              {item}
            </option>
          ))}
        </select>
      }
    </DropContainer>
  )
}

export default Dropdown