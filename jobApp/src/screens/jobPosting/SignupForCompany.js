import {Text, StyleSheet, Image, SafeAreaView, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../utils/Colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import CustomInputText from '../../common/CustomInputText';
import CustomSolidBtn from '../../common/CustomSolidBtn';
import CustomBorderBtn from '../../common/CustomBorderBtn';
import {useNavigation} from '@react-navigation/native';
import Loader from '../../common/Loader';
import firestore from '@react-native-firebase/firestore';

const SignupForCompany = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [badName, setBadName] = useState('');
  const [email, setEmail] = useState('');
  const [badeamil, setBadEmail] = useState('');
  const [contact, setContact] = useState('');
  const [badContact, setBadContact] = useState('');
  const [password, setPassword] = useState('');
  const [badPassword, setBadPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [badCompanyName, setBadCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [badAddress, setBadAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [accountCreate, setAccountCreate] = useState(false);

  const validate = () => {
    let RegexName = /^[A-Za-z]+$/;
    let RegexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let RegexMobile = /^\d+$/;
    let validName = true;
    let validEmail = true;
    let validContact = true;
    let validPassword = true;
    let validCompanyName = true;
    let validAddress = true;
    if (name == '') {
      validName = false;
      setBadName('Please enter a name');
    } else if (
      name !== '' &&
      name.length >= 3 &&
      !name.toString().match(RegexName)
    ) {
      validName = false;
      setBadName('Enter a valid name');
    } else if (
      name !== '' &&
      name.length >= 3 &&
      name.toString().match(RegexName)
    ) {
      validName = true;
      setBadName('');
    }

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

    if (contact == '') {
      validContact = false;
      setBadContact('Please enter a contact');
    } else if (
      contact !== '' &&
      contact.length >= 10 &&
      !contact.match(RegexMobile)
    ) {
      validContact = false;
      setBadContact('Enter a valid contact');
    } else if (
      contact !== '' &&
      contact.length >= 10 &&
      contact.match(RegexMobile)
    ) {
      validContact = true;
      setBadContact('');
    }

    if (companyName == '') {
      validCompanyName = false;
      setBadCompanyName('Please enter a company name');
    } else if (!companyName == '') {
      validCompanyName = true;
      setBadCompanyName('');
    }

    if (address == '') {
      validAddress = false;
      setBadAddress('Please enter a address');
    } else if (!address == '') {
      validAddress = true;
      setBadAddress('');
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
    return (
      validName &&
      validEmail &&
      validContact &&
      validPassword &&
      validCompanyName &&
      validAddress
    );
  };

  const registerUser = () => {
    setLoading(true);
    firestore()
      .collection('job_posters')
      .add({
        name,
        email,
        contact,
        companyName,
        address,
        password,
      })
      .then(() => {
        setName('');
        setEmail('');
        setContact('');
        setCompanyName('');
        setAddress('');
        setPassword('');
        setLoading(false);
        setAccountCreate(true);
        setTimeout(() => {
          navigation.goBack();
        }, 3000);
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      {!accountCreate ? (
        <ScrollView>
          <Image
            source={require('../../assets/images/job.jpg')}
            style={styles.logo}
          />
          <Text style={styles.title}>Create new account</Text>
          <CustomInputText
            title={'Name'}
            placeholder={'john doe'}
            value={name}
            onChangeText={text => setName(text)}
            bad={badName != '' ? true : false}
          />
          {badName != '' && <Text style={styles.errorMsg}>{badName}</Text>}
          <CustomInputText
            title={'Email'}
            placeholder={'john@gmail.com'}
            value={email}
            onChangeText={text => setEmail(text)}
            bad={badeamil != '' ? true : false}
          />
          {badeamil != '' && <Text style={styles.errorMsg}>{badeamil}</Text>}
          <CustomInputText
            title={'Contact'}
            placeholder={'+91 7891***'}
            value={contact}
            onChangeText={text => setContact(text)}
            bad={badContact != '' ? true : false}
          />
          {badContact != '' && (
            <Text style={styles.errorMsg}>{badContact}</Text>
          )}
          <CustomInputText
            title={'Company Name'}
            placeholder={'ex.  ABC Corp.'}
            value={companyName}
            onChangeText={text => setCompanyName(text)}
            bad={badCompanyName != '' ? true : false}
          />
          {badCompanyName != '' && (
            <Text style={styles.errorMsg}>{badCompanyName}</Text>
          )}
          <CustomInputText
            title={'Address'}
            placeholder={'ex.  ABC'}
            value={address}
            onChangeText={text => setAddress(text)}
            bad={badAddress != '' ? true : false}
          />
          {badAddress != '' && (
            <Text style={styles.errorMsg}>{badAddress}</Text>
          )}
          <CustomInputText
            title={'password'}
            placeholder={'*****'}
            value={password}
            onChangeText={text => setPassword(text)}
            bad={badPassword != '' ? true : false}
          />
          {badPassword != '' && (
            <Text style={styles.errorMsg}>{badPassword}</Text>
          )}
          <CustomSolidBtn
            title={'Signup'}
            onPress={() => {
              if (validate()) {
                registerUser();
              }
            }}
          />
          <CustomBorderBtn
            title={'Login'}
            onPress={() => {
              navigation.navigate('LoginForCompany');
            }}
          />
          {loading && <Loader />}
        </ScrollView>
      ) : (
        <View style={styles.signed}>
          <Image
            source={require('../../assets/images/currect.png')}
            style={styles.icon}
          />
          <Text style={styles.successTxt}>Signup Successfully</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SignupForCompany;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
  },
  logo: {
    width: scale(100),
    height: scale(100),
    alignSelf: 'center',
    marginTop: moderateVerticalScale(20),
  },
  title: {
    fontSize: scale(25),
    fontWeight: '700',
    color: Colors.TEXT_COLOR,
    marginTop: moderateVerticalScale(20),
    alignSelf: 'center',
  },
  errorMsg: {
    color: Colors.ERROR_COLOR,
    marginLeft: moderateScale(20),
  },
  signed: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: scale(100),
    height: scale(100),
  },
  successTxt: {
    fontSize: scale(20),
    color: Colors.TEXT_COLOR,
    fontWeight: '600',
    marginTop: moderateVerticalScale(10),
  },
});
