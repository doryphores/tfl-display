import React from 'react'
import styled from '@emotion/styled'

import { H2 } from './headings'

const StyledDepartureBoard = styled.div`
  flex: 1;
  padding: 10px 0;

  ul {
    margin: 20px 0 0;
    padding: 0;
  }
`

const DepartureBoard = ({ label, platformName, children }) => (
  <StyledDepartureBoard>
    <H2>{label}</H2>

    <ul>{children}</ul>
  </StyledDepartureBoard>
)

export default DepartureBoard
