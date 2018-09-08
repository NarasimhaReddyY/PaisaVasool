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

import DashboardTabsNavigator from '../../navigator/dashboardTabs';

class DashBoard extends React.Component {

  static navigationOptions = {
    header: () => (
      <Header>
        <Body>
          <Title>Paisa Vasool</Title>
        </Body>
        <Right />
      </Header>
    )
  };

  constructor(props){
    super(props);
  }

  render() {

    const { isLoading } = this.props.dashboard;

    return (
      <View style={{flex: 1}}>
        <Container>
          <DashboardTabsNavigator />
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
