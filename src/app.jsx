import React from 'react'

import BUS_STOPS from '../data/bus_stops'
import { arrivalsFor } from './services/tfl'
import Container from './container'
import Heading from './heading'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { stops: [] }
  }

  componentDidMount () {
    this.refresh()
  }

  refresh = async () => {
    let stops = await Promise.all(
      BUS_STOPS.map(async (stop) => ({
        label: stop.label,
        arrivals: await arrivalsFor(stop.stopID)
      }))
    )
    this.setState({ stops })
    setTimeout(this.refresh, 4000)
  }

  formatTimeToStation (seconds) {
    if (seconds < 60) return 'Due'
    return Math.floor(seconds / 60) + ' minutes'
  }

  render () {
    return (
      <Container column width='50%'>
        <Heading>Buses</Heading>

        {this.state.stops.map(({ label, arrivals }) => (
          <div key={label}>
            <h3>{label}</h3>
            <ul>
              {arrivals.map(({ lineName, timeToStation }, i) => (
                <li key={lineName + '_' + i}>
                  {lineName}: {this.formatTimeToStation(timeToStation)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
    )
  }
}
