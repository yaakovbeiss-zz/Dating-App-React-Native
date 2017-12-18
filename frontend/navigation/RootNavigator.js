import React from 'react';
import axios from 'axios';
import { StackNavigator } from 'react-navigation';
import { Notifications } from 'expo';

import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

import MainNavigator from './MainNavigator';
import SetupNavigator from './SetupNavigator';
import SignupNavigator from './SignupNavigator';

export default class RootNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
    const currentUser = this.props.currentUser;
    if(currentUser && currentUser.session_token) {
        const token = currentUser.session_token;
        axios.defaults.headers.common['AUTH_TOKEN'] = token;
        axios.defaults.headers['AUTH_TOKEN'] = token;
      }
  }

  componentDidUpdate() {
    const currentUser = this.props.currentUser;
    if(currentUser && currentUser.session_token) {
        const token = currentUser.session_token;
        axios.defaults.headers.common['AUTH_TOKEN'] = token;
        axios.defaults.headers['AUTH_TOKEN'] = token;
      }
    if (!this.props.signedIn) {
      this.props.persistor.purge();
    }
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    if (this.props.signedIn && this.props.currentUser.setup) {
      return <MainNavigator />;
    } else if (this.props.signedIn) {
      return <SetupNavigator />
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
