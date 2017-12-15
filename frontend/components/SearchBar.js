import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

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
        <Text></Text>
        <TextInput
          style={styles.searchbar}
          onChangeText={(query) => this._handleSearch(query) }
          value={this.state.query}
          />
      </View>
    )
  }

}

SearchBar.propTypes = {
  searching: PropTypes.array,
};

const styles = StyleSheet.create({
  searchbar: {
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 0,
  },
});
