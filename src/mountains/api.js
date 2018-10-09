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

export const showCompletedSummits = (user) => {
  return fetch(apiUrl + '/completed_summits', {
    method: 'GET',
    headers: {
      'Authorization':`Token token=${user.token}`
    },
  })
}
