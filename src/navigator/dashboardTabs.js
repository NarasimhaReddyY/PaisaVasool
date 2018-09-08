import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import RecievablesHome from '../components/Recievables/index.js'
import PayablesHome from '../components/Payables/index.js'

const DashboardTabsNavigator = createMaterialTopTabNavigator({
  Recievables: RecievablesHome,
  Payables: PayablesHome
},
{
  initialRouteName: 'Recievables'
});

export default DashboardTabsNavigator;
