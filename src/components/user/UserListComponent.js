import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react'

class UserListComponent extends Component {

  componentWillMount() {
    this.props.fetchUsers()
  }

  renderList() {
    if (this.props.users) {
      return this.props.users.map((user) => {
        return (
          <List.Item key={user.playerId} onClick={() => this.props.fetchUser(user.playerId)}>
            <Image avatar src='http://semantic-ui.com/images/avatar2/small/rachel.png' />
            <List.Content>
              <List.Header as='a'>{user.playerId}</List.Header>
              <List.Description>{user.site}</List.Description>
            </List.Content>
          </List.Item>
        )
      })
    }
  }

  render() {
    return (
      <List>
        {this.renderList()}
      </List>
    )
  }
}

export default UserListComponent
