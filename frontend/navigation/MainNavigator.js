import React from 'react';
import { Platform } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import Colors from '../constants/Colors';

import SettingsScreen from '../containers/SettingsScreenContainer';
import LeftDrawerNavigator from './LeftDrawerNavigator'
import RightDrawerNavigator from './RightDrawerNavigator'
import ContactsProfile from '../screens/ContactsProfile';

export default MainNavigator =  StackNavigator(
  {
    Main: {
      screen: LeftDrawerNavigator,
      navigationOptions: () => ({
        header: null,
        title: 'Main'
      })
    },
    Settings: {
      screen: SettingsScreen,
    },
    ContactsProfile: {
      screen: ContactsProfile,
    },
  },
  { //StackNavigatorConfig
    // navigationOptions: {
    //   gesturesEnabled: false,
    // }
  }
)
