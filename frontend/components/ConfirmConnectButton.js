import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateConnection } from '../actions/connection_actions';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

class ConfirmConnectButton extends React.Component {
  constructor(props) {
    super(props);
    this._updateRequest = this._updateRequest.bind(this);
  }

  _updateRequest = (status) => {
      let connection = this.props.requested_you[this.props.id];

      connection["status"] = status;
      this.props.updateConnection(connection);
  }

  render() {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => this._updateRequest('Accepted')}
          style={[styles.container, {backgroundColor: Colors.slackGreen } ]}>
            <Text style={styles.textStyle}>Confirm</Text>
            <Ionicons name="ios-person-add" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this._updateRequest('Denied')}
          style={[styles.deleteButton, {backgroundColor: Colors.redWarn } ]}>
            <Ionicons name="ios-trash" size={32} color="white" />
        </TouchableOpacity>
      </View>
    )
  }

}

ConfirmConnectButton.propTypes = {
  id: PropTypes.number,
};

const mapStateToProps = ({ connection }) => ({
  connections: connection.entities,
  requested_you: connection.entities.requested_you,
});

const mapDispatchToProps = dispatch => ({
  updateConnection: (id) => dispatch(updateConnection(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmConnectButton)

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  container: {
    flexDirection: 'row',
    height: 40,
    width: 90,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButton: {
    flexDirection: 'row',
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginLeft: 1,
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
