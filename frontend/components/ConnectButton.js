import React from 'react';
import { connect } from 'react-redux';
import { createConnection, deleteConnection } from '../actions/connection_actions';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

class ConnectButton extends React.Component {
  constructor(props) {
    super(props);
    this._sendRequest = this._sendRequest.bind(this);
    this._deleteRequest = this._deleteRequest.bind(this);
  }

  _sendRequest = () => {
    let connection = { status: "pending", requester_id: this.props.id }
    this.props.createConnection(connection);
  }

  _deleteRequest = () => {
    let connection = this.props.connections[this.props.id];
    this.props.deleteConnection(connection.id);
  }

  render() {
    if (this.props.connections[this.props.id]) {
      return (
        <TouchableOpacity
          onPress={this._deleteRequest}
          style={[styles.container, {backgroundColor: Colors.slackPurple } ]}>
            <Text style={styles.textStyle}>Request Sent</Text>
          </TouchableOpacity>
      )
    } else {
      return(
        <TouchableOpacity
          onPress={this._sendRequest}
          style={[styles.container,
            {backgroundColor: this.props.gender === 1 ? Colors.slackBlue : Colors.slackRed } ]}>
            <Text style={styles.textStyle}>Connect</Text>
            <Ionicons name="ios-contact" size={32} color="white" />
          </TouchableOpacity>
        )
    }
  }

}

const mapStateToProps = ({ connection }) => ({
  connections: connection.entities
});

const mapDispatchToProps = dispatch => ({
  createConnection: (connection) => dispatch(createConnection(connection)),
  deleteConnection: (id) => dispatch(deleteConnection(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectButton)

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
