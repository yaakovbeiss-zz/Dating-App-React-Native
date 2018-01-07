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
import Colors from '../constants/Colors';
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation';

import SuggestMatch from '../screens/SuggestMatch';
import SettingsScreen from '../containers/SettingsScreenContainer';
import UserProfile from '../containers/UserProfileContainer';
import RightDrawerNavigator from './RightDrawerNavigator';
import ConnectionsNavigator from './ConnectionsNavigator';
import SuggestMatchNavigator from './SuggestMatchNavigator';
import DrawerSearchBar from '../components/DrawerSearchBar';

import { } from 'react-navigation';

const CustomDrawerContentComponent = (props) => (
  <View>
    <DrawerSearchBar />
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
})


export default LeftDrawerNavigator = DrawerNavigator({
  ConnectionsNavigator: {
    screen: ConnectionsNavigator
  },
  SuggestMatch: {
    screen: SuggestMatchNavigator
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
  drawerBackgroundColor: Colors.slackPurple,
})
