import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  TextInput
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Hoshi } from 'react-native-textinput-effects';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: null,
      email: null
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
        <Hoshi
          label={'Email'}
          onChangeText={(email) => this.setState({email})}
          borderColor={'#fff'}
          backgroundColor={'#e01765'}
          inputStyle={styles.input}
          labelStyle={styles.input}
          value={this.state.email}
        />
        <Hoshi
          label={'Password'}
          onChangeText={(password) => this.setState({password})}
          borderColor={'#fff'}
          backgroundColor={'#e01765'}
          inputStyle={styles.input}
          labelStyle={styles.input}
          value={this.state.password}
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
    backgroundColor: '#e01765',
  },
  input: {
    height: 30,
    color: '#fff',
    borderColor: 'white',
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
    opacity: .7,
  }
});
