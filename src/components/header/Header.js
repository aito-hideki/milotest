import React from 'react'

import './Header.scss'

const { NODE_ENV } = process.env
console.log(NODE_ENV)

export default (props) => (
  <header className={`header${NODE_ENV === 'production' ? ' milotest' : ''}`}>
    <button
      type="button"
      className={`button-showall btn btn-primary ${props.selected.length ? '' : 'disabled'}`}
      onClick={() => props.history.push(`/character/${props.selected.join(',')}`)}
    >
      <i className="fas fa-eye"></i>
    </button>
  </header>
)
