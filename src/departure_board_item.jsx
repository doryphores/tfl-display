import React from 'react'
import styled from '@emotion/styled'

const StyledDepartureBoardItem = styled.li`
  list-style: none;
  margin: 0 0 0 0;
  padding: 0;

  + li {
    margin-top: 5px;
  }

  span {
    display: inline-block;
    padding: 3px 5px;
    margin-right: 10px;
    border-radius: 2px;
    background-color: #d32f2f;
    color: white;
    font-weight: bold;
    font-size: 20px;
  }

  strong {
    font-weight: bold;
  }
`

function formatTimeToStation (seconds) {
  if (seconds < 60) return <strong>Due</strong>
  let minutes = Math.floor(seconds / 60)
  return (
    <React.Fragment>
      in <strong>{minutes}</strong> minute{minutes === 1 ? '' : 's'}
    </React.Fragment>
  )
}

const DepartureBoardItem = ({ lineName, timeToStation }) => (
  <StyledDepartureBoardItem>
    <span>{lineName}</span>
    {formatTimeToStation(timeToStation)}
  </StyledDepartureBoardItem>
)

export default DepartureBoardItem
