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


export default class DraggableProfilePic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: new Animated.Value(1),
      height: null,
      scrollX: new Animated.Value(0),
    }
    this.currentHeight = null;
    this.opacity;
    this._handleLayout = this._handleLayout.bind(this);
  }

  _handleLayout(e) {
    this.currentHeight = e.nativeEvent.layout.y;
    this.setState({ height: e.nativeEvent.layout.y })
  }

  handleScroll = (e) => {
    console.log(e.nativeEvent.contentOffset.x)
    // this.props.squishBoth(this.props.gender, e)
    if (Math.abs(e.nativeEvent.contentOffset.x)> 60) {
      this.props.makeMatch();
    }
  }

  squish = (e) => {
    // console.log(e.nativeEvent.contentOffset.x * -1)
    //
    // const rotateImage = this.state.scrollX.interpolate({
    //   inputRange: [0, 130],
    //   outputRange: ['0deg', '80deg'],
    //   extrapolate: 'clamp',
    // });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.scrollY !== this.props.scrollY) {
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

    }
  }

  render() {
    let { scale } = this.state;
    let scrollable = this.currentHeight > 150 && this.currentHeight < 300 ? true : false;
    let translateY;
    let translateX;

    const rotateImage = this.state.scrollX.interpolate({
      inputRange: [0, 130],
      outputRange: ['0deg', '80deg'],
      extrapolate: 'clamp',
    });

    if (this.props.gender === 1) {
      translateY = this.state.scrollX.interpolate({
        inputRange: [0, 70],
        outputRange: [0, -50],
        extrapolate: 'clamp',
      });
    } else {
      translateY = this.state.scrollX.interpolate({
        inputRange: [-70, 0],
        outputRange: [-50, 0],
        extrapolate: 'clamp',
      });
    }

    if (this.props.gender === 1) {
      translateX = this.state.scrollX.interpolate({
        inputRange: [0, 70],
        outputRange: [0, -50],
        extrapolate: 'clamp',
      });
    } else {
      translateX = this.state.scrollX.interpolate({
        inputRange: [-70, 0],
        outputRange: [50, 0],
        extrapolate: 'clamp',
      });
    }

      return (
        <Animated.View style={[styles.container, {transform: [{scale}]} ]}
          onLayout={this._handleLayout}
          >
          <Animated.ScrollView
            style={{opacity: this.opacity, transform: [{rotateY: rotateImage}, {translateY: translateY}, {translateX: translateX}] }}
            scrollEnabled={scrollable}
            horizontal={true}
            scrollEventThrottle={1}
            decelerationRate={'fast'}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {x: this.state.scrollX},
                  },
                },
              ],
              {listener: this.handleScroll},
              {useNativeDriver: true}
            )}>
            <Image source={require('../assets/images/default_profile_pic.jpg')}
            style={styles.imageStyle} />
            <Text style={styles.firstName}>{this.props.firstName}</Text>
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
