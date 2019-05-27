import { connect } from 'react-redux'

import Characters from '../components/characters'
import { loadCharacters } from '../actions'

const mapStateToProps = state => ({
  ...state.characters
})

const mapDispatchToProps = dispatch => ({
  loadCharacters: (currentPage) => { dispatch(loadCharacters(currentPage)) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Characters)
