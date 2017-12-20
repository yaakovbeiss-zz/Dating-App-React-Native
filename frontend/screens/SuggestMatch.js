import React from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import Colors from '../constants/Colors';
import DraggableProfilePic from '../components/DraggableProfilePic';

class SuggestMatch extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.state.routeName}`,
    }
  };

  render() {
    const { friends } = this.props;

    let maleFriends = friends.filter((friend) => friend.gender === 1)
    let femaleFriends = friends.filter((friend) => friend.gender === 2)

    return (
      <View style={styles.container}>

        <ScrollView contentContainerStyle={styles.contentContainer} style={styles.scrollableSmooshFemale}>
          {femaleFriends.map(friend => <DraggableProfilePic key={friend.id} firstName={friend.first_name} /> )}
        </ScrollView>

        <ScrollView contentContainerStyle={styles.contentContainer} style={styles.scrollableSmooshMale}>
          {maleFriends.map(friend => <DraggableProfilePic key={friend.id} firstName={friend.first_name} /> )}
        </ScrollView>

      </View>
    );
  }
}

const mapStateToProps = ({ session }) => ({
  friends: session.currentUser.friends
});

const mapDispatchToProps = dispatch => ({
  createConnection: (connection) => dispatch(createConnection(connection)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuggestMatch)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  scrollableSmooshFemale: {
    flex: 1,
    backgroundColor: Colors.slackRed,
  },
  scrollableSmooshMale: {
    flex: 1,
    backgroundColor: Colors.slackBlue,
  },
  contentContainer: {
    marginTop: 20
  },
});
