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

class RecievablesHome extends Component {

  render() {

    const { recievablesList } = this.props.recievables;

    return (
      <Container>
        <Content>
          <List>
            {
              recievablesList.map(({name, avatar, amount}, index) => (
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
  recievables
}) => ({
  recievables
});

export default connect(mapStateToProps)(RecievablesHome);
