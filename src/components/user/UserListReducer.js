import { FETCH_USERS } from 'APP/ActionTypes'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_USERS:
      return [ action.payload.data.domainObject, ...state ]
  }
  return state
}
