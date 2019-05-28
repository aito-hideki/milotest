import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Header from '../components/header'
import { loadDetails } from '../actions'

const mapStateToProps = state => ({
  ...state.characters
})

const mapDispatchToProps = () => ({
  loadDetails
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header))
