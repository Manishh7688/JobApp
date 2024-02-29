import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { Colors } from '../../../utils/Colors'
import NoLoginComponent from '../../../common/NoLoginComponent'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styels.container}>
      <NoLoginComponent title={"Easy mannage your Profile/ Portfolio"}
      subTitle={"Manage your professional profile/portfolio for attracting many jobs"}
      onPress={()=>navigation.navigate('LoginForUser')}
      />
    
    </SafeAreaView>
  )
}

export default Profile
const styels = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:Colors.BG_COLOR
  },
})