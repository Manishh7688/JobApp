import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../screens/jobSearching/Main';
import SearchJob from '../screens/jobSearching/SearchJob';
import JobDetails from '../screens/jobSearching/JobDetails';
import LoginForUser from '../screens/jobSearching/LoginForUser';
import SignupForUser from '../screens/jobSearching/SignupForUser';

const stack = createStackNavigator()
const JobSearchingNavigator = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="Main" component={Main} options={{headerShown:false}}/>
      <stack.Screen name="SearchJob" component={SearchJob} options={{headerShown:true,title:'Search Jobs'}}/>
      <stack.Screen name="JobDetails" component={JobDetails} options={{headerShown:true,title:'Job Details'}}/>
      <stack.Screen name="LoginForUser" component={LoginForUser} options={{headerShown:true,title:''}}/>
      <stack.Screen name="SignupForUser" component={SignupForUser} options={{headerShown:true,title:''}}/>
    </stack.Navigator>
  )
}

export default JobSearchingNavigator

