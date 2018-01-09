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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
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
        matchGuy: false,
        matchGirl: false,
        guyMessage: '',
        girlMessage: '',
      }
    }
  }
  render() {
    const { guy, girl } = this.props.navigation.state.params;

    return (
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={true}>

        <View style={styles.maleCard}>

          <View>
            <Image source={{uri: guy.avatar}} style={styles.cardImage} />

            <View style={styles.info}>
              <Text style={styles.infoText}>{guy.first_name} {guy.last_name}, {guy.age}</Text>
            </View>

            <TouchableOpacity
              style={[styles.activateMatch, {backgroundColor:
              this.state.matchGuy ? Colors.slackGreen : Colors.slackPurple } ]}
              onPress={() => this.setState({ matchGuy: !this.state.matchGuy })}>
              <Text>{`Match ${guy.first_name}`}</Text>
            </TouchableOpacity>

          </View>

          <View>
            <TextInput
              style={styles.textInput}
              placeholder={`Send a message to ${guy.first_name}`}
              multiline={true}
              onChangeText={(text) => this.setState({guyMessage})}
              value={this.state.guyMessage}></TextInput>
          </View>


        </View>

        <View style={styles.femaleCard}>

          <View>

            <Image source={{uri: girl.avatar}} style={styles.cardImage} />

            <View style={styles.info}>
              <Text style={styles.infoText}>{girl.first_name} {girl.last_name}, {girl.age}</Text>
            </View>

              <TouchableOpacity
                style={[styles.activateMatch, {backgroundColor:
                this.state.matchGirl ? Colors.slackGreen : Colors.slackPurple } ]}
                onPress={() => this.setState({ matchGirl: !this.state.matchGirl })}>
                <Text>{`Match ${girl.first_name}`}</Text>
              </TouchableOpacity>

          </View>

          <View>
            <TextInput
              style={styles.textInput}
              placeholder={`Send a message to ${girl.first_name}`}
              multiline={true}
              onChangeText={(text) => this.setState({girlMessage})}
              value={this.state.girlMessage}></TextInput>
          </View>


        </View>

        <TouchableOpacity
          style={[styles.matchButton,
            {opacity: (!this.state.matchGuy && !this.state.matchGirl) ? .5 : 1}]} >
          <Text style={styles.matchText}>{sample(Random.matchText)}</Text>
        </TouchableOpacity>

      </KeyboardAwareScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.slackPurple,
    padding: 2,
    borderColor: Colors.slackBlue,
  },
  maleCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.slackBlue,
    padding: 5,
    margin: 2,
    flex: .5,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.slackBlue,
    shadowColor: Colors.slackRed,
    shadowOffset: {width: 5, height: 10},
  },
  femaleCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.slackRed,
    padding: 5,
    flex: .5,
    margin: 2,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.slackRed,
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
  info: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  activateMatch: {
    width: 125,
    height: 25,
  },
  textInput: {
    height: 280,
    width: 185,
    borderRadius: 5,
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 1,
    shadowRadius: 5,
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
    borderRadius: 5,
  },
})
