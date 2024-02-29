import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../../utils/Colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileOptionItem from '../../../common/ProfileOptionItem';

const Profile = ({onJobClick}) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [name, setName] = useState('');
  const [jobs, setJobs] = useState('');
  const [image, setImage] = useState('');
  
  const getData = async () => {
    setName(await AsyncStorage.getItem('NAME'));
    setJobs(await AsyncStorage.getItem('JOBS'));
    const img = await AsyncStorage.getItem('PROFILE_IMAGE');
    if (img != null) {
      setImage(img);
    }
  };
  useEffect(() => {
    getData();
  }, [isFocused]);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>FindMyJob</Text>
      <TouchableOpacity>
        {image != '' ? (
          <Image source={{uri: image}} style={styles.profileImg} />
        ) : (
          <Image
            source={require('../../../assets/images/profile.png')}
            style={styles.profileImg}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.title}>{name}</Text>
      <Text
        style={styles.changeText}
        onPress={() => {
          navigation.navigate('UpdateProfileForCompany');
        }}>
        Update profile{' '}
      </Text>
      <Text
        style={styles.changeText}
        onPress={() => {
          navigation.navigate('ChangeProfilePicForCompany');
        }}>
        Change profile picture
      </Text>
      <View style={styles.options}>
        <ProfileOptionItem
          title={`MyJobs (${jobs})`}
          icon={require('../../../assets/images/myjob.png')}
          onClick={onJobClick}
        />
        <ProfileOptionItem
          title={'Contact Us'}
          icon={require('../../../assets/images/contact.png')}
          onClick={() => {}}
        />
        <ProfileOptionItem
          title={'App Theme'}
          icon={require('../../../assets/images/theme.png')}
          onClick={() => {}}
        />
        <ProfileOptionItem
          title={'Logout'}
          icon={require('../../../assets/images/logout.png')}
          onClick={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
  },
  heading: {
    fontSize: moderateScale(20),
    marginLeft: moderateScale(10),
    color: Colors.TEXT_COLOR,
    fontWeight: '600',
  },
  profileImg: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
    alignSelf: 'center',
    marginTop: verticalScale(50),
  },
  changeText: {
    alignSelf: 'center',
    marginTop: verticalScale(10),
    color: Colors.TEXT_COLOR,
    fontSize: scale(16),
    textDecorationLine: 'underline',
  },
  title: {
    fontSize: scale(20),
    fontWeight: '600',
    color: Colors.TEXT_COLOR,
    alignSelf: 'center',
    marginTop: verticalScale(10),
  },
  options: {
    marginTop: moderateVerticalScale(40),
  },
});
