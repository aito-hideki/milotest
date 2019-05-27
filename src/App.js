import React from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'

import { paths } from './constants/paths'

import './_global.scss'

const CoreViewerBase = () => (
  <Switch>
    {
      paths.map((path, idx) => (
        <Route exact
          path={path.path}
          component={path.component}
          key={idx} />
      ))
    }
    <Redirect to="/" />
  </Switch>
)

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <CoreViewerBase />
      </React.Fragment>
    )
  }
}

export default withRouter(App)
