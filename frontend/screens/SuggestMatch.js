import React from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  StyleSheet,
  View,
  FlatList,
  Animated,
  Picker,
  Image,
} from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import DraggableProfilePic from '../components/DraggableProfilePic';

class SuggestMatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollFemales: null,
      scrollMales: null,
      setCurrentFemale: null,
    }
    this.handleScrollEnd = this.handleScrollEnd.bind(this);
  }

  _handleScrollFemales = (e) => {
    this.setState({ scrollFemales: e.nativeEvent.contentOffset.y })
  }

  _handleScrollMales = (e) => {
    this.setState({ scrollMales: e.nativeEvent.contentOffset.y })
  }

  handleScrollEnd = (e) => {
    const femaleFriendsCount = this.props.friends.filter((friend) => friend.gender === 1).length
    const height =  femaleFriendsCount * 150;
    debugger
    let currentHeight = height - this.state.scrollFemales;
    let id = Math.floor(femaleFriendsCount - (currentHeight / 150))
    this.setState({ setCurrentFemale: id })
  }

  render() {
    const { friends } = this.props;

    const maleFriends = friends.filter((friend) => friend.gender === 1)
    const femaleFriends = friends.filter((friend) => friend.gender === 2)
    let scrollY;

    return (
      <View style={styles.container}>

        <Animated.ScrollView
          style={styles.scrollableSmooshFemale}
          contentContainerStyle={styles.contentContainer}
          snapToInterval={Layout.window.height / 4}
          snapToAlignment={'center'}
          scrollEventThrottle={10}
          decelerationRate={'fast'}
          onMomentumScrollEnd={this.handleScrollEnd}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {y: this.state.scrollY},
                },
              },
            ],
            {listener: this._handleScrollFemales},
            {useNativeDriver: true}
          )}>

          {femaleFriends.map(friend => <DraggableProfilePic id={friend.id} key={friend.id} firstName={friend.first_name}
            scrollY={this.state.scrollFemales}/> )}
        </Animated.ScrollView>

        <Animated.ScrollView
          style={styles.scrollableSmooshMale}
          contentContainerStyle={styles.contentContainer}
          snapToInterval={Layout.window.height / 4}
          snapToAlignment={'center'}
          scrollEventThrottle={1}
          decelerationRate={'fast'}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {y: this.state.scrollY},
                },
              },
            ],
            {listener: this._handleScrollMales},
            {useNativeDriver: true}
          )}>

         {maleFriends.map(friend => <DraggableProfilePic key={friend.id} firstName={friend.first_name}
           scrollY={this.state.scrollMales}/> )}

       </Animated.ScrollView>

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
    paddingTop: Math.floor(Layout.window.height / 4),
    paddingBottom: Math.floor(Layout.window.height / 2),
  },
});
