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
import Rater from '../components/Rater';

export default class ContactsProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    const { firstName, lastName } = navigation.state.params;

    return {
      title: `${firstName} ${lastName}`,
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
    const { imageUrl, id, gender } = this.props.navigation.state.params;
    return (
        <ScrollView style={styles.container}>
          <Image source={{ uri: imageUrl }} style={styles.backGroundImage} />
          <Rater gender={gender} ratedId={id}/>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backGroundImage: {
    flex: 1,
    backgroundColor: '#fff',
    height: 300,
  },
});
