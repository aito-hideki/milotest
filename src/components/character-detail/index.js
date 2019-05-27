import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CharacterDetail from './CharacterDetail'
import { } from '../../actions'

const mapStateToProps = state => ({
  ...state.characters
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CharacterDetail))
