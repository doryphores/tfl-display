import React from 'react'

import expectedArrivals from './api'
import Container from './container'

const { Provider } = React.createContext([])

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      arrivals: []
    }
  }

  componentDidMount () {
    // this.refresh()
  }

  refresh = async () => {
    let arrivals = await expectedArrivals()
    console.log(arrivals)
    this.setState({ arrivals })
    setTimeout(this.refresh, 40000)
  }

  render () {
    return (
      <Provider value={this.state.arrivals}>
        <Container fullWidth>
          {this.props.children}
        </Container>
      </Provider>
    )
  }
}
