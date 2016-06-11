import { createElement } from 'react'
import ReactDOM from 'react-dom'
import MountContainer from './containers/MountContainer'
import { createStore, applyMiddleware } from 'redux'
import { browserHistory, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import routes from './routes'

// App config goes in `application.json`
const {
  rootElementId,
} = require('../application.json')

const IS_PROD_ENV = process.env.NODE_ENV === 'production'

const historyApi = IS_PROD_ENV ? browserHistory : hashHistory

// Global app state persisted in redux
const store = createStore(
  reducer,
  applyMiddleware(
    createSagaMiddleware(),
    routerMiddleware(historyApi)
  )
)

// Sync browser history with redux state
const history = syncHistoryWithStore(historyApi, store)

// Initial properties for our mounting container
const initialProps = {
  history,
  routes,
  store,
}

// Root application element
ReactDOM.render(
  createElement(MountContainer, initialProps),
  document.getElementById(rootElementId)
)
