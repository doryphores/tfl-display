import React from 'react'
import ReactDOM from 'react-dom'

import './styles'
import App from './app'

const appContainer = document.createElement('div')
appContainer.classList.add('container')
document.body.appendChild(appContainer)

ReactDOM.render(
  <App />,
  appContainer
)

// arrivalsFor('490001007AB', 'inbound')
