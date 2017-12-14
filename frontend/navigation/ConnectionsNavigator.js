import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { TabNavigator } from 'react-navigation';

import ContactsNavigator from './ContactsNavigator';
import ContactRequests from '../containers/ContactRequestsScreenContainer';
import RequestedYou from '../containers/RequestedYouScreenContainer';
import AllUsers from '../containers/AllUsersContainer';

export default ConnectionsNavigator = TabNavigator({
  ContactsNavigator: {
    screen: ContactsNavigator
  },
  Requests: {
    screen: ContactRequests
  },
  RequestedYou: {
    screen: RequestedYou
  },
  AllUsers: {
    screen: AllUsers
  }
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused }) => {
      const { routeName } = navigation.state;
      let iconName;
      switch (routeName) {
        case 'ContactsNavigator':
          iconName =
            Platform.OS === 'ios'
              ? `ios-information-circle${focused ? '' : '-outline'}`
              : 'md-information-circle';
          break;
        case 'Requests':
          iconName = Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link';
          break;
        case 'RequestedYou':
          iconName =
            Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options';
          break;
        case 'AllUsers':
          iconName =
            Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options';
      }
      return (
        <Ionicons
          name={iconName}
          size={28}
          style={{ marginBottom: -3 }}
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      );
    },
  }),
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
}
)
