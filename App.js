import React from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Fab,
  Tab,
  Tabs
} from 'native-base';

import {Platform, StatusBar, StyleSheet, View } from 'react-native'

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
        <Container>
          <Header>
            <Body>
              <Title>Paisa Vasool</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <Tabs>
              <Tab heading="Recievables">
                <View style={{ flex: 1 }}>
                </View>
              </Tab>
              <Tab heading="Payables">
              </Tab>
            </Tabs>
          </Content>
          <Fab
            active={'true'}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => {}}>
            <Icon name="md-add" />
          </Fab>
        </Container>
      </View>
    );
  }
}
