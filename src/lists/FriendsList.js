import React, { Component } from 'react';
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
  Button
} from 'native-base';

const rupeeSymbol = '\u20B9';

export default class FriendsList extends Component {
  render() {
    const { friendsList } = this.props;

    return (
      <Container>
        <Content>
          <List>
            {
              friendsList.map(({name, avatar, amount}, index) => (
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
