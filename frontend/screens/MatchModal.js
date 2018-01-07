import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
  TextInput,
  Image
} from 'react-native';
import Colors from '../constants/Colors';
import Random from '../constants/Random';
import { sample } from 'lodash';
import { Ionicons } from '@expo/vector-icons';


export default class MatchModal extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Match',
      header: null,
      isModal: true,
    }
  };

  constructor(props) {
    super(props); {
      this.state = {

      }
    }
  }
  render() {
    const { guy, girl } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <View style={styles.maleCard}>
          <Image source={{uri: guy.avatar}} style={styles.cardImage} />
          <Text>{guy.first_name}</Text>
        </View>

        <View style={styles.femaleCard}>
          <Image source={{uri: girl.avatar}} style={styles.cardImage}/>
          <Text>{girl.first_name}</Text>
        </View>
        <TouchableOpacity style={styles.matchButton}>
          <Text style={styles.matchText}>{sample(Random.matchText)}</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maleCard: {
    padding: 5,
    flex: .5,
    backgroundColor: Colors.slackBlue,
    shadowColor: Colors.slackRed,
    shadowOffset: {width: 5, height: 10},
  },
  femaleCard: {
    padding: 5,
    flex: .5,
    backgroundColor: Colors.slackRed,
    shadowColor: Colors.slackBlue,
    shadowOffset: {width: 5, height: 10},
  },
  cardImage: {
    height: 150,
    width: 150,
    borderRadius: 20,
    shadowColor: Colors.slackRed,
    shadowOffset: {width: 5, height: 10},
    shadowOpacity: 10,
    shadowRadius: 10,
  },
  matchText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },
  matchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: Colors.slackGreen,
  },
})
