import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Button,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import MatchCard from '../components/MatchCard';
import Colors from '../constants/Colors';

export default class MatchesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { people_setup, people_suggested_to_me } = this.props;
    const { gender } = this.props.currentUser;
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={[styles.scrollViewContainer,
          {backgroundColor: gender === 1 ? Colors.slackRed : Colors.slackBlue} ]}>
          {people_suggested_to_me.map( match  => <MatchCard key={`${match.matchmaker.id}${match.suggested.id}`}
            matchmaker={match.matchmaker} suggested={match.suggested}/> )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    shadowColor: 'grey',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 1,
    shadowRadius: 5,
  },
});
