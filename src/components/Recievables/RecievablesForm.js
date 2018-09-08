import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  DatePicker,
  Button,
  Text,
  View
} from 'native-base';

export class RecievablesForm extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Payee Name</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Phone Number</Label>
              <Input
                keyboardType='numeric'
              />
            </Item>
            <Item stackedLabel last>
              <Label>Amount</Label>
              <Input
                keyboardType='numeric'
              />
            </Item>

            <Item stackedLabel last>
              <Label>Payment Expected By</Label>
              <DatePicker
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Select date"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={() => {}}
              />
            </Item>
            <Button full primary>
              <Text> Add </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
