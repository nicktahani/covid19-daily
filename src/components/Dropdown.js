import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const DropContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Dropdown = () => {
  const [items, setItems] = useState(null)

  useEffect(() => {
    async function fetchStatesData() {
      const res = await fetch("https://disease.sh/v3/covid-19/states")
      if (!res.ok) {
        throw Error(`Error fetching states. Status Code: ${res.status}`)
      }
      const statesData = await res.json()
      setItems(statesData.map(({ state }) => ({ label: state, value: state })))
      console.log(statesData)
    }

    fetchStatesData()
  }, [])
  return (
    <DropContainer>
      {items &&
        <select>
          {items.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      }
    </DropContainer>
  )
}

export default Dropdown