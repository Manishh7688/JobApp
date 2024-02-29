import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import { Colors } from '../utils/Colors';

const ProfileOptionItem = ({title, icon,onClick}) => {
  return (
    <TouchableOpacity style={styles.itemBtn} onPress={onClick}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={icon} style={{width: scale(20), height: scale(20)}} />
        <Text style={styles.tittle}>{title}</Text>
      </View>
      <Image
        source={require('../assets/images/forward.png')}
        style={{width: scale(14), height: scale(14)}}
      />
    </TouchableOpacity>
  );
};

export default ProfileOptionItem;

const styles = StyleSheet.create({
  itemBtn: {
    width: '90%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: verticalScale(20),
  },tittle:{
    fontSize:scale(14),
    color:Colors.TEXT_COLOR,
    marginLeft:scale(15)
  }
});
