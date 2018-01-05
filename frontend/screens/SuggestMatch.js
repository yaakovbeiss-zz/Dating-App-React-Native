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
      males: [],
      females: [],
      scrollYFemales: null,
      scrollYMales: null,
      currentFemaleElement: null,
      currentFemaleId: null,
      currentMaleElement: null,
      currentMaleId: null,
      femalesCount: null,
      malesCount: null,
      currentlySwiping: null,
      addedHeight: Math.floor(Layout.window.height * .75),
    }
    this.femaleElements = {};
    this.maleElements = {};
    this.setCurrentMaleOrFemaleId = this.setCurrentMaleOrFemaleId.bind(this);
    this.makeMatch = this.makeMatch.bind(this);
  }

  componentDidMount() {
    const females = this.props.friends.filter((friend) => friend.gender === 2);
    const males = this.props.friends.filter((friend) => friend.gender === 1);
    this.setState({ females: females, males: males,
      femalesCount: females.length, malesCount: males.length})
  }

  handleScrollFemales = (e) => {
    this.setState({ scrollYFemales: e.nativeEvent.contentOffset.y })
  }

  handleScrollMales = (e) => {
    this.setState({ scrollYMales: e.nativeEvent.contentOffset.y })
  }

  setCurrentMaleOrFemaleId(gender) {
    if (gender === 1) {
      const mappableMales = Object.keys(this.maleElements).map(id => this.maleElements[id] );
      const maleScrollView = mappableMales.find((el) => el.currentHeight > 150 && el.currentHeight < 300 );
      this.setState({ currentMaleElement: maleScrollView, currentMaleId: maleScrollView.props.id });
    } else {
      const mappableFemales = Object.keys(this.femaleElements).map(id => this.femaleElements[id] );
      const femaleScrollView = mappableFemales.find((el) => el.currentHeight > 150 && el.currentHeight < 300 );
      this.setState({ currentFemaleElement: femaleScrollView, currentFemaleId: femaleScrollView.props.id });
    }
  }

  setCurrentlySwiping = (id) => {
    this.setState({ currentlySwiping: id })
  }

  makeMatch() {
    const guy = this.state.females.find((female) => female.id === this.state.currentFemaleId )
    const girl = this.state.males.find((male) => male.id === this.state.currentMaleId )
  }

  render() {
    const maleFriends = this.state.males;
    const femaleFriends = this.state.females;

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
                  contentOffset: {y: this.state.scrollYFemales},
                },
              },
            ],
            {listener: this.handleScrollFemales},
            {useNativeDriver: true}
          )}>

          {femaleFriends.map(friend => <DraggableProfilePic id={friend.id} key={friend.id} firstName={friend.first_name}
            gender={2} setCurrentMaleOrFemaleId={this.setCurrentMaleOrFemaleId} scrollY={this.state.scrollYFemales}
            makeMatch={this.makeMatch} ref={el => this.femaleElements[`${friend.id}`] = el}
            otherElement={this.state.currentMaleElement} selected={this.state.currentFemaleId === friend.id}
            setCurrentlySwiping={this.setCurrentlySwiping} currentlySwiping={this.state.currentlySwiping}
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
                  contentOffset: {y: this.state.scrollYMales},
                },
              },
            ],
            {listener: this.handleScrollMales},
            {useNativeDriver: true}
          )}>

         {maleFriends.map(friend => <DraggableProfilePic key={friend.id} id={friend.id} firstName={friend.first_name}
           gender={1} setCurrentMaleOrFemaleId={this.setCurrentMaleOrFemaleId} scrollY={this.state.scrollYMales}
           makeMatch={this.makeMatch} ref={el => this.maleElements[`${friend.id}`] = el}
           otherElement={this.state.currentFemaleElement} selected={this.state.currentMaleId === friend.id}
           setCurrentlySwiping={this.setCurrentlySwiping} currentlySwiping={this.state.currentlySwiping}
           /> )}

       </Animated.ScrollView>

      </View>
    );
  }
}

const mapStateToProps = ({ session }) => ({
  friends: session.currentUser.friends
});

export default connect(
  mapStateToProps,
  null
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
