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

export default class LinksScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'Contacts',
    header: null,
    drawerPosition: 'right',
  };

  componentDidMount() {
    this.props.requestUsers();
  }

  render() {
    const users = this.props.users;
    return (
      <ScrollView style={styles.container}>
        {users.map( user => <ContactItem key={user.id} firstName={user.first_name}
          lastName={user.last_name} imageUrl={user.url} />
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
