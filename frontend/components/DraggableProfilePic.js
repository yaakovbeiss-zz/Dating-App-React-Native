import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  PanResponder,
  Animated,
} from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';


export default class DraggableProfilePic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY(),
      scale: new Animated.Value(1)
    };
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});
        Animated.spring(
          this.state.scale,
          { toValue: 1.1, friction: 3 }
        ).start();
      },

      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y},
      ]),

      onPanResponderRelease: (e, {vx, vy}) => {
        this.state.pan.flattenOffset();
        Animated.spring(
          this.state.scale,
          { toValue: 1, friction: 3 }
        ).start();
      }
    });
  }

  render() {
    // const { imageUrl } = this.props;
    let { pan, scale } = this.state;
    let rotate = '0deg';
    let [translateX, translateY] = [pan.x, pan.y];
    let imageStyle = {transform: [{translateX}, {translateY}, {rotate}, {scale}]};

    return (
      <View style={styles.container}>
          <Animated.View style={imageStyle} {...this._panResponder.panHandlers}>
            <Image source={require('../assets/images/default_profile_pic.jpg')} style={styles.imageStyle} />
            <Text>{this.props.firstName}</Text>
          </Animated.View>
        </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.slackPurple,
    width: Layout.window.width / 2,
    alignItems: 'center',
    height: 150,
  },
  imageStyle: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
});
