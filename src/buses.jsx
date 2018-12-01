import React from 'react'

import BUS_STOPS from '../data/bus_stops'
import { arrivalsFor } from './services/tfl'
import { Row, Panel } from './layout'
import { H1 } from './headings'
import DepartureBoard from './departure_board'
import DepartureBoardItem from './departure_board_item'

const REFRESH_INTERVAL = 30000

export default class Buses extends React.Component {
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
        ...stop,
        arrivals: await arrivalsFor(stop.stopID)
      }))
    )
    this.setState({ stops })
    setTimeout(this.refresh, REFRESH_INTERVAL)
  }

  render () {
    return (
      <Panel>
        <H1>🚍 Buses</H1>

        <Row>
          {this.state.stops.map(({ label, arrivals, platformName }) => (
            <DepartureBoard key={platformName}
              platformName={platformName}
              label={label}>

              {arrivals.slice(0, 12).map(({ lineName, timeToStation }, i) => (
                <DepartureBoardItem key={lineName + i}
                  lineName={lineName}
                  timeToStation={timeToStation} />
              ))}

            </DepartureBoard>
          ))}
        </Row>
      </Panel>
    )
  }
}
