import React from 'react';
import { StackNavigator } from 'react-navigation';

import Signup from '../containers/SignupContainer';
import SignupDetails from '../containers/SignupDetailsContainer';

export default SignupNavigator = StackNavigator(
  {
    Signup: {
      screen: Signup,
    },
    SignupDetails: {
      screen: SignupDetails,
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
