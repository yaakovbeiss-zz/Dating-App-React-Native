import React from 'react';
import { TabNavigator } from 'react-navigation';

import ContactsNavigator from './ContactsNavigator';


export default ConnectionsNavigator = TabNavigator({
  ContactsNavigator: {
    screen: ContactsNavigator
  },
  ContactsNavigator: {
    screen: ContactsNavigator
  }
},
{
  tabBarOptions: {
    activeTintColor: '#e91e63',
  }
}
)
