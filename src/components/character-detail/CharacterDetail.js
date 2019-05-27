import React from 'react'

import './CharacterDetail.scss'

export default class CharacterDetail extends React.Component {
  componentDidMount () {
    const { match: { params: { id }}, list, history } = this.props;
    console.log(list);
    if (!Object.keys(list).includes(id))
      history.push('/');
  }
  render () {
    const { match: { params: { id }}, list } = this.props;
    const isExist = Object.keys(list).includes(id);

    return (
      isExist && <div>name: { list[id].name }</div>
    )
  }
}
