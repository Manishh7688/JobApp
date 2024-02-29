import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Colors } from '../utils/Colors';

const Header = ({title,onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={require('../assets/images/back.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: Colors.BG_COLOR,
    flexDirection: 'row',
   gap:20
  },
  icon: {
    width: scale(30),
    height: verticalScale(30),
    tintColor: Colors.BG_COLOR,
    marginLeft:moderateScale(10),
    tintColor:Colors.TEXT_COLOR
  },
  text: {
    color: Colors.TEXT_COLOR,
    fontSize: scale(20),
    fontWeight:'600'
  },
});
