import React from 'react';
import { Platform } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import SettingsScreen from '../containers/SettingsScreenContainer';
import LeftDrawerNavigator from './LeftDrawerNavigator'
import RightDrawerNavigator from './RightDrawerNavigator'

//  const  = DrawerNavigator(//const DrawerStackNavigator = StackNavigator(
//   {
//     LeftDrawerNavigator: {
//       screen: LeftDrawerNavigator,
//   },
//     RightDrawerNavigator: {
//       screen: RightDrawerNavigator,
//       navigationOptions: {
//         drawerBackgroundColor: '#a5d1cc',
//         drawerPosition: 'right',
//         initialRoute: 'RightDrawerNavigator',
//         drawerOpenRoute: 'RightDrawerOpen', //your custom navigation key (default: DrawerOpen)
//         drawerCloseRoute: 'LeftDrawerClose',
//       }
//   }
// },
// {
//   headerMode: 'none'
// }
// )

export default MainNavigator =  DrawerNavigator(
  {
    Settings: {
      screen: SettingsScreen,
    },
    Main: {
      screen: LeftDrawerNavigator,
      navigationOptions: () => ({
        header: null,
        title: 'Main'
      })
    }
  },
  { //DrawerNavigatorConfig
    drawerPosition: 'right',
    initialRouteName: 'Settings',
    drawerOpenRoute: 'RightDrawerOpen', //your custom navigation key (default: DrawerOpen)
    drawerCloseRoute: 'FooDrawerClose'
  }
)
