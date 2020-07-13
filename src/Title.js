import React from 'react'
import * as moment from 'moment'
import styled from 'styled-components'

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 3em;
`

const HeadingContainer = styled.div`
  font-weight: bold;
  font-size: 4.5em;
`

const UpdatedContainer = styled.div`
  font-size: 1.5em;
  color: #2ecc71;
`

const Title = ({ lastUpdate }) => {
  const { updated } = lastUpdate

  return (
    <TitleContainer>
      {lastUpdate &&
        <>
          <HeadingContainer>
            <div id='title'>
              <span>Global COVID-19</span>
            </div>
          </HeadingContainer>
          <UpdatedContainer>
            <div>
              <span>Last updated: {moment(new Date(updated)).format('L h:mm:ss A')}</span>
            </div>
          </UpdatedContainer>
        </>
      }
    </TitleContainer>
  )
}

export default Title