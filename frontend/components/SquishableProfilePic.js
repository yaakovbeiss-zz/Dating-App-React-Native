import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  PanResponder,
  Animated,
} from 'react-native';
import isEqual from 'lodash/isEqual';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';


export default class SquishableProfilePic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: new Animated.Value(1),
      scrollX: new Animated.Value(0),
      height: null,
      scrollable: true,
    }
    this.currentHeight = null;
    this.opacity;
    this.rotateImage = '0deg';
    this.translateX = 0;
    this.translateY = 0;
    this.handleLayout = this.handleLayout.bind(this);
    this.handleSwipe = this.handleSwipe.bind(this);
    this.swipe = this.swipe.bind(this);
  }

  handleLayout(e) {
    this.currentHeight = e.nativeEvent.layout.y;
    this.setState({ height: e.nativeEvent.layout.y })
  }

  handleSwipe = () => {
    this.props.changeBackgroundColor(this.state.scrollX)
    this.props.setCurrentlySwiping(this.props.id);
    this.props.otherElement.squish(this.state.scrollX)
  }

  onScrollBeginDrag = () => {
    this.props.otherElement.setScrollable(false)
  }

  onScrollEndDrag = (e) => {
    this.props.otherElement.setScrollable(true)
    if (Math.abs(e.nativeEvent.contentOffset.x) > 43) {
      this.props.makeMatch();
    }
  }

  setScrollable = (bool) => {
    this.setState({scrollable: bool})
  }

  squish = (animatedEvent) => {
    if(!this.props.selected) {return}
    if (this.props.gender === 1) {
      this.rotateImage = animatedEvent.interpolate({
        inputRange: [-70, 0],
        outputRange: ['50deg', '0deg'],
        extrapolate: 'clamp',
      });
      this.translateY = animatedEvent.interpolate({
        inputRange: [-70, 0],
        outputRange: [-50, 0],
        extrapolate: 'clamp',
      });
      this.translateX = animatedEvent.interpolate({
        inputRange: [-70, 0],
        outputRange: [-127, 0],
        extrapolate: 'clamp',
      });
    } else {
      this.rotateImage = animatedEvent.interpolate({
        inputRange: [0, 70],
        outputRange: ['0deg', '50deg'],
        extrapolate: 'clamp',
      });
      this.translateY = animatedEvent.interpolate({
        inputRange: [0, 70],
        outputRange: [0, -50],
        extrapolate: 'clamp',
      });
      this.translateX = animatedEvent.interpolate({
        inputRange: [0, 70],
        outputRange: [0, 127],
        extrapolate: 'clamp',
      });
    }
  }

  swipe() {
    // console.log('swiping')
    if (this.props.gender === 1) {
      this.rotateImage = this.state.scrollX.interpolate({
        inputRange: [0, 70],
        outputRange: ['0deg', '50deg'],
        extrapolate: 'clamp',
      });
      this.translateY = this.state.scrollX.interpolate({
        inputRange: [0, 70],
        outputRange: [0, -50],
        extrapolate: 'clamp',
      });
      this.translateX = this.state.scrollX.interpolate({
        inputRange: [0, 70],
        outputRange: [0, -50],
        extrapolate: 'clamp',
      });
    } else {
      this.rotateImage = this.state.scrollX.interpolate({
        inputRange: [-70, 0],
        outputRange: ['50deg', '0deg'],
        extrapolate: 'clamp',
      });
      this.translateY = this.state.scrollX.interpolate({
        inputRange: [-70, 0],
        outputRange: [-50, 0],
        extrapolate: 'clamp',
      });
      this.translateX = this.state.scrollX.interpolate({
        inputRange: [-70, 0],
        outputRange: [50, 0],
        extrapolate: 'clamp',
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // if (prevProps.scrollY !== this.props.scrollY) {
      const { height } = this.state;
      const { scrollY } = this.props;

      let currentHeight = height - scrollY;
      this.currentHeight = currentHeight;

      let springValue;
      switch (true) {
        case (currentHeight < 0):
            springValue = .4
            this.opacity = .3;
          break;
        case (currentHeight < 150):
            springValue = .7
            this.opacity = .6;
          break;
        case (currentHeight < 300):
            springValue = 1.2
            this.opacity = 1;
          break;
        case (currentHeight < 440):
            springValue = .7
            this.opacity = .6;
          break;
        case (currentHeight < 600):
            springValue = .4
            this.opacity = .3;
          break;
        default:
          springValue = .9
      }
      Animated.spring(
        this.state.scale,
        {
          toValue: springValue,
          friction: 7,
        },
        {useNativeDriver: true}
      ).start();
    // }
  }

  render() {
    let { scale } = this.state;

    if (this.props.currentlySwiping === this.props.id) {
      this.swipe();
    }

      return (
        <Animated.View style={[styles.container, {transform: [{scale}] } ]}
          onLayout={this.handleLayout}
          >
          <Animated.ScrollView
            style={{opacity: this.opacity,
              transform: [{rotateY: this.rotateImage}, {translateY: this.translateY}, {translateX: this.translateX}] }}
            scrollEnabled={this.props.selected && this.state.scrollable}
            horizontal={true}
            scrollEventThrottle={1}
            decelerationRate={'fast'}
            onScrollBeginDrag={this.onScrollBeginDrag}
            onScrollEndDrag={this.onScrollEndDrag}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {x: this.state.scrollX},
                  },
                },
              ],
              {listener: this.handleSwipe},
              {useNativeDriver: true}
            )}>
            <Animated.View style={{opacity: this.props.selected ? this.opacity : this.props.opacity}}>
              <Image source={{uri: this.props.avatar}} style={styles.imageStyle} />
              <Text style={styles.firstName}>{this.props.firstName}</Text>
            </Animated.View>

          </Animated.ScrollView>
        </Animated.View>
      );
  }

}

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.slackPurple,
    width: Layout.window.width / 2,
    alignItems: 'center',
    height: Layout.window.height / 4,
  },
  imageStyle: {
    borderRadius: 75,
    borderColor: Colors.slackPurple,
    borderWidth: 2,
    height: 150,
    width: 150,
  },
  firstName: {
    color: Colors.slackDeepPurple,
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 120,
    left: 50, // figure out how to center names of any length
    fontSize: 20,
    fontWeight: 'bold',
  },
});
