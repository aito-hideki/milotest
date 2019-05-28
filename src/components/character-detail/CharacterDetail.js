import React from 'react'
import { Link } from 'react-router-dom'

import './CharacterDetail.scss'

export default class CharacterDetail extends React.Component {
  componentDidMount () {
    const { match: { params: { id } }, loadDetails } = this.props
    loadDetails(id.split(', '))
  }
  render () {
    const { list, loading } = this.props
    console.log(loading, list)
    return (
      <div className="pt-3">
        <Link to='/'
          className="nav-link">Back to Home Page
        </Link>
        <div>
          {
            list.map((selected, idx) => (
              <div
                className="profile-card"
                key={idx}>
                {selected.name}
              </div>
            ))
          }
        </div>
        <div className="loader w-100 d-flex justify-content-center text-primary">
          {
            loading && (
              <div className="spinner-grow"
                style={{
                  width: '48px',
                  height: '48px'
                }}
                role="status">
                <span className="sr-only">Loading...</span>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}
