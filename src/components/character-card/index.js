import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CharacterCard from './CharacterCard'
import { } from '../../actions'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CharacterCard))
