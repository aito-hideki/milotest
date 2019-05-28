import React from 'react'

import { CharacterCard } from '../../containers'

import './Characters.scss'

export default class Characters extends React.Component {
  constructor (props) {
    super(props)
    const { loadCharacters } = this.props

    // Binds our scroll event handler
    window.onscroll = () => {
      // Bails early if:
      // * there's an error
      // * it's already loading
      // * there's nothing left to load
      if (this.props.loading) return

      // Checks that the page has scrolled to the bottom
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        loadCharacters(this.props.currentPage)
      }
    }
  }
  componentDidMount () {
    const { loadCharacters, currentPage } = this.props

    loadCharacters(currentPage)
  }
  render () {
    const { list, selected, loadCharacters, currentPage, loading, toggleSelected } = this.props

    return (
      <div className="characters d-flex justify-content-between flex-wrap container">
        {
          list.map((character, idx) => (
            <CharacterCard
              character={character}
              toggleSelected={toggleSelected}
              selected={selected.includes(parseInt(character.id))}
              key={idx}
            />
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
