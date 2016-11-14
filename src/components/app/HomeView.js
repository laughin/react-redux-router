import React from 'react'
import { Link } from 'react-router'
import { Loader } from 'semantic-ui-react'

export default class HomeView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }
  componentDidMount() {
    this.setState({
      loaded: true
    })
  }
  render() {
    let loading = this.state.loaded ? '' : <Loader active inline />
    return (
      <div>
          <h2>HomeView {loading}</h2>
          <div>
          <Link to="/users">Users</Link>
          <br/>
          <Link to="/about">About</Link>
        </div>
      </div>
    )
  }
}
