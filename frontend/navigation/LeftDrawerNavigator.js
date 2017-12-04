import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../containers/SettingsScreenContainer';
import UserProfile from '../containers/UserProfileContainer';

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
})
