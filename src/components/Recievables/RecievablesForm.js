import React, { Component } from 'react';
import { View, TextInput, Text} from 'react-native';
import { TextInputWithLabel } from '../FormComponents/TextInputWithLabel';
import { DatePickerWithLabel } from '../FormComponents/DatePickerWithLabel';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class RecievablesForm extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
      }}>
        <TextInputWithLabel
          label={<Icon name="user" size={30} />}
          placeholder='Enter Name'
        />
        <TextInputWithLabel
          label={<Icon name="phone" size={30} />}
          placeholder='Enter Phone Number'
        />
        <TextInputWithLabel
          label={<Icon name="rupee" size={30} />}
          placeholder='Enter Amount'
        />
        <DatePickerWithLabel
          label={<Icon name="calendar-plus-o" size={30} />}
        />
      </View>
    );
  }
}
