import {Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomInputText from '../../common/CustomInputText';
import CustomSolidBtn from '../../common/CustomSolidBtn';
import CustomBorderBtn from '../../common/CustomBorderBtn';
import Loader from '../../common/Loader';
import { Colors } from '../../utils/Colors';

const LoginForUser = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [badeamil, setBadEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badPassword, setBadPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const validate = () => {
    let RegexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let validEmail = true;
    let validPassword = true;
    if (email == '') {
      validEmail = false;
      setBadEmail('Please enter a email');
    } else if (
      email !== '' &&
      email.length >= 3 &&
      !email.toString().match(RegexEmail)
    ) {
      validEmail = false;
      setBadEmail('Enter a valid email');
    } else if (
      email !== '' &&
      email.length >= 3 &&
      email.toString().match(RegexEmail)
    ) {
      validEmail = true;
      setBadEmail('');
    }

    if (password == '') {
      validPassword = false;
      setBadPassword('Please enter password');
    } else if (!password == '' && !password.length >= 6) {
      validPassword = false;
      setBadPassword('Please min 6 character!');
    } else if (!password == '' && password.length >= 6) {
      validPassword = true;
      setBadPassword('');
    }
    return validEmail && validPassword;
  };

  const loginUser = () => {
    setLoading(true);
    firestore()
      .collection('users')
      .where('email', '==', email)
      .get()
      .then(data => {
        setLoading(false);
        console.log(data.docs);
        if (data.docs.length > 0) {
          data.docs.forEach((item)=>{
            if (item.data().password == password) {
              setBadEmail('');
              setBadPassword('');
              goToNextScreen(item.id, item.data().name,item.data().email)
            } else {
              setBadPassword('Password is wrong');
            }
          })
        } else {
          setBadEmail('Email is wrong');
        }
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      });
  };

  const goToNextScreen=async(id,name,email)=>{
    await AsyncStorage.setItem("USER_ID", id);
    await AsyncStorage.setItem("NAME", name);
    await AsyncStorage.setItem("EMAIL", email);
    await AsyncStorage.setItem("USER_TYPE", 'user');
    navigation.navigate('Main')
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <CustomInputText
        title={'Email'}
        placeholder={'john@gmail.com'}
        value={email}
        onChangeText={text => setEmail(text)}
        bad={badeamil != '' ? true : false}
      />
      {badeamil != '' && <Text style={styles.errorMsg}>{badeamil}</Text>}
      <CustomInputText
        title={'password'}
        placeholder={'*****'}
        value={password}
        bad={badPassword != '' ? true : false}
        onChangeText={text => setPassword(text)}
      />
      {badPassword != '' && <Text style={styles.errorMsg}>{badPassword}</Text>}
      <Text style={styles.forgot}>forgot password?</Text>
      <CustomSolidBtn
        title={'Login'}
        onPress={() => {
          if (validate()) {
            loginUser();
          }
        }}
      />
      <CustomBorderBtn
        title={'Create account'}
        onPress={() => {
          navigation.navigate('SignupForUser');
        }}
      />
      {loading && <Loader />}
    </SafeAreaView>
  );
};

export default LoginForUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
  },
  title: {
    fontSize: scale(25),
    fontWeight: '700',
    color: Colors.TEXT_COLOR,
    marginTop: moderateVerticalScale(50),
    alignSelf: 'center',
  },
  forgot: {
    alignSelf: 'flex-end',
    marginTop: moderateVerticalScale(10),
    marginRight: moderateScale(20),
    color: Colors.TEXT_COLOR,
    fontSize: moderateScale(15),
  },
  errorMsg: {
    color: Colors.ERROR_COLOR,
    marginLeft: moderateScale(20),
  },
});
