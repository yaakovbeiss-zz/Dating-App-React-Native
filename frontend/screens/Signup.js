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

  errors() {
    if (this.state.errors) {
      return <Text style={styles.errors}>Please enter email and password.</Text>
    }
  }

  handleNextButtonPress = () => {
    if (this.state.password && this.state.email ) {
      this.props.navigation.navigate('SignupDetails', this.state)
    } else {
      this.setState({ errors: true })
    }
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
      <TouchableOpacity style={styles.nextButton} onPress={this.handleNextButtonPress}>
          <Text style={styles.nextText}>Next</Text>
          <Icon name="chevron-right" size={22} style={styles.nextIcon}></Icon>
        </TouchableOpacity>
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
