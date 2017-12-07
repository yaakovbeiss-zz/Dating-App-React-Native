import { connect } from 'react-redux';

import RootNavigator from '../navigation/RootNavigator';

const mapStateToProps = ({ session, userSettings, userProfile }) => ({
    signedIn: Boolean(session.currentUser),
    currentUser: session.currentUser,
});


export default connect(
  mapStateToProps,
  null
)(RootNavigator);
