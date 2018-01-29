import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { Ionicons } from '@expo/vector-icons';
import ExpandedMatchCard from './ExpandedMatchCard';

class MatchCard extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Match',
      header: null,
    }
  };

  constructor(props) {
    super(props);
  }

  handlePress = () => {
    const {suggested, matchmaker, message} = this.props;
    this.props.navigation.navigate("MatchScreen", {suggested, matchmaker, message});
  }

  render() {
    const {suggested, matchmaker, message} = this.props;

      return (
        <TouchableOpacity style={styles.container}
          onPress={this.handlePress}>
          <Image source={{uri: suggested.avatar}} style={styles.imageStyle} />
          <Text style={styles.textStyle}>{suggested.first_name}</Text>
          <View style={styles.matchmakerContainer}>
            <Image source={{uri: matchmaker.avatar}} style={styles.matchmakerImageStyle} />
            <Text style={styles.message}>{message}</Text>
          </View>
        </TouchableOpacity>
      )
  }

}

MatchCard.propTypes = {
  id: PropTypes.number,
};

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

// const mapDispatchToProps = dispatch => ({
//
// });

export default connect(
  mapStateToProps,
  null
)(MatchCard)

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.slackPurple,
    borderWidth: 3,
    height: 200,
    width: (Layout.window.width / 2) - 5,
    marginBottom: 5,
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 5,
    backgroundColor: Colors.slackPurple,
  },
  imageStyle: {
    height: 140,
    width: (Layout.window.width / 2) - 9,
  },
  textStyle: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
    position: 'absolute',
  },
  matchmakerContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.slackGreen,
  },
  matchmakerImageStyle: {
    height: 50,
    width: 50,
    borderRadius: 20,
    marginRight: 8,
  },
  message: {
    color: 'white',
    flex: 1,
    flexWrap: 'wrap',
  },
});
