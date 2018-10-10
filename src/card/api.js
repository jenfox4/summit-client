import apiUrl from '../apiConfig.js'

export const handleErrors = res => {
  if (res.ok) {
    return res
  } else  {
    throw new Error('Recieved status in 400 or 500 range.')
  }
}

export const deleteCompletedSummit = (user, id) => {
  return fetch(apiUrl + '/completed_summits/' + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    }
  })
}

export const createCompletedSummit = (user, mountainId) => {
  return fetch(apiUrl + '/completed_summits', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
    body: JSON.stringify({
      completed_summit: {
        user_id: user.id,
        mountain_id: mountainId,
        notes: ''
      }
    })
  })
}
