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
import { ExpoLinksView } from '@expo/samples';

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
    title: 'Links',
    header: null
  };

  componentDidMount() {
    if(this.props.userSettings.userSettings.id) {
      this.props.updateUserSettings(this.state);
    } else {
      this.props.createUserSettings(this.state);
    }
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
});
