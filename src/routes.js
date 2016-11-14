import React from 'react'
import ReactDOM from 'react-dom'
import { Route, IndexRoute } from 'react-router'

import AppFrameView from './components/app/AppFrameView'
import HomeView from './components/app/HomeView'
import AboutView from './components/app/AboutView'
import NotFoundView from './components/app/NotFoundView'

import UserIndexView from './components/user/UserIndexView'

let routeMap = (
  <Route path='/' component={AppFrameView}>
    <IndexRoute component={HomeView} />
    <Route path='/users' component={UserIndexView} />
    <Route path='/about' component={AboutView} />
    <Route path='*' component={NotFoundView} />
  </Route>
)

export default routeMap
