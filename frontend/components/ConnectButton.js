import React from 'react';
import { connect } from 'react-redux';
import { createConnection } from '../actions/connection_actions';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

class ConnectButton extends React.Component {
  constructor(props) {
    super(props);
    this._handlePress = this._handlePress.bind(this);
  }

  _handlePress = () => {
    let connection = { status: "pending", requester_id: this.props.id }
    this.props.createConnection(connection);
  }

  render() {
    return(
      <TouchableOpacity
        onPress={this._handlePress}
        style={[styles.container,
          {backgroundColor: this.props.gender === 1 ? Colors.slackBlue : Colors.slackRed } ]}>
        <Text style={styles.textStyle}>Connect</Text>
        <Ionicons name="ios-contact" size={32} color="white" />
      </TouchableOpacity>
    )

  }
}

const mapStateToProps = ({ connections }) => ({
  connections: connections
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
