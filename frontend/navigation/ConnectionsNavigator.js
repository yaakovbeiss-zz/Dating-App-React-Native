import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { TabNavigator } from 'react-navigation';

import ContactsScreen from '../containers/ContactsScreenContainer';
import ContactRequests from '../containers/ContactRequestsScreenContainer';
import RequestedYou from '../containers/RequestedYouScreenContainer';
import AllUsers from '../containers/AllUsersContainer';

export default ConnectionsNavigator = TabNavigator({
    Contacts: {
      screen: ContactsScreen,
    },
    Confirm: {
      screen: RequestedYou
    },
    Requests: {
      screen: ContactRequests
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
          case 'Contacts':
            iconName =
              Platform.OS === 'ios'
                ? `ios-contacts${focused ? '' : '-outline'}`
                : 'md-information-circle';
            break;
          case 'Requests':
            iconName = Platform.OS === 'ios' ? `ios-paper-plane${focused ? '' : '-outline'}` : 'md-link';
            break;
          case 'Confirm':
            iconName =
              Platform.OS === 'ios' ? `ios-person-add${focused ? '' : '-outline'}` : 'md-options';
            break;
          case 'AllUsers':
            iconName =
              Platform.OS === 'ios' ? `ios-search${focused ? '' : '-outline'}` : 'md-options';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.slackGreen : Colors.slackGreen}
          />
        );
      },
    }),
    tabBarPosition: 'top',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: Colors.slackGreen,
      inactiveTintColor: Colors.slackGreen,
      inactiveBackgroundColor: Colors.slackPurple,
      activeBackgroundColor: Colors.slackRed,
      style: {
        borderColor: Colors.slackRed,
        backgroundColor: Colors.slackPurple,
      },
    }

  }
)
