import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, TextInput, Text, Button} from 'react-native';
import { addRecievableActionCreator } from '../actionCreators/index';

import { TextInputWithLabel } from '../FormComponents/TextInputWithLabel';
import { DatePickerWithLabel } from '../FormComponents/DatePickerWithLabel';
import Icon from 'react-native-vector-icons/FontAwesome';

class RecievablesForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      recievable: {
        userName: '',
        phoneNumber: '',
        amount: '',
        expectedDate: new Date()
      }
    }
  }


  componentWillReceiveProps(nextProps){

    const { recievables } = nextProps;
    const { isFetching, errors } = recievables;

    if(this.props.recievables.isFetching == isFetching
      && errors.length == 0){
      this.props.navigation.navigate('DashBoard');
    }
  }

  onAttributeChange = (attribute, value) => {

    const { recievable } = this.state;

    this.setState({
      ...this.state,
      recievable: {
        ...recievable,
        [attribute]: value
      }
    })
  }

  submitForm = () => {
    const { recievable } = this.state;
    this.props.addRecievable(recievable);
  }

  render() {

    const { userName, phoneNumber, amount, expectedDate } = this.state.recievable;

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

const mapStateToProps = ({
  recievables
}) => ({
  recievables
});

const mapDispatchToProps = (dispatch) => ({
  addRecievable: bindActionCreators(addRecievableActionCreator, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(RecievablesForm);
