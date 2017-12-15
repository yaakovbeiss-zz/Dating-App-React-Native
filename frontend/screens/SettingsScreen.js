import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  handlePress = () => {
    this.props.signout();
  }

  rightDrawer = () => {
    const { navigate } = this.props.navigation;
    navigate('RightDrawerOpen')
  }

  render() {

    return (
      <View>
        <TouchableOpacity style={styles.signOutButton} onPress={this.handlePress}>
          <Text>Sign Out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightDrawer} onPress={this.rightDrawer}>
          <Text>Right Drawer</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  signOutButton: {
    marginTop: 100,
  }
})
