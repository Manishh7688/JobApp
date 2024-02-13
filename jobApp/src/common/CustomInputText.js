import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'
import { Colors } from '../utils/Colors'

const CustomInputText = ({title,placeholder,value,onChangeText,bad}) => {
  return (
    <View style={[styles.input,{borderColor:bad?Colors.ERROR_COLOR:Colors.TEXT_COLOR}]}>
      <Text style={[styles.titleTxt,{color:bad?Colors.ERROR_COLOR:Colors.TEXT_COLOR}]}>{title}</Text>
      <TextInput placeholder={placeholder} style={styles.field} value={value}  onChangeText={onChangeText}/>
    </View>
  )
}

export default CustomInputText

const styles = StyleSheet.create({
    input:{
        width:'90%',
        height:verticalScale(50),
        borderRadius:scale(10),
        borderWidth:1,
        alignSelf:'center',
        marginTop:moderateVerticalScale(20),
        justifyContent:'center',
        paddingLeft:moderateScale(15),
        paddingRight:moderateScale(15),
    },
    titleTxt:{
        alignSelf:"flex-start",
        marginLeft:moderateScale(20),
        top:-moderateVerticalScale(10),
        position:'absolute',
        backgroundColor:Colors.BG_COLOR,
        paddingLeft:moderateScale(10),
        paddingRight:moderateScale(10),
        fontWeight:'600'
    },field:{
        color:Colors.TEXT_COLOR,
        fontSize:moderateScale(16),
    }
})