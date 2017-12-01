import { connect } from 'react-redux';

import RootNavigator from '../navigation/RootNavigator';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
  }
};


export default connect(
  mapStateToProps,
  null
)(RootNavigator);
