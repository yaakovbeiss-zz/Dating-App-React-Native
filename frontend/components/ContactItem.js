import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';

class ContactItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
        <Image source={{ uri: this.props.imageUrl }} style={styles.profileImage} />
        <Text style={styles.name}>{this.props.firstName} {this.props.lastName}</Text>
      </View>
    )

  }
}

export default ContactItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'grey',
    borderBottomWidth: .5,
    marginTop: 10,
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
