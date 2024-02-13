import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import { Colors } from '../utils/Colors'

const CustomSolidBtn = ({title,onPress}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomSolidBtn
const styles = StyleSheet.create({
    btn:{
        width:'90%',
        height:moderateScale(50),
        borderRadius:moderateScale(10),
        backgroundColor:Colors.TEXT_COLOR,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop:moderateVerticalScale(20)
    },
    text:{
        color:Colors.BG_COLOR,
        fontSize:moderateScale(20),
    }
})