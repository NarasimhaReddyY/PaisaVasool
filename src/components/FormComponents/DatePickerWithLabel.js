import React from 'react';
import { View, TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker';

export const DatePickerWithLabel = ({label, placeholder, value, format, onChange, ...props}) => (
  <View style={{
    flexDirection: 'row',
    paddingBottom: 10
  }}>
    <View style={{
      flex: 1,
      width: '20%',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {label}
    </View>
    <View style={{
      width: '80%',
    }}>
      <DatePicker
        date={value}
        mode="date"
        placeholder={placeholder}
        format={format || "DD-MM-YYYY"}
        minDate={new Date()}
        onDateChange={onChange}
        showIcon={false}
        {...props}
        style={{
          width: '100%',
          padding: 12
        }}
      />
    </View>
  </View>
)
