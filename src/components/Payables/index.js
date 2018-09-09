import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  View,
  Fab,
  Icon
} from 'native-base';

const rupeeSymbol = '\u20B9';

class PayablesHome extends Component {
  constructor(props){
    super(props);
    this.naviagteToForm = this.naviagteToForm.bind(this);
  }

  naviagteToForm = () => {
    this.props.navigation.navigate('RecievablesForm');
  }

  render() {

    const { payablesList } = this.props.payables;

    return (
      <Container>
        <Content>
          <List>
            {
              payablesList.map(({userName, avatar, amount}, index) => (
                <ListItem thumbnail key={index}>
                  <Left>
                    <Thumbnail circle source={{ uri: avatar }} />
                  </Left>
                  <Body>
                    <Text>{userName}</Text>
                  </Body>
                  <Right>
                    <Text>{amount} {rupeeSymbol}</Text>
                  </Right>
                </ListItem>
              ))
            }
          </List>
        </Content>
          <Fab
            active={'true'}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={this.naviagteToForm}>
            <Icon name="md-add" />
          </Fab>
      </Container>
    );
  }
}

const mapStateToProps = ({
  payables
}) => ({
  payables
});

export default connect(mapStateToProps)(PayablesHome);
