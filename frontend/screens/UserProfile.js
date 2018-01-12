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
import { facebookLogIn } from '../util/facebook_api_util';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      imageUrl: null,
      user_id: this.props.currentUser.id,
      lat: null,
      lng: null,
      bio: null,
      work: null,
      education: null,
      bioOpen: false,
      workOpen: false,
      educationOpen: false,
      errors: null,
    };
  }

  static navigationOptions = {
    title: 'Create Profile',
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ imageUrl: result.uri, image: result });
    }
  };

  _handlePress = (field) => {
    return () => this.setState({ [field]: !this.state[field] })
  }

  createProfile = () => {
    const { user_id, lat, lng, bio, work, education } = this.state;
    const user_profile = { user_id, lat, lng, bio, education }
    this.props.createUserProfile(user_profile).then( user_profile => {
      const id = user_profile.userProfile.id
      let formData = new FormData();

      let localUri = this.state.imageUrl;
      let filename = localUri.split('/').pop();

      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      formData.append("profile_image[image]", { uri: localUri, name: filename, type });
      formData.append("profile_image[user_profile_id]", id);
      this.props.createProfileImage(formData);
    }).then( () => this.props.requestUser(this.state.user_id))
  }

  imageOrAddImage() {
    if (this.state.image) {
      return <Image source={{ uri: this.state.imageUrl }} style={styles.profileImage} />
    } else {
      return (
        <View style={styles.addButton}>
          <Text>Add pic </Text>
          <Ionicons name="ios-add" size={32} color="green" />
        </View>
      )
    }
  }

  gender() {
    return this.props.currentUser.gender === 1 ? 'Male' : 'Female'
  }

  addInputIcon = (field) => {
    if(this.state[field]) {
      return <Ionicons name="ios-close" size={32} color="green" />
    } else {
      return <Ionicons name="ios-add" size={32} color="green" />
    }
  }

  input = (field) => {
      if (this.state[field]) {
        const textField = field.split('Open')[0]
        return <TextInput style={styles.textInput}
          onChangeText={ (text) => this.setState({ [textField]: text })}>
        </TextInput>
      }
  }

  render() {
    return (
      <ScrollView style={styles.container}>

        <View style={styles.topContainer}>

          <TouchableOpacity onPress={this._pickImage}>
            <View style={styles.profileImageContainer}>
              {this.imageOrAddImage()}
            </View>
          </TouchableOpacity>

          <Text style={styles.name}>{this.props.currentUser.first_name} {this.props.currentUser.last_name},</Text>
          <Text>{this.props.currentUser.age}</Text>
          <Text>{this.gender()}</Text>
        </View>

        <View style={styles.infoContainer}>

        <TouchableOpacity onPress={this._handlePress('bioOpen')}>
          <View style={styles.addButton}>
            <Text>Add Bio </Text>
            {this.addInputIcon('bioOpen')}
          </View>
        </TouchableOpacity>

        {this.input('bioOpen')}

          <TouchableOpacity onPress={this._handlePress('workOpen')}>
            <View style={styles.addButton}>
                <Text>Add Work </Text>
                {this.addInputIcon('workOpen')}
            </View>
          </TouchableOpacity>

        {this.input('workOpen')}

        <TouchableOpacity onPress={this._handlePress('educationOpen')}>
          <View style={styles.addButton}>
            <Text>Add Education </Text>
            {this.addInputIcon('educationOpen')}
          </View>
        </TouchableOpacity>

        {this.input('educationOpen')}

      </View>

      <TouchableOpacity onPress={this.createProfile}>
        <Text>Create Profile</Text>
      </TouchableOpacity>

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
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  name: {
    fontSize: 30,
  },
  infoContainer: {
    marginTop: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderColor: 'grey',
    borderRadius: 5,
    borderWidth: 1,
    height: 100,
    width: 350,
  }
});
