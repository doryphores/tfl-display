const API_URL = 'https://api.tfl.gov.uk'

async function json (url) {
  return await fetch(`${API_URL}${url}`).then(r => r.json())
}

export async function arrivalsFor (stopID) {
  let arrivals = await json(`/StopPoint/${stopID}/Arrivals`)
  return arrivals
    .sort((a, b) => a.timeToStation - b.timeToStation)
    .map(({ lineName, timeToStation }) => ({ lineName, timeToStation }))
}
