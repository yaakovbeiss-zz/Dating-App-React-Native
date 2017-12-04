import React from 'react';
import {
  ScrollView,
  Switch,
  StyleSheet,
  Text,
  Image,
  Button,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import { ImagePicker } from 'expo';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      user_id: this.props.currentUser.id,
      lat: null,
      lng: null,
      bio: null,
      work: null,
      education: null,
    };
  }

  static navigationOptions = {
    title: 'Create Profile',
    header: null,
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render() {
    let { image } = this.state;
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.profileImageContainer}>
          {image &&
            <Image source={{ uri: image }} style={styles.profileImage} />}
        </View>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: '#fff'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
});
