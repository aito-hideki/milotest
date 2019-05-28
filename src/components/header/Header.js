import React from 'react'

import './Header.scss'

export default (props) => (
  <header className="header">
    <button
      type="button"
      className={`button-showall btn btn-primary ${props.selected.length ? '' : 'disabled'}`}
      onClick={() => props.history.push(`/character/${props.selected.join(',')}`)}
    >
      <i className="fas fa-eye"></i>
    </button>
  </header>
)
