import React from 'react';
import {
  Container,
} from 'native-base';
import { Provider } from 'react-redux'
import { store } from './src/store/index'
import {Platform, StatusBar, StyleSheet, View } from 'react-native';

import DashboardNavigator from './src/navigator/dashboard';

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
      <Provider store={store}>
        <View style={styles.container}>
          <DashboardNavigator />
        </View>
      </Provider>
    );
  }
}
