import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import CustomSolidBtn from './CustomSolidBtn'
import { Colors } from '../utils/Colors'


const NoLoginComponent = ({title,subTitle, onPress}) => {
  return (
    <SafeAreaView style={styels.container} >
        <Text style={styels.head}>{title}</Text>
        <Text style={styels.subHead}>{subTitle}</Text>
        <CustomSolidBtn title={'Login'} onPress={onPress}/>
        <View style={styels.accountTextView}>
          <Text style={styels.btmText}>Don't have an account?</Text>
          <Text style={styels.btmText1}>Create account</Text>
        </View>
    </SafeAreaView>
  )
}

export default NoLoginComponent
const styels = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:Colors.BG_COLOR
  },head:{
    fontSize:moderateScale(24),
    fontWeight:'700',
    color:Colors.TEXT_COLOR,
    alignSelf:'center',
    textAlign:'center',
    marginTop:moderateVerticalScale(50),
    width:'90%',
  },
  subHead:{
    fontSize:moderateScale(16),
    color:'#2e2e2e',
    alignSelf:'center',
    textAlign:'center',
    marginTop:moderateVerticalScale(20),
    width:'90%',
  },
  accountTextView:{
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center',
    marginTop:moderateVerticalScale(20),
   
  },
  btmText:{
    fontSize:moderateScale(16),
    color:"#2e2e2e"
  },
  btmText1:{
    color:Colors.TEXT_COLOR,
    fontSize:moderateScale(18),
    fontWeight:'500'
  }
})