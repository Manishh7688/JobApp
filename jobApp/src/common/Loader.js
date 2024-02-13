import {View, ActivityIndicator} from 'react-native';
import React from 'react';

const Loader = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute'
      }}>
      <ActivityIndicator size={'large'}  />
    </View>
  );
};

export default Loader;
