import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  Button,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import ConnectButton from '../components/ConnectButton';

export default class ContactsProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    const { firstName, lastName } = navigation.state.params;

    return {
      title: `${firstName} ${lastName}`,
    }
  };

  render() {
    const { imageUrl } = this.props.navigation.state.params;
    return (
      <ScrollView style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.backGroundImage} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backGroundImage: {
    flex: 1,
    backgroundColor: '#fff',
    height: 300,
  },
});
