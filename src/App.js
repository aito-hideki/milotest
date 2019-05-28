import React from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'

import { Header } from './containers'
import { paths } from './constants/paths'

import './_global.scss'

const CoreViewerBase = () => (
  <Switch>
    {
      paths.map((path, idx) => (
        <Route
          path={path.path}
          component={path.component}
          key={idx}
          exact={path.exact}
        />
      ))
    }
    <Redirect to="/" />
  </Switch>
)

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <CoreViewerBase />
      </React.Fragment>
    )
  }
}

export default withRouter(App)
