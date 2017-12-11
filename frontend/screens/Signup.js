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
import Icon from 'react-native-vector-icons/FontAwesome';
import { facebookLogIn } from '../util/facebook_api_util.js';

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

  componentWillReceiveProps() {
    this.invalidCredentialsError();
  }

  errors() {
    if (this.state.errors) {
      return <Text style={styles.errors}>{this.state.errors}</Text>
    }
  }

  invalidCredentialsError() {
    if (this.props.errors && this.props.errors[0]) {
      this.setState({ errors: this.props.errors[0]})
    }
  }

  checkInput() {
    if (this.state.password && this.state.email) {
      return true;
    } else {
      this.setState({ errors: 'Please enter email and password.' })
    }
  }

  handleSignin = () => {
    if (this.checkInput()) {
      this.props.signin(this.state)
    }
  }

  handleSignup = () => {
    if (this.checkInput()) {
      this.props.navigation.navigate('SignupDetails', this.state)
    }
  }

  handleFacebookSignup() {
    facebookLogIn();
  }

  render() {
    return (
        <KeyboardAwareScrollView
          style={{ backgroundColor: '#563d82' }}
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={styles.container}
          scrollEnabled={true}
        >

        <View>{this.errors()}</View>
        <Akira
          style={styles.input}
          label={'Email'}
          onFocus={() => this.setState({errors: null})}
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
          onFocus={() => this.setState({errors: null})}
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
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={this.handleSignin}>
            <Text style={styles.nextText}>Sign in</Text>
          </TouchableOpacity>

        <TouchableOpacity style={styles.nextButton} onPress={this.handleSignup}>
            <Text style={styles.nextText}>Sign up</Text>
            <Icon name="chevron-right" size={22} style={styles.nextIcon}></Icon>
          </TouchableOpacity>

        <TouchableOpacity style={styles.nextButton} onPress={this.handleFacebookSignup}>
            <Text style={styles.nextText}>Log in with Facebook</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 350,
    backgroundColor: '#563d82',
    marginLeft: 5,
    marginRight: 5,
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
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  nextButton: {
    height: 40,
    backgroundColor: '#a5d1cc',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: Layout.width,
    marginTop: 15,
  },
  nextText: {
    fontSize: 15,
    color: '#fff'
  },
  nextIcon: {
    color: '#fff',
    paddingLeft: 5,
  }
});
