import React, { PropTypes, Component } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

// eslint-disable-next-line react/prefer-stateless-function
export default class extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
    routes: PropTypes.any.isRequired,
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    const {
      store,
      history,
      routes,
    } = this.props

    return (
      <Provider store={store}>
        <Router history={history}>
          {routes}
        </Router>
      </Provider>
    )
  }
}
