import React from 'react';
import { Platform } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import LeftDrawerNavigator from './LeftDrawerNavigator'
import RightDrawerNavigator from './RightDrawerNavigator'

const DrawersNavigator = StackNavigator(
  {
    LeftDrawerNavigator: {
      screen: LeftDrawerNavigator,
  },
    RightDrawerNavigator: {
      screen: RightDrawerNavigator,
  }
})

export default MainNavigator =  StackNavigator(
  {
    Main: {
      screen: DrawersNavigator,
    }
  }
);
