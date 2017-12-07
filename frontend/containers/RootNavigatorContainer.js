import { connect } from 'react-redux';

import RootNavigator from '../navigation/RootNavigator';

const mapStateToProps = ({ session, userSettings, userProfile }) => ({
    signedIn: Boolean(session.currentUser),
    setup: session.currentUser.setup,
});


export default connect(
  mapStateToProps,
  null
)(RootNavigator);
