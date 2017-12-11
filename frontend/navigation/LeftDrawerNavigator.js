import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import SettingsScreen from '../containers/SettingsScreenContainer';
import UserProfile from '../containers/UserProfileContainer';
import RightDrawerNavigator from './RightDrawerNavigator';
import ContactsNavigator from './ContactsNavigator';

export default LeftDrawerNavigator = DrawerNavigator({
  ContactsNavigator: {
    screen: ContactsNavigator
  },
  UserProfile: {
    screen: UserProfile
  },
  SettingsScreen: {
    screen: SettingsScreen
  }
},
{
  drawerBackgroundColor: '#a5d1cc',
})
