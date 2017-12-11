import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

class ConnectButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <TouchableOpacity style={styles.container}>
        
      </TouchableOpacity>
    )

  }
}

export default ConnectButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'grey',
    borderBottomWidth: .5,
    marginTop: 10,
  },
});
