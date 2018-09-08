import React, { Component } from 'react';
import { View, TextInput, Text} from 'react-native';
import { TextInputWithLabel } from '../FormComponents/TextInputWithLabel';
import { DatePickerWithLabel } from '../FormComponents/DatePickerWithLabel';

export default class RecievablesForm extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
      }}>
        <TextInputWithLabel
          label={<Text>{'Name'}</Text>}
          placeholder='Enter Name'
        />
        <TextInputWithLabel
          label={<Text>{'Phone'}</Text>}
          placeholder='Enter Phone Number'
        />
        <TextInputWithLabel
          label={<Text>{'Amount'}</Text>}
          placeholder='Enter Amount'
        />
        <DatePickerWithLabel
          label={<Text>{'Expected Date'}</Text>}
        />
      </View>
    );
  }
}
