import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Notifications } from 'expo';

import MainNavigator from './MainNavigator';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

import * as AuthUtil from '../util/auth_util';
import SignupNavigator from './SignupNavigator';


export default class RootNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      checkSignIn: false,
    }
  }

  componentWillMount() {
    AuthUtil.verifyUser().then(res => this.setState({signedIn: res, checkSignIn: true}))
  }

  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    if (this.state.checkedSignIn === false) {
      return null;
    }
    if (this.state.signedIn) {
      return <MainNavigation />;
    } else {
      return <SignupNavigator />
    }
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  };
}
