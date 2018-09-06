import React from 'react';
import {
  Container,
} from 'native-base';

import {Platform, StatusBar, StyleSheet, View } from 'react-native';

import DashBoard from './src/components/DashBoard/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
        android: {
            marginTop: StatusBar.currentHeight
        }
    })
  }
})

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });

    this.setState({
      loading: false
    })
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }

    return (
      <View style={styles.container}>
        <DashBoard />
      </View>
    );
  }
}
