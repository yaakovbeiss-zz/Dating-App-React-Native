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
  constructor(props) {
    super(props);
    this.state = {
      displayExpandedCard: false,
    }
  }

  handlePress = () => {
    this.setState({ displayExpandedCard: true })
  }

  closeExpandedCard = () => {
    this.setState({ displayExpandedCard: false})
  }

  render() {
    const {suggested} = this.props;

    if (this.state.displayExpandedCard) {
      return (
        <ExpandedMatchCard closeCard={this.closeExpandedCard} />
      )
    } else {
      return (
        <TouchableOpacity style={styles.container}
          onPress={this.handlePress}>
          <Image source={{uri: suggested.avatar}} style={styles.imageStyle} />
          <Text style={styles.textStyle}>{suggested.first_name}</Text>
        </TouchableOpacity>
      )
    }
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
    height: 170,
    width: (Layout.window.width / 2) - 9,
  },
  textStyle: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
});
