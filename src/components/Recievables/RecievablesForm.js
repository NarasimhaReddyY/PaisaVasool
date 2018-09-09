import React, { Component } from 'react';
import { View, TextInput, Text, Button} from 'react-native';
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

        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
          <View
            style={{
              flex: 1
            }}
          >
            <Button
              onPress={() => {}}
              title="Cancel"
            />
          </View>
          <View
            style={{
              flex: 1
            }}
          >
            <Button
              onPress={() => {}}
              color="#ff5c5c"
              title="Add"
            />
          </View>
        </View>


      </View>
    );
  }
}
