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
    }
    this._handleLayout = this._handleLayout.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps, this.props) ) {
      const { height } = this.state;
      const { scrollY } = this.props;

      let currentHeight = height - scrollY;
      let springValue;
      switch (true) {
        case (currentHeight < 0):
            springValue = .4
          break;
        case (currentHeight < 150):
            springValue = .7
          break;
        case (currentHeight < 300):
            springValue = 1.2
          break;
        case (currentHeight < 440):
            springValue = .7
          break;
        case (currentHeight < 600):
            springValue = .4
          break;
        default:
          springValue = .9
      }
      Animated.spring(
        this.state.scale,
        { toValue: springValue, friction: 5 },
        {useNativeDriver: true,}
      ).start();

      // if ( currentHeight > 150 && currentHeight < 300 ) {
      //   Animated.spring(
      //     this.state.scale,
      //     { toValue: 1.2, friction: 5 }
      //   ).start();
      // } else if ( currentHeight < 0 ) {
      //
      // } else if ( currentHeight < 150 && currentHeight > 50 ) {
      //   Animated.spring(
      //     this.state.scale,
      //     { toValue: .6, friction: 5 }
      //   ).start();
      // } else if ( currentHeight > 300 && currentHeight > 50 ) {
      //   Animated.spring(
      //     this.state.scale,
      //     { toValue: .6, friction: 5 }
      //   ).start();
      // }
    }
  }

  _handleLayout(e) {
    this.setState({ height: e.nativeEvent.layout.y })
  }

  render() {
    let { scale } = this.state;

      return (
        <Animated.View style={[styles.container, {transform: [{scale}] } ]}
          onLayout={this._handleLayout}
          >
          <ScrollView
            horizontal={true}>
            <Image source={require('../assets/images/default_profile_pic.jpg')}
            style={styles.imageStyle} />
            <Text style={styles.firstName}>{this.props.firstName}</Text>
          </ScrollView>
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
