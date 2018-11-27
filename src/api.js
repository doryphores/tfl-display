import stops from '../data/stops'

const API_URL = 'https://api.tfl.gov.uk'

async function linesFor (stopID) {
  let data = await fetch(`${API_URL}/StopPoint/${stopID}`).then(r => r.json())
  return data.lines.map(l => l.name)
}

async function arrivalFor (lineID, stopID, direction = 'outbound') {
  let data = await fetch(`${API_URL}/Line/${lineID}/Arrivals/${stopID}?direction=${direction}`).then(r => r.json())
  return data.length === 0 ? null : data[0].expectedArrival
}

export async function arrivalsFor (stopID, direction) {
  let lines = await linesFor(stopID)
  let data = await Promise.all(lines.map(l => arrivalFor(l, stopID, direction).then(a => [l, a])))
  return data
}
