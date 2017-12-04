import { connect } from 'react-redux';
import { createUserProfile, updateUserProfile } from '../actions/user_profile_actions';

import UserProfile from '../screens/UserProfile';

const mapStateToProps = ({ session, userProfile }) => ({
  currentUser: session.currentUser,
  userProfile: userProfile,
})

const mapDispatchToProps = ( dispatch ) => ({
  createUserProfile: (user_profile) => dispatch(createUserProfile(user_profile)),
  updateUserProfile: (user_profile) => dispatch(updateUserProfile(user_profile)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
