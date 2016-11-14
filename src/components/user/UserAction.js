import axios from 'axios'
import * as types from 'APP/ActionTypes'

const ROOT_URL = `http://localhost:8091/admin/api`

export function fetchUser(playerId) {
  const url = `${ROOT_URL}/users/${playerId}`
  const request = axios.get(url)
  return {
    type: types.FETCH_USER,
    payload: request
  }
}

export function fetchUsers() {
  const url = `${ROOT_URL}/users?startTime=2016-10-20%2016:28:04&endTime=2016-10-31%2016:28:04`
  const request = axios.get(url)
  return {
    type: types.FETCH_USERS,
    payload: request
  }
}
