import { connect } from 'react-redux';

import RootNavigator from '../navigation/RootNavigator';

const mapStateToProps = ({ session }) => {
  return {
    signedIn: Boolean(session.currentUser),
    session: session,
  }
};


export default connect(
  mapStateToProps,
  null
)(RootNavigator);
