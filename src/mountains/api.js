import apiUrl from '../apiConfig.js'

export const handleErrors = res => {
  if (res.ok) {
    return res
  } else  {
    throw new Error('Recieved status in 400 or 500 range.')
  }
}

export const indexMountains = user => {
  return fetch(apiUrl + '/mountains', {
    method: 'GET',
    headers: {
      'Authorization':`Token token=${user.token}`
    },
  })
}

export const showMountain = (user, id) => {
  return fetch(apiUrl + `/mountains/${id}`, {
    method: 'GET',
    headers: {
      'Authorization':`Token token=${user.token}`
    },
  })
}

export const showCompletedSummits = (user, id) => {
  return fetch(apiUrl + `/completed_summits/${id}`, {
    method: 'GET',
    headers: {
      'Authorization':`Token token=${user.token}`
    },
  })
}

export const indexCompletedSummits = (user) => {
  return fetch(apiUrl + '/completed_summits', {
    method: 'GET',
    headers: {
      'Authorization':`Token token=${user.token}`
    },
  })
}

export const editMyNotes = (user, completedSummitId, notes) => {
  return fetch(apiUrl + '/completed_summits/' + completedSummitId, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
    body: JSON.stringify({
      completed_summit: {
        notes: notes
      }
    })
  })
}

export const getWeather = (lat, long) => {
  return fetch(apiUrl + `/forecast?lat=${lat}&long=${long}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
