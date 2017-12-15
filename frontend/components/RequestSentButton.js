import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteConnection } from '../actions/connection_actions';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

class RequestSentButton extends React.Component {
  constructor(props) {
    super(props);
    this._deleteRequest = this._deleteRequest.bind(this);
  }

  _deleteRequest = () => {
    let connection = this.props.you_requested[this.props.id];
    this.props.deleteConnection(connection.id);
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this._deleteRequest}
        style={[styles.container, {backgroundColor: Colors.slackPurple } ]}>
          <Text style={styles.textStyle}>Request Sent</Text>
      </TouchableOpacity>
    )
  }

}

RequestSentButton.propTypes = {
  id: PropTypes.number,
};

const mapStateToProps = ({ connection }) => ({
  connections: connection.entities,
  you_requested: connection.entities.you_requested,
});

const mapDispatchToProps = dispatch => ({
  deleteConnection: (id) => dispatch(deleteConnection(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestSentButton)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    width: 100,
    borderRadius: 5,
    marginRight: 20,
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
});
