import React from 'react';
import Layout from '../constants/Layout';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Akira } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      errors: false,
    }
  }
  static navigationOptions = {
    header: null,
  };

  userSignup = () => {
    const user = {user: this.state};
    this.props.signup(user);
  }

  handleDisabledNext = () => {
    this.setState({ errors: true })
  }

  errors() {
    if (this.state.errors) {
      return <Text style={styles.errors}>Please enter email and password.</Text>
    }
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
        <TouchableOpacity onPress={this.handleDisabledNext} style={styles.nextButtonDisabled}>
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

      <View>{this.errors()}</View>
      <Akira
        style={styles.input}
        label={'Email'}
        autoCapitalize={'none'}
        autoCorrect={false}
        selectTextOnFocus={true}
        value={this.state.email}
        borderColor={'#a5d1cc'}
        labelStyle={{ color: '#ac83c4' }}
        inputStyle={{ color: '#ac83c4' }}
        onChangeText={(email) => this.setState({email})}
      />
    <Akira
        style={styles.input}
        label={'Password'}
        secureTextEntry={true}
        selectTextOnFocus={true}
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
    marginBottom: 10,
  },
  errors : {
    color: 'red',
    alignSelf: 'center',
    marginBottom: 10,
  },
  nextButton: {
    height: 40,
    backgroundColor: '#a5d1cc',
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    width: Layout.width / 1.2 ,
  },
  nextButtonDisabled: {
    height: 40,
    backgroundColor: '#a5d1cc',
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    alignSelf: 'stretch',
    width: Layout.width / 1.2 ,
  }
});
