import { connect } from 'react-redux'

import UserDetailComponent from './UserDetailComponent'

function mapStateToProps(state) {
  return {
    user: state.userDetail
  }
}

const UserDetailContainer = connect(mapStateToProps)(UserDetailComponent)

export default UserDetailContainer
