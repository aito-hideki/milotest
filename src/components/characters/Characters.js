import React from 'react'

import CharacterCard from '../character-card'

import './Characters.scss'

export default class Characters extends React.Component {
  componentDidMount () {
    const { loadCharacters, currentPage } = this.props

    loadCharacters(currentPage)
  }
  render () {
    const { list, loadCharacters, currentPage, loading } = this.props

    return (
      <div className="characters d-flex justify-content-between flex-wrap container">
        {
          Object.keys(list).map((id, idx) => (
            <CharacterCard
              character={list[id]}
              key={idx} />
          ))
        }
        <div className="loader w-100 d-flex justify-content-center text-primary">
          {
            loading
              ? (
                <div className="spinner-grow"
                  style={{
                    width: '48px',
                    height: '48px'
                  }}
                  role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              )
              : (
                <button
                  onClick={ () => loadCharacters(currentPage) }
                  type="button"
                  className="btn btn-primary">
                  Load more
                </button>
              )
          }
        </div>
      </div>
    )
  }
}
