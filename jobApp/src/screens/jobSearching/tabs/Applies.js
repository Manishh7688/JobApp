import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {Colors} from '../../../utils/Colors';
import NoLoginComponent from '../../../common/NoLoginComponent';
import { useNavigation } from '@react-navigation/native';

const Applies = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styels.container}>
      <NoLoginComponent
        title={'One place to track all your application'}
        subTitle={
          'Track all your job which you applied but for that you need to create account first'
        }
        onPress={() => {
          navigation.navigate('LoginForUser')
        }}
      />
    </SafeAreaView>
  );
};

export default Applies;

const styels = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
  },
 
});
