import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginForCompany from '../screens/jobPosting/LoginForCompany';
import SignupForCompany from '../screens/jobPosting/SignupForCompany';
import DashboardForCompany from '../screens/jobPosting/DashboardForCompany';

const Stack = createStackNavigator();
const JobPostingNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginForCompany"
        component={LoginForCompany}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignupForCompany"
        component={SignupForCompany}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DashboardForCompany"
        component={DashboardForCompany}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default JobPostingNavigator;
