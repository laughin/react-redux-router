import React from 'react'
import { Grid } from 'semantic-ui-react'

import UserListContainer from './UserListContainer'
import UserDetailContainer from './UserDetailContainer'

export default class UserContainer extends React.Component {
  render() {
    return (
      <div>
        <Grid columns='equal'>
          <Grid.Column>
            <UserListContainer />
          </Grid.Column>
          <Grid.Column>
            <UserDetailContainer />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
