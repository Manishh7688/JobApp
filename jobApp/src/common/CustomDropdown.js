import { Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../utils/Colors'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'



const CustomDropdown = ({title,placeholder,bad,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}
    style={[styles.input,{borderColor:bad?Colors.error:Colors.black}]}>
      <Text style={[styles.titleTxt,{color:bad?Colors.error:Colors.black}]}>{title}</Text>
      <Text style={{color:placeholder.includes('select')?'#9e9e9e':'black',fontSize:16}}>{placeholder}</Text>
      <Image source={require('../assets/images/down.png')} style={styles.icon}/>
    </TouchableOpacity>
  )
}

export default CustomDropdown

const styles = StyleSheet.create({
    input:{
        width:'90%',
        height:verticalScale(50),
        borderRadius:moderateScale(10),
        borderWidth:1,
        alignSelf:'center',
        marginTop:moderateVerticalScale(20),
        justifyContent:'center',
        paddingLeft:moderateScale(15),
        paddingRight:moderateScale(15),
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row'
    },
    titleTxt:{
        alignSelf:"flex-start",
        marginLeft:moderateScale(20),
        top:-moderateScale(10),
        position:'absolute',
        backgroundColor:Colors.BG_COLOR,
        paddingLeft:moderateScale(10),
        paddingRight:moderateScale(10),
        fontWeight:'600'
    },
    icon:{
      width:scale(24),
      height:scale(24),
    }
})