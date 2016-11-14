import React from 'react'

let DevTools
if (__DEV__ && __COMPONENT_DEVTOOLS__) {
  // 组件形式的 Redux DevTools
  DevTools = require('APP/DevTools').default
}

export default class AppComponent extends React.Component {


  render() {
    return (
      <div>
        {this.props.children}
        { DevTools && <DevTools /> }
      </div>
    )
  }
}
