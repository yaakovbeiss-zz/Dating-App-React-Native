import React from 'react';
import {
  ScrollView,
  Switch,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class UserSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      discoverable: true,
      messageable: true,
      suggestable: true,
      user_id: this.props.currentUser.id,
    }
  }
  static navigationOptions = {
    title: 'Settings',
  };

  saveSettings = () => {
    this.props.createUserSettings(this.state);
    this.props.navigation.navigate('UserProfile');
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>{this.props.currentUser.first_name}</Text>
        <Text>{this.props.currentUser.last_name}</Text>
        <Text>Discoverable</Text>
        <Text>Allow other users to find you by searching your name.</Text>
        <Switch
          value={this.state.discoverable}
          onValueChange={ () => {this.setState({discoverable: !this.state.discoverable}) } }/>

        <Text>Messageable</Text>
        <Text>Allow users who arent connections to message you.</Text>
        <Switch
          value={this.state.messageable}
          onValueChange={ () => {this.setState({messageable: !this.state.messageable}) } }/>

        <Text>Suggestable</Text>
        <Text>Allow other users to suggest matches for you.</Text>
        <Switch
          value={this.state.suggestable}
          onValueChange={ () => {this.setState({suggestable: !this.state.suggestable}) } }/>

        <TouchableOpacity style={styles.nextButton} onPress={this.saveSettings}>
          <Text style={styles.nextText}>Next</Text>
          <Icon name="chevron-right" size={22} style={styles.nextIcon}></Icon>
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
  nextIcon: {
    color: '#fff',
    paddingLeft: 5,
  },
  nextButton: {
    height: 40,
    backgroundColor: '#a5d1cc',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 15,
  },
  nextText: {
    fontSize: 15,
    color: '#fff'
  }
});
