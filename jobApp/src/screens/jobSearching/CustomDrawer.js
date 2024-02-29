import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../utils/Colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDrawer = () => {
  const isFocused = useIsFocused();
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    getData();
  }, [isFocused]);

  const getData = async () => {
    const id = await AsyncStorage.getItem('USER_ID');
    const type = await AsyncStorage.getItem('USER_TYPE');
    const Name = await AsyncStorage.getItem('NAME');
    const Email = await AsyncStorage.getItem('EMAIL');
    if (id != null && type != null && Name != null && Email != null) {
      if (type == 'user') {
        setIsLogin(true);
        setName(Name);
        setEmail(Email);
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <Image
          source={require('../../assets/images/profile.png')}
          style={styles.profileImg}
        />
        <View style={styles.title}>
          <Text style={styles.heading}>
            {isLogin ? name : 'Build your profile'}
          </Text>
          <Text style={[styles.subHeading,{width:isLogin?'100%':'60%'}]}>
            {isLogin ? email : 'Waiting job oppourtunaty for you at MyJobs'}
          </Text>
        </View>
      </View>
      {!isLogin && (
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.logText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupBtn}>
            <Text style={styles.signText}>Signup</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.saparator}></View>
      <TouchableOpacity style={styles.options}>
        <View style={styles.iconText}>
          <Image
            source={require('../../assets/images/contact.png')}
            style={styles.icon}
          />
          <Text style={styles.rate}>Rate Us</Text>
        </View>
        <Image
          source={require('../../assets/images/forward.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
  },
  profileImg: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
    marginTop: verticalScale(20),
    marginLeft: verticalScale(10),
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: moderateScale(5),
    alignItems:'center'
  },
  heading: {
    fontSize: scale(16),
    fontWeight: '600',
    width: '100%',
    color: Colors.TEXT_COLOR,
  },
  subHeading: {
    fontSize: scale(12),
    width: '60%',
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
  saparator: {
    width: '90%',
    height: verticalScale(0.5),
    backgroundColor: Colors.TEXT_COLOR,
    marginTop: moderateScale(20),
    alignSelf: 'center',
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: moderateScale(10),
  },
  icon: {
    width: scale(24),
    height: scale(24),
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rate: {
    fontSize: scale(16),
    marginLeft: moderateScale(10),
  },
});
