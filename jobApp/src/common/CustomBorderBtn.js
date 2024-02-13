import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import { Colors } from '../utils/Colors'

const CustomBorderBtn = ({title,onPress}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomBorderBtn
const styles = StyleSheet.create({
    btn:{
        width:'90%',
        height:moderateScale(50),
        borderRadius:moderateScale(10),
        backgroundColor:Colors.BG_COLOR,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:Colors.TEXT_COLOR,
        marginTop:moderateVerticalScale(20),
        marginBottom:moderateVerticalScale(5)
    },
    text:{
        color:Colors.TEXT_COLOR,
        fontSize:moderateScale(20),
    }
})