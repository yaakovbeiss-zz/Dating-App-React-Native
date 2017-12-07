import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import LinksScreen from '../screens/LinksScreen';

export default RightDrawerNavigator = DrawerNavigator({
  LinksScreen: {
    screen: LinksScreen
  }
},
{
  drawerBackgroundColor: '#a5d1cc',
  drawerPosition: 'right',
})
