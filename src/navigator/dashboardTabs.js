import React from 'react';
import { createTabNavigator } from 'react-navigation';
import FriendsList from '../components/DashBoard/FriendsList';

const DashboardTabsNavigator = createTabNavigator({
  Recievables: FriendsList,
  Payables: FriendsList
},
{
  initialRouteName: 'Recievables'
});

export default DashboardTabsNavigator;
