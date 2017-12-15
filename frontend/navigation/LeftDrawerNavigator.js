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
  TextInput,
  StatusBar,
} from 'react-native';
import { Constants } from 'expo';
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation';

import SettingsScreen from '../containers/SettingsScreenContainer';
import UserProfile from '../containers/UserProfileContainer';
import RightDrawerNavigator from './RightDrawerNavigator';
import ConnectionsNavigator from './ConnectionsNavigator';

import { } from 'react-navigation';

const CustomDrawerContentComponent = (props) => (
  <View>
    <TextInput style={styles.textInput}></TextInput>
  <ScrollView>
    <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#C2185B",
    height: Constants.statusBarHeight,
    paddingTop: 5,
  },
  textInput: {
    height: 20,
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
  },
})


export default LeftDrawerNavigator = DrawerNavigator({
  ConnectionsNavigator: {
    screen: ConnectionsNavigator
  },
  UserProfile: {
    screen: UserProfile
  },
  SettingsScreen: {
    screen: SettingsScreen
  }
},
{
  contentComponent: CustomDrawerContentComponent,
  drawerBackgroundColor: '#a5d1cc',
})
