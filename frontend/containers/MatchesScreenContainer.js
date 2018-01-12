import { connect } from 'react-redux';

import MatchesScreen from '../screens/MatchesScreen';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  people_setup: session.currentUser.people_setup,
  people_suggested_to_me: session.currentUser.people_suggested_to_me,
})

// const mapDispatchToProps = ( dispatch ) => ({
//
// })

export default connect(
  mapStateToProps,
  null
)(MatchesScreen);
