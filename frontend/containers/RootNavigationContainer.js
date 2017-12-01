import { connect } from 'react-redux';

import RootNavigation from '../navigation/RootNavigation';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
  }
};


export default connect(
  mapStateToProps,
  null
)(RootNavigation);
