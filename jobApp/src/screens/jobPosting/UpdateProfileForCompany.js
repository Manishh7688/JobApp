import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from '../../utils/Colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import CustomInputText from '../../common/CustomInputText';
import CustomSolidBtn from '../../common/CustomSolidBtn';
import { useNavigation } from '@react-navigation/native';
import Loader from '../../common/Loader';
import firestore from '@react-native-firebase/firestore';
import Header from '../../common/CustomHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UpdateProfileForCompany = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [badName, setBadName] = useState('');
  const [email, setEmail] = useState('');
  const [badEmail, setBadEmail] = useState('');
  const [contact, setContact] = useState('');
  const [badContact, setBadContact] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [badCompanyName, setBadCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [badAddress, setBadAddress] = useState('');
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const RegexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const RegexMobile = /^\d+$/;
    let validName = true,
      validEmail = true,
      validContact = true,
      validCompanyName = true,
      validAddress = true;

    if (!name) {
      validName = false;
      setBadName('Please enter a name');
    } else {
      setBadName('');
    }

    if (!email) {
      validEmail = false;
      setBadEmail('Please enter an email');
    } else if (!email.match(RegexEmail)) {
      validEmail = false;
      setBadEmail('Enter a valid email');
    } else {
      setBadEmail('');
    }

    if (!contact) {
      validContact = false;
      setBadContact('Please enter a contact');
    } else if (!contact.match(RegexMobile)) {
      validContact = false;
      setBadContact('Enter a valid contact');
    } else {
      setBadContact('');
    }

    if (!companyName) {
      validCompanyName = false;
      setBadCompanyName('Please enter a company name');
    } else {
      setBadCompanyName('');
    }

    if (!address) {
      validAddress = false;
      setBadAddress('Please enter an address');
    } else {
      setBadAddress('');
    }

    return validName && validEmail && validContact && validCompanyName && validAddress;
  };

  useEffect(() => {
    getData();
  }, []);

  const updateUser = async () => {
    const id = await AsyncStorage.getItem('USER_ID');
    setLoading(true);
    try {
      await firestore()
        .collection('job_posters')
        .doc(id)
        .update({
          name,
          email,
          contact,
          companyName,
          address,
        });
      await AsyncStorage.setItem('NAME', name);
      navigation.goBack();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getData = async () => {
    const eEmail = await AsyncStorage.getItem('EMAIL');
    const snapshot = await firestore()
      .collection('job_posters')
      .where('email', '==', eEmail)
      .get();

    snapshot.forEach((doc) => {
      const data = doc.data();
      setName(data.name);
      setEmail(data.email);
      setContact(data.contact);
      setCompanyName(data.companyName);
      setAddress(data.address);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Update Profile'}
        onPress={() => navigation.goBack()}
      />
      <ScrollView>
        <CustomInputText
          title={'Name'}
          placeholder={'John Doe'}
          value={name}
          onChangeText={(text) => setName(text)}
          bad={!!badName}
        />
        {badName && <Text style={styles.errorMsg}>{badName}</Text>}
        <CustomInputText
          title={'Email'}
          placeholder={'john@gmail.com'}
          value={email}
          onChangeText={(text) => setEmail(text)}
          bad={!!badEmail}
        />
        {badEmail && <Text style={styles.errorMsg}>{badEmail}</Text>}
        <CustomInputText
          title={'Contact'}
          placeholder={'+91 7891***'}
          value={contact}
          onChangeText={(text) => setContact(text)}
          bad={!!badContact}
        />
        {badContact && <Text style={styles.errorMsg}>{badContact}</Text>}
        <CustomInputText
          title={'Company Name'}
          placeholder={'ABC Corp.'}
          value={companyName}
          onChangeText={(text) => setCompanyName(text)}
          bad={!!badCompanyName}
        />
        {badCompanyName && <Text style={styles.errorMsg}>{badCompanyName}</Text>}
        <CustomInputText
          title={'Address'}
          placeholder={'ABC'}
          value={address}
          onChangeText={(text) => setAddress(text)}
          bad={!!badAddress}
        />
        {badAddress && <Text style={styles.errorMsg}>{badAddress}</Text>}
        <CustomSolidBtn
          title={'Update'}
          onPress={validate ? updateUser : null}
        />
        {loading && <Loader />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpdateProfileForCompany;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
  },
  errorMsg: {
    color: Colors.ERROR_COLOR,
    marginLeft: moderateScale(20),
  },
});

