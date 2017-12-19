import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    }
  }

  _handleSearch = (query) =>{
    this.setState({ query: query })
    let results = this.props.searching.filter( (contact) => {
      return contact.first_name.includes(query) || contact.last_name.includes(query)
    })
    this.props.setSearchState(results)
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.innerContainer}>
        <Ionicons
          name={'ios-search'}
          size={28}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchbar}
          onChangeText={(query) => this._handleSearch(query) }
          value={this.state.query}
          placeholderTextColor={Colors.slackGreen}
          placeholder="Search..."
          clearButtonMode="while-editing"
          />
        </View>
      </View>
    )
  }

}

SearchBar.propTypes = {
  searching: PropTypes.array,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: Colors.slackGreen,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.slackPurple,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: Colors.slackPurple,
  },
  searchbar: {
    flex: 1,
    backgroundColor: Colors.slackPurple,
    color: Colors.slackGreen,
    height: 37,
  },
  searchIcon: {
    paddingLeft: 10,
    paddingRight: 5,
    color: Colors.slackGreen,
    backgroundColor: Colors.slackPurple,
  },
});
