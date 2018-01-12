import { connect } from 'react-redux';
import { createMatch } from '../actions/match_actions';

import MatchModal from '../screens/MatchModal';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
})

const mapDispatchToProps = ( dispatch ) => ({
    createMatch: (match) => dispatch(createMatch(match)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchModal);
