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
  View
} from 'native-base';

const rupeeSymbol = '\u20B9';

class PayablesHome extends Component {

  render() {

    const { payablesList } = this.props.payables;

    return (
      <Container>
        <Content>
          <List>
            {
              payablesList.map(({name, avatar, amount}, index) => (
                <ListItem thumbnail key={index}>
                  <Left>
                    <Thumbnail circle source={{ uri: avatar }} />
                  </Left>
                  <Body>
                    <Text>{name}</Text>
                  </Body>
                  <Right>
                    <Text>{amount} {rupeeSymbol}</Text>
                  </Right>
                </ListItem>
              ))
            }
          </List>
        </Content>
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
