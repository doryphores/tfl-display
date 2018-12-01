import React from 'react'
import ReactDOM from 'react-dom'

import GlobalStyles from './global_styles'
import { Row, Panel } from './layout'
import { H1 } from './headings'
import Buses from './buses'

ReactDOM.render(
  <Row divider>
    <GlobalStyles />
    <Buses />
    <Panel>
      <H1>🚇 Trains</H1>
    </Panel>
  </Row>,
  document.getElementById('app')
)
