import React from 'react';
import { StackNavigator } from 'react-navigation';

import UserSettings from '../containers/UserSettingsContainer';
import UserProfile from '../containers/UserProfileContainer';

export default SetupNavigator = StackNavigator(
  {
    UserSettings: {
      screen: UserSettings,
    },
    UserProfile: {
      screen: UserProfile,
    }
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);
