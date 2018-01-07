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
import { Ionicons } from '@expo/vector-icons';


export default class MatchModal extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { guy, girl } = navigation.state.params;

    return {
      title: 'Match',
      headerBackTitle: <View><Ionicons name="ios-trash" size={32} color="white" /></View>,
      headerTitle: `Match ${guy.first_name} with ${girl.first_name}`,
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maleCard: {
    flex: .5,
    backgroundColor: Colors.slackBlue,
  },
  femaleCard: {
    flex: .5,
    backgroundColor: Colors.slackRed,
  },
  cardImage: {
    height: 150,
    width: 150,
    borderRadius: 20,
  },
})
