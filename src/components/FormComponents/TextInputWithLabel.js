import React from 'react';
import { View, TextInput, Text } from 'react-native';

export const TextInputWithLabel = ({label, placeholder, onChange, ...props}) => (
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
      <TextInput
        placeholder={placeholder}
        onChange={onChange}
        {...props}
        style={{
          padding: 12,
          fontSize: 18
        }}
      />
    </View>
  </View>
)
