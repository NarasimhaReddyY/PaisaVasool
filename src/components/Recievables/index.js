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

class RecievablesHome extends Component {

  constructor(props){
    super(props);
    this.naviagteToForm = this.naviagteToForm.bind(this);
  }

  naviagteToForm = () => {
    this.props.navigation.navigate('RecievablesForm');
  }


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
  recievables
}) => ({
  recievables
});

export default connect(mapStateToProps)(RecievablesHome);
