import React from 'react'

import './CharacterCard.scss'

export default class CharacterCard extends React.Component {
  render () {
    const { character, selected, toggleSelected } = this.props

    return (
      <article
        className={`character-card ${selected ? 'selected' : ''}`}
        onClick={() => { toggleSelected(character.id) }}
      >
        <section className="character-card__image"
          style={{
            backgroundImage: `url('${character.image}')`
          }}>
          <div className="character-card__description">
            <p className="character-card__title text-white">{ character.name }</p>
            <div className="character-card__memo text-white darken-1">{ `id: ${character.id}` }</div>
          </div>
        </section>
        <section className="character-card__info-box">
          <div className="character-card__info">
            <span>status</span>
            <div className="text-right">{ character.status }</div>
          </div>
          <div className="character-card__info">
            <span>species</span>
            <div className="text-right">{ character.species }</div>
          </div>
          <div className="character-card__info">
            <span>gender</span>
            <div className="text-right">{ character.gender }</div>
          </div>
          <div className="character-card__info">
            <span>origin</span>
            <div className="text-right">{ character.origin.name }</div>
          </div>
          <div className="character-card__info">
            <span>last location</span>
            <div className="text-right">{ character.location.name }</div>
          </div>
        </section>
      </article>
    )
  }
}
