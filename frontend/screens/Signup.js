import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  TextInput
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Akira } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: this.props.navigation.state.params.password || null,
      email: this.props.navigation.state.params.email || null
    }
  }
  static navigationOptions = {
    header: null,
  };

  userSignup = () => {
    const user = {user: this.state};
    this.props.signup(user);
  }

  nextButton() {
    if (this.state.password && this.state.email ) {
      return (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignupDetails', this.state)}>
            <View style={styles.nextButton}><Text>Next</Text></View>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity style={styles.nextButtonDisabled}>
            <Text>Next</Text>
        </TouchableOpacity>
      )
    }
  }

  render() {
    return (
      <KeyboardAwareScrollView
        style={{ backgroundColor: '#4c69a5' }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={false}
      >
      <Akira
        style={styles.input}
        label={'Email'}
        autoCapitalize={'none'}
        autoCorrect={false}
        value={this.state.email}
        borderColor={'#a5d1cc'}
        labelStyle={{ color: '#ac83c4' }}
        inputStyle={{ color: '#ac83c4' }}
        onChangeText={(email) => this.setState({email})}
      />
    <Akira
        style={styles.input}
        label={'Password'}
        value={this.state.password}
        autoCapitalize={'none'}
        autoCorrect={false}
        borderColor={'#a5d1cc'}
        labelStyle={{ color: '#ac83c4' }}
        inputStyle={{ color: '#ac83c4' }}
        onChangeText={(password) => this.setState({password})}
      />

      {this.nextButton()}
    </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 350,
    backgroundColor: '#563d82',
  },
  input: {
    height: 75,

  },
  nextButton: {
    height: 40,
    backgroundColor: '#70cadc',
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonDisabled: {
    height: 40,
    backgroundColor: '#70cadc',
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: .5,
  }
});
