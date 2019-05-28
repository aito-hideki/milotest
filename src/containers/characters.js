import { connect } from 'react-redux'

import Characters from '../components/characters'
import { loadCharacters, toggleSelected } from '../actions'

const mapStateToProps = state => ({
  ...state.characters
})

const mapDispatchToProps = dispatch => ({
  loadCharacters: (currentPage) => { dispatch(loadCharacters(currentPage)) },
  toggleSelected: (id) => { dispatch(toggleSelected(id)) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Characters)
