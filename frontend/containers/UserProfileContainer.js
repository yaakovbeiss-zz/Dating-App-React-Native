import { connect } from 'react-redux';
import { createUserProfile, updateUserProfile } from '../actions/user_profile_actions';
import { createProfileImage } from '../actions/profile_image_actions';
import { requestUser } from '../actions/user_actions';

import UserProfile from '../screens/UserProfile';

const mapStateToProps = ({ session, userProfile, profileImage }) => ({
  currentUser: session.currentUser,
  userProfile: userProfile,
  profileImage
})

const mapDispatchToProps = ( dispatch ) => ({
  createUserProfile: (user_profile) => dispatch(createUserProfile(user_profile)),
  updateUserProfile: (user_profile) => dispatch(updateUserProfile(user_profile)),
  createProfileImage: (profileImage) => dispatch(createProfileImage(profileImage)),
  requestUser: (id) => dispatch(requestUser(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
