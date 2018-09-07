import React from 'react';
import { StackNavigator } from 'react-navigation';
import DashBoard from '../components/DashBoard/index';

const DashboardNavigator = StackNavigator({
  DashBoard: DashBoard
},
{
  initialRouteName: 'DashBoard'
});

export default DashboardNavigator;
