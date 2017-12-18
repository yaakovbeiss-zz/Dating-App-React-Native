import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

class DrawerSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    }
  }

  _handleSearch = (query) =>{
    this.setState({ query: query })
    // let results = this.props.state.filter( (contact) => {
    //   return contact.first_name.includes(query) || contact.last_name.includes(query)
    // })
    // this.props.setSearchState(results)
  }

  render() {
    return(
      <View style={styles.container}>
        <Ionicons
          name={'ios-search'}
          size={28}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchbar}
          onChangeText={(query) => this._handleSearch(query) }
          value={this.state.query}
          placeholder={"Jump to..."}
          placeholderTextColor="grey"
          clearButtonMode="while-editing"
          color="grey"
          />
      </View>
    )
  }

}

const mapStateToProps = (state) => ({
  state: state
});

export default connect(
  mapStateToProps,
  null
)(DrawerSearchBar)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: .3,
    height: 37,
    backgroundColor: Colors.slackDeepPurple,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: Colors.slackDeepPurple,
  },
  searchIcon: {
    backgroundColor: Colors.slackDeepPurple,
    paddingLeft: 10,
    color: 'grey',
    flex: 1,
  },
  searchbar: {
    marginTop: 0,
    backgroundColor: Colors.slackDeepPurple,
    height: 37,
    width: 220,
  },
});
