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
  TextInput,
  StatusBar,
} from 'react-native';
import ContactItem from '../components/ContactItem';
import { requestUsers } from '../actions/user_actions';

export default class ContactsScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'Connections',
    tabBarIcon: <Text>Sup</Text>
  };

  componentDidMount() {
    this.props.requestUsers();
    this.props.requestConnections();
  }

  render() {
    const users = this.props.users;
    const navigation = this.props.navigation;

    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        <ScrollView style={styles.container}>
          {users.map( user => <ContactItem key={user.id} id={user.id} firstName={user.first_name}
            lastName={user.last_name} imageUrl={user.url} gender={user.gender} navigation={navigation}/>
          )}
        </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
