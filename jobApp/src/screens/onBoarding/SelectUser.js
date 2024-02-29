import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import { Colors } from '../../utils/Colors'
import { useNavigation } from '@react-navigation/native'

const SelectUser = ({navigation}) => {
   
  return (
    <View style={styles.container}>
        <Image source={require('../../assets/images/job.png')} style={styles.icon} />
      <Text style={styles.text}>What are you looking for?</Text>
      <TouchableOpacity style={styles.buttonJob} onPress={()=>{
        navigation.navigate('JobPostingNavigator')
      }}>
        <Text style={styles.txt1}>Want to Hire Condidate</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonHire} onPress={()=>{
        
      }}>
      <Text style={styles.txt2} onPress={()=>{
        navigation.navigate('JobSearchingNavigator')
      }}>Want to get Job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SelectUser
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:Colors.BG_COLOR
    },
    text:{
        fontSize:moderateScale(18),
        fontWeight:'600'
    },
    buttonJob:{
        justifyContent:'center',
        alignItems:'center',
        width:'80%',
        height:moderateVerticalScale(45),
        borderRadius:moderateScale(10),
        backgroundColor:Colors.TEXT_COLOR,
        marginTop:moderateVerticalScale(20)
    },
    buttonHire:{
        justifyContent:'center',
        alignItems:'center',
        width:'80%',
        height:moderateVerticalScale(45),
        borderRadius:moderateScale(10),
        marginTop:moderateVerticalScale(20),
        borderWidth:1
    },
    txt1:{
        fontSize:moderateScale(18),
        fontWeight:'500',
        color:Colors.BG_COLOR
    },txt2:{
        fontSize:moderateScale(18),
        fontWeight:'500',
        color:Colors.TEXT_COLOR
    },
    icon:{
        width:moderateScale(100),
        height:moderateScale(100),
    }

})