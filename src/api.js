import DATA from '../data/stops'

const API_URL = 'https://api.tfl.gov.uk'

async function json (url) {
  return await fetch(`${API_URL}${url}`).then(r => r.json())
}

async function linesFor ({ stopID, modes }) {
  let data = await json(`/StopPoint/${stopID}`)

  return data.lineModeGroups.reduce((lines, { lineIdentifier, modeName }) => {
    return modes.includes(modeName) ? lines.concat(lineIdentifier) : lines
  }, [])
}

async function arrivalFor ({ lineID, stopID, direction }) {
  let data = await json(`/Line/${lineID}/Arrivals/${stopID}?direction=${direction}`)

  return data.length === 0 ? null : data[0].expectedArrival
}

async function arrivalsFor ({ stopID, direction, modes }) {
  let lines = await linesFor({ stopID, modes })
  console.log(lines)
  let arrivals = await Promise.all(lines.map(lineID => arrivalFor({ lineID, stopID, direction })))
  return lines.reduce((a, l, i) => Object.assign(a, { [l]: arrivals[i] }), {})
}

export default async function expectedArrivals () {
  let stops = Object.keys(DATA).reduce((acc, group) => {
    return acc.concat(DATA[group])
  }, [])

  return await Promise.all(stops.map(stop => arrivalsFor(stop)))
}
