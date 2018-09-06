import React from 'react';
import { connect } from 'react-redux';
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

import {Platform, StatusBar, StyleSheet, View } from 'react-native';

import FriendsList from './FriendsList'
import { friendsList } from '../../mockData';

class DashBoard extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    const { isLoading } = this.props.dashboard;

    return (
      <View style={{flex: 1}}>
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
                <FriendsList
                  friendsList={friendsList}
                />
              </Tab>
              <Tab heading="Payables">
              </Tab>
            </Tabs>
          </Content>
          <Fab
            active={'true'}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({
              addingPayables: true
            })}>
            <Icon name="md-add" />
          </Fab>
        </Container>
      </View>
    );
  }
}

const mapStateToProps = ({
  dashboard
}) => ({
  dashboard
});

export default connect(mapStateToProps)(DashBoard);
