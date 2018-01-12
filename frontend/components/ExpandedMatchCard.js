import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated
} from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';


export default class ExpandedMatchCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0),
    }
  }

  componentDidMount() {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 400
    }).start();
  }

  closeCard = () => {
    this.props.closeCard();
  }

  render() {
    return (
      <Animated.View style={[styles.container, {opacity: this.state.opacity}]}>
        <TouchableOpacity
          onPress={this.closeCard}>
          <Text>Close</Text>
        </TouchableOpacity>
        <Text></Text>
      </Animated.View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.slackPurple,
    borderWidth: 3,
    height: 500,
    width: (Layout.window.width) - 5,
    marginBottom: 5,
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});
