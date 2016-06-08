import { routerReducer } from 'react-router-redux'
import sessionReducer from './sessionReducer'

/**
 * Initial state for root reducer
 */
const initialState = {}

/**
 * Root application reducer
 *
 * This is essentially how redux's `combineReducers` works
 * except this allows for more control of which order reducers
 * are called
 */
export default function (state = initialState, action) {
  return {
    session: sessionReducer(state.session, action),
    routing: routerReducer(state.routing, action),
  }
}
