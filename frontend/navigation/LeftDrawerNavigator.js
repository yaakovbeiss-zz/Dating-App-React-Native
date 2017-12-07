import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../containers/SettingsScreenContainer';
import UserProfile from '../containers/UserProfileContainer';
import RightDrawerNavigator from './RightDrawerNavigator'

export default LeftDrawerNavigator = DrawerNavigator({
  LinksScreen: {
    screen: LinksScreen
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
