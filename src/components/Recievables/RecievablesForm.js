import React, { Component } from 'react';
import { View, TextInput, Text, Button} from 'react-native';
import { TextInputWithLabel } from '../FormComponents/TextInputWithLabel';
import { DatePickerWithLabel } from '../FormComponents/DatePickerWithLabel';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class RecievablesForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      userName: '',
      phoneNumber: '',
      amount: '',
      expectedDate: new Date()
    }
  }

  onAttributeChange = (attribute, value) => {
    this.setState({
      [attribute]: value
    })
  }

  submitForm = () => {
    // Submit form
  }

  render() {

    const { userName, phoneNumber, amount, expectedDate } = this.state;

    return (
      <View style={{
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
      }}>
        <TextInputWithLabel
          label={<Icon name="user" size={30} />}
          placeholder='Enter Name'
          value={userName}
          onChangeText={(value) => this.onAttributeChange('userName', value)}
        />
        <TextInputWithLabel
          label={<Icon name="phone" size={30} />}
          placeholder='Enter Phone Number'
          value={phoneNumber}
          onChangeText={(value) => this.onAttributeChange('phoneNumber', value)}
        />
        <TextInputWithLabel
          label={<Icon name="rupee" size={30} />}
          placeholder='Enter Amount'
          value={amount}
          onChangeText={(value) => this.onAttributeChange('amount', value)}
        />
        <DatePickerWithLabel
          label={<Icon name="calendar-plus-o" size={30} />}
          value={expectedDate}
          placeholder='Selec Expected Date'
          onDateChange={(value) => this.onAttributeChange('expectedDate', value)}
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
              onPress={() => this.props.navigation.goBack()}
              title="Cancel"
            />
          </View>
          <View
            style={{
              flex: 1
            }}
          >
            <Button
              onPress={() => this.submitForm()}
              color="#ff5c5c"
              title="Add"
            />
          </View>
        </View>


      </View>
    );
  }
}
