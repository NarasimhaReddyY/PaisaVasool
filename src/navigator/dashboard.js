import React from 'react';
import { createStackNavigator } from 'react-navigation';
import RecievablesForm from '../components/Recievables/RecievablesForm';
import DashboardTabsNavigator from './dashboardTabs';

const DashboardNavigator = createStackNavigator({
  DashBoard: {
    screen:  DashboardTabsNavigator,
    navigationOptions: () => ({
      title: `Paisa Vasool`
    })
  },
  RecievablesForm: {
    screen:  RecievablesForm,
    navigationOptions: () => ({
      title: `Add Recievables`
    })
  },
},
{
  initialRouteName: 'DashBoard'
});

export default DashboardNavigator;
