import React from 'react'
import ReactDOM from 'react-dom'

import './styles'
import App from './app'
import Container from './container'
import Heading from './heading'

const appContainer = document.createElement('div')
appContainer.classList.add('container')
document.body.appendChild(appContainer)

ReactDOM.render(
  <App>
    <Container column width='50%'>
      <Heading>Buses</Heading>
    </Container>
    <Container column width='50%'>
      <Heading>Trains</Heading>
    </Container>
  </App>,
  appContainer
)

// arrivalsFor('490001007AB', 'inbound')
