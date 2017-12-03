import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../containers/SettingsScreenContainer';

export default LeftDrawerNavigator = DrawerNavigator({
  LinksScreen: {
    screen: LinksScreen
  },
  SettingsScreen: {
    screen: SettingsScreen
  }
})
