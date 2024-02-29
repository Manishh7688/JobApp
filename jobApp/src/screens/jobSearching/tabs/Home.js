import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {Colors} from '../../../utils/Colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import CustomSolidBtn from '../../../common/CustomSolidBtn';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const navigation = useNavigation()
  const isFocused = useIsFocused()
  const [isLogin, setIsLogin] = useState(false)

  useEffect(()=>{
    getData()
  },[isFocused])

  const getData = async()=>{
    const id = await AsyncStorage.getItem('USER_ID')
    const type = await AsyncStorage.getItem("USER_TYPE")
    if(id!=null && type!=null){
     if(type=="user"){
        setIsLogin(true)
     }
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity activeOpacity={1} style={styles.inputView} onPress={()=>{navigation.navigate('SearchJob')}}>
        <Image
          source={require('../../../assets/images/search.png')}
          style={styles.inputicon}
        />
        <Text style={styles.searchText}>Search job here...</Text>
      </TouchableOpacity>
      {!isLogin &&  
      <View>
      <Text style={styles.heading}>
        You are one step away from getting a good job
      </Text>
      <View style={styles.subheading}>
        <Image
          source={require('../../../assets/images/star.png')}
          style={styles.inputicon}
        />
        <Text style={styles.subText}>Get job after creating account</Text>
      </View>
      <View style={styles.subheading}>
        <Image
          source={require('../../../assets/images/star.png')}
          style={styles.inputicon}
        />
        <Text style={styles.subText}>Chat with recruiter directly</Text>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.loginBtn} onPress={()=>{navigation.navigate('LoginForUser')}}>
          <Text style={styles.logText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupBtn} onPress={()=>{navigation.navigate('SignupForUser')}}>
          <Text style={styles.signText}>Signup</Text>
        </TouchableOpacity>
      </View>
      </View>}
      <View style={styles.midView}>
        <Image
          source={require('../../../assets/images/search.gif')}
          style={styles.gif}
        />
        <View style={styles.bottomInpt}>
          <Text style={styles.searchText}>search job title</Text>
        </View>
        <View style={styles.bottomInpt}>
          <Text style={styles.searchText}>search job title</Text>
        </View>
        <CustomSolidBtn title={'Search jobs'} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
  },
  inputView: {
    width: '85%',
    height: verticalScale(40),
    borderWidth: 0.4,
    alignSelf: 'center',
    borderRadius: moderateScale(20),
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: verticalScale(10),
  },
  inputicon: {
    width: scale(24),
    height: scale(24),
    marginLeft: moderateScale(10),
  },
  searchText: {
    fontSize: scale(16),
    color: '#2e2e2e',
    marginLeft: moderateScale(10),
  },
  heading: {
    alignSelf: 'center',
    fontSize: scale(24),
    fontWeight: '700',
    color: Colors.TEXT_COLOR,
    marginTop: verticalScale(20),
    width: '90%',
  },
  subheading: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginTop: verticalScale(10),
    alignSelf: 'center',
    justifyContent: 'flex-start',
  },
  subText: {
    fontSize: scale(16),
    color: '#2e2e2e',
    marginLeft: moderateScale(10),
  },
  btnView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: moderateVerticalScale(20),
  },
  loginBtn: {
    width: '40%',
    height: moderateVerticalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.TEXT_COLOR,
    borderRadius: moderateScale(10),
  },
  signupBtn: {
    width: '40%',
    height: moderateVerticalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BG_COLOR,
    borderRadius: moderateScale(10),
    borderWidth: 1,
  },
  logText: {
    fontSize: scale(15),
    color: Colors.BG_COLOR,
  },
  signText: {
    fontSize: scale(15),
    color: Colors.TEXT_COLOR,
  },
  btnView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: moderateVerticalScale(20),
  },
  loginBtn: {
    width: '40%',
    height: moderateVerticalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.TEXT_COLOR,
    borderRadius: moderateScale(10),
  },
  signupBtn: {
    width: '40%',
    height: moderateVerticalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BG_COLOR,
    borderRadius: moderateScale(10),
    borderWidth: 1,
  },
  logText: {
    fontSize: scale(15),
    color: Colors.BG_COLOR,
  },
  signText: {
    fontSize: scale(15),
    color: Colors.TEXT_COLOR,
  },
  midView: {
    width: '90%',
    height: '45%',
    alignSelf: 'center',
    backgroundColor: '#EEEEEE',
    marginTop: moderateVerticalScale(20),
    borderRadius: moderateScale(10),
  },
  gif: {
    width: scale(100),
    height: scale(100),
    alignSelf: 'center',
  },
  bottomInpt: {
    width: '85%',
    height: verticalScale(40),
    borderWidth: 0.4,
    alignSelf: 'center',
    borderRadius: moderateScale(20),
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: verticalScale(10),
  },
});
