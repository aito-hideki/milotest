import React from 'react'

import './CharacterDetail.scss'

export default class CharacterDetail extends React.Component {
  componentDidMount () {
    const { match: { params: { id }}, list, history } = this.props;
    if (!Object.keys(list).includes(id))
      history.push('/');
  }
  render () {
    const { match: { params: { id }}, list } = this.props;

    return (
      <div>
        {list[id].name}
      </div>
    )
  }
}
