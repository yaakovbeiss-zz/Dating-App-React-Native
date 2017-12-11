import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';
import ConnectButton from '../components/ConnectButton';

export default class ContactItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePress = () => {
    this.props.navigation.navigate('ContactsProfile', this.props)
  }

  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={this.handlePress}>
          <Image source={{ uri: this.props.imageUrl }} style={styles.profileImage} />
          <Text style={styles.name}>{this.props.firstName} {this.props.lastName}</Text>
        </TouchableOpacity>
        <ConnectButton gender={this.props.gender} />
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'grey',
    borderBottomWidth: .5,
    marginTop: 10,
  },
  touchable: {
    flex: 1,
    flexDirection: 'row',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  name: {
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 5,
  }
});
