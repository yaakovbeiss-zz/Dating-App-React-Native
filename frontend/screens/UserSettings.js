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
import isEqual from 'lodash/isEqual'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class UserSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      discoverable: true,
      messageable: true,
      suggestable: true,
      user_id: this.props.currentUser.id,
      id: this.props.userSettings.userSettings.id,
    }
  }
  static navigationOptions = {
    title: 'Settings',
  };

  componentDidMount() {
    this.props.createUserSettings(this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!isEqual(prevState, this.state) ) {
      this.props.updateUserSettings(this.state);
    }
  }

  next = () => {
    this.props.navigation.navigate('UserProfile');
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Allow other users to find you by searching your name.</Text>
          <Switch
            value={this.state.discoverable}
            onValueChange={ () => {this.setState({discoverable: !this.state.discoverable}) } }/>
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Allow users who arent connections to message you.</Text>
          <Switch
            value={this.state.messageable}
            onValueChange={ () => {this.setState({messageable: !this.state.messageable}) } }/>
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Allow other users to suggest matches for you.</Text>
          <Switch
            value={this.state.suggestable}
            onValueChange={ () => {this.setState({suggestable: !this.state.suggestable}) } }/>
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={this.next}>
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
  switchContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 3,
    marginTop: 20,
    justifyContent: 'space-around',
  },
  switchText: {
    flex: 1,
    flexWrap: 'wrap',
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
