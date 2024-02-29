import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import JobPostingNavigator from './JobPostingNavigator';
import JobSearchingNavigator from './JobSearchingNavigator';
import SelectUser from '../screens/onBoarding/SelectUser';
import Splash from '../screens/onBoarding/Splash';
import DashboardForCompany from '../screens/jobPosting/DashboardForCompany';
import AddJob from '../screens/jobPosting/tabs/AddJob';
import EditJob from '../screens/jobPosting/tabs/EditJob';
import UpdateProfileForCompany from '../screens/jobPosting/UpdateProfileForCompany';
import ChangeProfilePicForCompany from '../screens/jobPosting/ChangeProfilePicForCompany';

const Stack = createStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectUser"
          component={SelectUser}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DashboardForCompany"
          component={DashboardForCompany}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddJob"
          component={AddJob}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditJob"
          component={EditJob}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UpdateProfileForCompany"
          component={UpdateProfileForCompany}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChangeProfilePicForCompany"
          component={ChangeProfilePicForCompany}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="JobPostingNavigator"
          component={JobPostingNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="JobSearchingNavigator"
          component={JobSearchingNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
