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

  imageOrAddImage() {
    if (this.state.image) {
      return <Image source={{ uri: this.state.image }} style={styles.profileImage} />
    } else {
      return (
        <Text>Add pic
          <Ionicons name="ios-add" size={32} color="green" />
        </Text>
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
          onChangeText={ (field) => this.setState({ [textField]: field })}>
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

        <TouchableOpacity onPress={this._handlePress('bioOpen')}><Text>Add Bio
        {this.addInputIcon('bioOpen')}</Text>
        </TouchableOpacity>
        {this.input('bioOpen')}

        <TouchableOpacity onPress={this._handlePress('workOpen')}><Text>Add Work
        {this.addInputIcon('workOpen')}</Text>
        </TouchableOpacity>
        {this.input('workOpen')}

        <TouchableOpacity onPress={this._handlePress('educationOpen')}><Text>Add Education
        {this.addInputIcon('educationOpen')}</Text>
        </TouchableOpacity>
        {this.input('educationOpen')}

      </View>

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
    borderStyle: 'dashed'
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
  textInput: {
    borderColor: 'grey',
    borderWidth: 1,
    height: 60,
    width: 300,
  }
});
