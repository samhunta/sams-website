import React, { PropTypes } from 'react'
import EasyTransition from 'react-easy-transition'
import styles from '../../styles'
import Header from './Header'
import Footer from './Footer'
styles.use()

const AppContainer = ({ children, location }) => (
  <div className="app-container">
    <Header />
    <EasyTransition
      path={location.pathname}
      initialStyle={{ opacity: 0, transform: 'scaleY(0.9) translateY(30px)' }}
      transition="opacity 0.15s ease-in-out, transform 0.15s ease-in-out"
      finalStyle={{ opacity: 1, transform: 'scaleY(1)' }}
    >
      {children}
    </EasyTransition>
    <Footer />
  </div>
)

AppContainer.propTypes = {
  children: PropTypes.any.isRequired,
  location: PropTypes.any.isRequired,
}

export default AppContainer
