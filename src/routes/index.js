import React from 'react'
import { Route, IndexRoute } from 'react-router'
import AppContainer from '../containers/AppContainer'

import HomeRoute from './HomeRoute'
import NotFoundRoute from './NotFoundRoute'

export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={HomeRoute} />
    <Route path="*" component={NotFoundRoute} />
  </Route>
)
