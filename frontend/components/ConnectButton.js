import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createConnection } from '../actions/connection_actions';
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
    this.sendRequest = this.sendRequest.bind(this);
  }

  sendRequest = () => {
    let connection = { status: "Pending", requested_id: this.props.id }
    this.props.createConnection(connection);
  }

  render() {
    return(
      <TouchableOpacity
        onPress={this.sendRequest}
        style={[styles.container,
          {backgroundColor: this.props.gender === 1 ? Colors.slackBlue : Colors.slackRed } ]}>
          <Text style={styles.textStyle}>Connect</Text>
          <Ionicons name="ios-contact" size={32} color="white" />
        </TouchableOpacity>
      )
  }

}

ConnectButton.propTypes = {
  id: PropTypes.number,
};

const mapStateToProps = ({ connection }) => ({
  connections: connection.entities,
  you_requested: connection.entities.you_requested,
});

const mapDispatchToProps = dispatch => ({
  createConnection: (connection) => dispatch(createConnection(connection)),
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
