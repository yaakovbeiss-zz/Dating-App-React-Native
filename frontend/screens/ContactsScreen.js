import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import ContactItem from '../components/ContactItem';
import { requestUsers } from '../actions/user_actions';

export default class ContactsScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'Find Contacts',
    drawerPosition: 'right',
  };

  componentDidMount() {
    this.props.requestUsers();
  }

  render() {
    const users = this.props.users;
    const navigation = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        {users.map( user => <ContactItem key={user.id} firstName={user.first_name}
          lastName={user.last_name} imageUrl={user.url} navigation={navigation}/>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
