import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CharacterDetail from '../components/character-detail'
import { loadDetails } from '../actions'

const mapStateToProps = state => ({
  ...state.details
})

const mapDispatchToProps = dispatch => ({
  loadDetails: (selected) => { dispatch(loadDetails(selected)) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CharacterDetail))
