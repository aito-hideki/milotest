import React from 'react'

import Header from '../header'
import Characters from '../characters'

import './Home.scss'

export default class Home extends React.Component {
  mounted () {
    const { initCharacters } = this.props
    initCharacters()
  }
  render () {
    return (
      <React.Fragment>
        <Header />
        <Characters />
      </React.Fragment>
    )
  }
}
