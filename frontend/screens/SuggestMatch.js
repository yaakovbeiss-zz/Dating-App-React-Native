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
      scrolling: "initial",
      males: null,
      females: null,
      scrollFemales: null,
      scrollMales: null,
      currentFemale: null,
      femalesCount: null,
      malesCount: null,
      addedHeight: Math.floor(Layout.window.height * .75)
    }
    this.elements = [];
    this.setCurrentMaleOrFemaleId = this.setCurrentMaleOrFemaleId.bind(this);
    this.makeMatch = this.makeMatch.bind(this);
    this.squishBoth = this.squishBoth.bind(this);
  }

  componentDidMount() {
    const females = this.props.friends.filter((friend) => friend.gender === 2);
    const males = this.props.friends.filter((friend) => friend.gender === 1);
    this.setState({ females: females, males: males,
      femalesCount: females.length, malesCount: males.length})
  }

  _handleScrollFemales = (e) => {
    this.setState({ scrollFemales: e.nativeEvent.contentOffset.y })
  }

  _handleScrollMales = (e) => {
    this.setState({ scrollMales: e.nativeEvent.contentOffset.y })
  }

  squishBoth(gender, e) {
    // const otherSquish = gender === 1 ? this.femaleScrollView : this.maleScrollView;
    // otherSquish.squish(e);
  }

  setCurrentMaleOrFemaleId(gender) {
    if (gender === 1) {
      this.maleScrollView = this.elements.find((el) => el.currentHeight > 150 && el.currentHeight < 300 )
      console.log(this.maleScrollView)
      this.currentMaleId = this.maleScrollView.props.id
    } else {
      this.femaleScrollView = this.elements.find((el) => el.currentHeight > 150 && el.currentHeight < 300 )
      console.log(this.femaleScrollView)
      this.currentFemaleId = this.femaleScrollView.props.id
    }
  }

  makeMatch() {
    const guy = this.state.females.find((female) => female.id === this.currentFemaleId )
    const girl = this.state.males.find((male) => male.id === this.currentMaleId )
  }

  render() {
    const { friends } = this.props;
    const maleFriends = friends.filter((friend) => friend.gender === 1)
    const femaleFriends = friends.filter((friend) => friend.gender === 2)

    return (
      <View style={styles.container}>

        <Animated.ScrollView
          style={styles.scrollableSmooshFemale}
          contentContainerStyle={styles.contentContainer}
          snapToInterval={Layout.window.height / 4}
          snapToAlignment={'center'}
          scrollEventThrottle={1}
          onMomentumScrollEnd={() => this.setCurrentMaleOrFemaleId(2)}
          decelerationRate={'fast'}
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
            gender={2} setCurrentMaleOrFemaleId={this.setCurrentMaleOrFemaleId} scrollY={this.state.scrollFemales}
            makeMatch={this.makeMatch} ref={el => this.elements.push(el)} squishBoth={this.squishBoth}
            /> )}
        </Animated.ScrollView>

        <Animated.ScrollView
          style={styles.scrollableSmooshMale}
          contentContainerStyle={styles.contentContainer}
          snapToInterval={Layout.window.height / 4}
          snapToAlignment={'center'}
          onMomentumScrollEnd={() => this.setCurrentMaleOrFemaleId(1)}
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

         {maleFriends.map(friend => <DraggableProfilePic key={friend.id} id={friend.id} firstName={friend.first_name}
           gender={1} setCurrentMaleOrFemaleId={this.setCurrentMaleOrFemaleId} scrollY={this.state.scrollMales}
           makeMatch={this.makeMatch} ref={el => this.elements.push(el)} squishBoth={this.squishBoth}
           /> )}

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
