import React from 'react';
import merge from 'lodash/merge';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Hoshi } from 'react-native-textinput-effects';
import RadioForm from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker'


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
    header: null,
  };

  userSignup = () => {
    if (this.state.gender && this.state.birthday && this.state.first_name && this.state.last_name) {

      const user = {user: this.state};
      this.props.signup(user);
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
          label={'First Name'}
          onChangeText={(first_name) => this.setState({first_name})}
          backgroundColor={'#e01765'}
          inputStyle={styles.input}
          labelStyle={styles.input}
          value={this.state.first_name}
        />
        <Hoshi
          label={'Last Name'}
          onChangeText={(last_name) => this.setState({last_name})}
          backgroundColor={'#e01765'}
          inputStyle={styles.input}
          labelStyle={styles.input}
          value={this.state.last_name}
        />

        <RadioForm
          radio_props={radio_props}
          initial={0}
          formHorizontal={true}
          labelHorizontal={true}
          buttonColor={'#3fb990'}
          labelColor={'#3fb990'}
          animation={true}
          onPress={(value) => {this.setState({ gender: value } )} }
        />

        <DatePicker
          style={{width: 200}}
          mode="date"
          placeholder="select birthday"
          format="YYYY-MM-DD"
          minDate="1900-01-01"
          maxDate="2003-12-31"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {this.setState({birthday: date})}}
        />

        <TouchableOpacity onPress={this.userSignup}>
          <Text>Sign up</Text>
        </TouchableOpacity>

    </KeyboardAwareScrollView>
    );
  }

}

var radio_props = [
  {label: 'Male', value: 1 },
  {label: 'Female', value: 2 }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    backgroundColor: '#e01765',
  },
});
