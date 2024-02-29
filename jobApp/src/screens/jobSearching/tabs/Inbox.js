import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { Colors } from '../../../utils/Colors'
import NoLoginComponent from '../../../common/NoLoginComponent'
import { useNavigation } from '@react-navigation/native'

const Inbox = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styels.container}>
      <NoLoginComponent title={"You can chat with recruiters of MNC's"} 
      subTitle={"Talk to any recruiter for getting a job recommendation for MNC's"}
      onPress={()=>navigation.navigate('LoginForUser')}
      />
    </SafeAreaView>
  )
}

export default Inbox
const styels = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:Colors.BG_COLOR
  }
})