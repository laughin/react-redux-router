import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Moment from 'moment'

class UserDetailComponent extends Component {
  render() {
    if (!this.props.user) {
      return <div>Select a user to get started.</div>
    }

    Moment.locale('zh-cn')
    const formattedDT = Moment(this.props.user.data.lastLoginTime).format('lll')
    const user = this.props.user.data
    return (
      <Card>
        <Image src='http://semantic-ui.com/images/avatar2/large/matthew.png' />
        <Card.Content>
          <Card.Header>
            {user.playerId}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              上次登陆时间: {formattedDT}
            </span>
          </Card.Meta>
          <Card.Description>
            {user.platformId}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            {user.site}
          </a>
        </Card.Content>
      </Card>
    )
  }
}

export default UserDetailComponent
