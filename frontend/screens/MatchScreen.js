import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  Button,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import Colors from '../constants/Colors';

export default class MatchScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    const { suggested, matchmaker, message } = navigation.state.params;

    return {
      title: `Match with ${suggested.first_name} ${suggested.last_name}`,
      headerTintColor: Colors.slackGreen,
      headerStyle: {
        backgroundColor: Colors.slackPurple,
        height: 25,
        paddingBottom: 20,
      },
      headerTitleStyle: {
        alignItems: 'center',
        color: Colors.slackGreen,
      },
      headerBackTitleStyle: {
        color: Colors.slackGreen,
      }
    }
  };

  render() {
    const { suggested, matchmaker, message } = this.props.navigation.state.params;

    return (
        <ScrollView style={styles.container}>
          <Image source={{ uri: suggested.avatar }} style={styles.suggestedImage} />
          <Text>{suggested.age}</Text>
          <Text>{suggested.first_name} {suggested.last_name}</Text>
          <Text>{suggested.bio}</Text>
          <Text>{suggested.education}</Text>
          <Text>{suggested.work}</Text>
          <Image source={{ uri: matchmaker.avatar }} style={styles.matchmakerImage} />
          <Text>{matchmaker.first_name} {matchmaker.last_name}</Text>
          <Text>{message}</Text>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  suggestedImage: {
    flex: 1,
    backgroundColor: '#fff',
    height: 300,
  },
  matchmakerImage: {
    flex: 1,
    backgroundColor: '#fff',
    height: 100,
    width: 100,
    borderRadius: 20,
  },
});
