import React from 'react';
import { NavigationActions } from 'react-navigation';
import Layout from '../constants/Layout';
import merge from 'lodash/merge';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Akira } from 'react-native-textinput-effects';
import RadioForm from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SignupDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: 1,
      birthday: null,
      first_name: null,
      last_name: null,
      email: this.props.navigation.state.params.email,
      password: this.props.navigation.state.params.password
    }
  }
  static navigationOptions = {
    title: 'Sign up',
    header: null,
  };

  userSignup = () => {
    if (this.state.gender && this.state.birthday && this.state.first_name && this.state.last_name) {

      const user = this.state;
      this.props.signup(user);
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.outer}>

        <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
          <Icon name="chevron-left" size={22} style={styles.backText}></Icon>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>

        <KeyboardAwareScrollView
          style={{ backgroundColor: '#563d82' }}
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={styles.container}
          scrollEnabled={true}
        >

        <RadioForm
          style={styles.radio}
          radio_props={radio_props}
          initial={0}
          formHorizontal={true}
          labelHorizontal={true}
          buttonColor={'#ac83c4'}
          labelColor={'#ac83c4'}
          animation={true}
          onPress={(value) => {this.setState({ gender: value } )} }
        />

        <DatePicker
          style={{width: Layout.width}}
          mode="date"
          date={this.state.birthday}
          placeholder="select birthday"
          format="MMMM Do YYYY"

          confirmBtnText="Confirm"
          showIcon={false}
          cancelBtnText="Cancel"
          onDateChange={(date) => {this.setState({birthday: date})}}
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 0,
              alignSelf: 'center',
            },
            dateInput: {
              alignItems: 'center',
              alignSelf: 'center',
              borderColor: '#ac83c4',
            }
          }}
        />

        <Akira
          style={styles.input}
          label={'First name'}
          autoCapitalize={'none'}
          autoCorrect={false}
          value={this.state.first_name}
          borderColor={'#a5d1cc'}
          labelStyle={{ color: '#ac83c4' }}
          inputStyle={{ color: '#ac83c4' }}
          onChangeText={(first_name) => this.setState({first_name})}
        />
        <Akira
          style={styles.input}
          label={'Last name'}
          autoCapitalize={'none'}
          autoCorrect={false}
          value={this.state.last_name}
          borderColor={'#a5d1cc'}
          labelStyle={{ color: '#ac83c4' }}
          inputStyle={{ color: '#ac83c4' }}
          onChangeText={(last_name) => this.setState({last_name})}
        />


        <TouchableOpacity style={styles.signUpButton} onPress={this.userSignup}>
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>

      </KeyboardAwareScrollView>
    </View>
    );
  }

}

var radio_props = [
  {label: 'Male    ', value: 1 },
  {label: 'Female', value: 2 }
];

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: '#563d82',
    paddingTop: 30,
  },
  buttonContainer: {
    backgroundColor: '#563d82',
  },
  backButton: {
    width: 85,
    height: 33,
    borderRadius: 5,
    backgroundColor: "#563d82",
    marginLeft: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: {
    color: '#fff',
    paddingRight: 5,
    fontSize: 13,
  },
  container: {
    flex: 1,
    paddingTop: 200,
  },
  input: {
    height: 75,
    marginBottom: 10,
  },
  radio: {
    height: 75,
    alignSelf: 'center',
  },
  signUpButton: {
    height: 40,
    backgroundColor: '#a5d1cc',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 15,
  },
  signupText: {
    color: '#fff',
    fontSize: 15
  }
});
