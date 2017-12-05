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
import { ImagePicker } from 'expo';
import { Ionicons } from '@expo/vector-icons';

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
      bioOpen: false,
      workOpen: false,
      educationOpen: false,
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

  _handlePress = (field) => {
    return () => this.setState({ [field]: !this.state[field] })
  }

  input = (field) => {
      if (this.state[field]) {
        const textField = field.split('Open')[0]
        return <TextInput style={styles.textInput}
          onChangeText={ (e) => this.setState({ [textField]: e.currentTarget.value })}>
        </TextInput>
      }
  }

  render() {
    let { image } = this.state;
    console.log(this.state.education)
    console.log(this.state.work)
    console.log(this.state.bio)
    return (
      <ScrollView style={styles.container}>

        <View style={styles.profileImageContainer}>
          {image &&
            <Image source={{ uri: image }} style={styles.profileImage} />}
        </View>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />

      <TouchableOpacity onPress={this._handlePress('bioOpen')}><Text>Add Bio</Text>
        <Ionicons name="ios-add" size={32} color="green" />
      </TouchableOpacity>
      {this.input('bioOpen')}

      <TouchableOpacity onPress={this._handlePress('workOpen')}><Text>Add Work</Text>
        <Ionicons name="ios-add" size={32} color="green" />
      </TouchableOpacity>
      {this.input('workOpen')}

      <TouchableOpacity onPress={this._handlePress('educationOpen')}><Text>Add Education</Text>
        <Ionicons name="ios-add" size={32} color="green" />
      </TouchableOpacity>
      {this.input('educationOpen')}

    </ScrollView>
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
  textInput: {
    borderColor: 'grey',
    borderWidth: 1,
    height: 20,
    width: 200,
  }
});
