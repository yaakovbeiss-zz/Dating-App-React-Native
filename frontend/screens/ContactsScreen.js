import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Button,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import Colors from '../constants/Colors';
import ContactItem from '../components/ContactItem';
import SearchBar from '../components/SearchBar';

export default class ContactsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: null,
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.state.routeName}`,
    }
  };

  componentDidMount() {
    // this.props.requestUsers();
    // this.props.requestConnections();
    // this.props.requestRatings();
  }

  isInConnections = (user) => {
    return this.props.connection[user.id]
  }

  setSearchState = (results) => {
    this.setState({ searchResults: results })
  }

  searchBar() {
    if (this.props.allUsers) {
      return <SearchBar setSearchState={this.setSearchState}
        searching={this.props.allUsers} />
    }
  }

  render() {
    const users = this.props.users;
    const navigation = this.props.navigation;
    const allUsers = this.props.allUsers;
    const contacts = this.state.searchResults || allUsers || users.filter(this.isInConnections)

    return (
      <View style={styles.container}>
        {this.searchBar()}
        <ScrollView style={styles.container}>
          {contacts.map( user => <ContactItem key={user.id} id={user.id} firstName={user.first_name}
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
