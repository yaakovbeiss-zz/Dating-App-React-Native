import React from 'react';
import { StackNavigator } from 'react-navigation';

import ContactsScreen from '../containers/ContactsScreenContainer';
import ContactsProfile from '../screens/ContactsProfile';

export default ContactsNavigator = StackNavigator(
  {
    Contacts: {
      screen: ContactsScreen,
    },
    ContactsProfile: {
      screen: ContactsProfile,
    }
  },
  {
    navigationOptions: () => ({
      header: null,
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);
