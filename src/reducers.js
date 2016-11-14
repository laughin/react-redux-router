import { combineReducers } from 'redux'
import userListReducer from './components/user/UserListReducer'
import userDetailReducer from './components/user/UserDetailReducer'

const rootReducer = combineReducers({
  userList: userListReducer,
  userDetail: userDetailReducer
})

export default rootReducer
