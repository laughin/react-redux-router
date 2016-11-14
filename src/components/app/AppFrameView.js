import React from 'react'

import AppContainer from './AppContainer'

export default class AppFrame extends React.Component {
  render() {
    return (
      <AppContainer>
        {this.props.children}
      </AppContainer>
    )
  }
}
