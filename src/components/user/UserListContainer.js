import { connect } from 'react-redux'
import { fetchUser, fetchUsers } from './UserAction'
import { bindActionCreators } from 'redux'

import UserListComponent from './UserListComponent'

function mapStateToProps(state) {
  return {
    users: state.userList ? state.userList[0] : []
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser: fetchUser, fetchUsers: fetchUsers}, dispatch)
}

const UserListContainer = connect(mapStateToProps, mapDispatchToProps)(UserListComponent)

export default UserListContainer
