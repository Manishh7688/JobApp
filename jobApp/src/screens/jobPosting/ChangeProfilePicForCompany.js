import {View, Text, StyleSheet, SafeAreaView, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../utils/Colors';
import Header from '../../common/CustomHeader';
import {scale, verticalScale} from 'react-native-size-matters';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CustomBorderBtn from '../../common/CustomBorderBtn';
import CustomSolidBtn from '../../common/CustomSolidBtn';
import { useNavigation } from '@react-navigation/native';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import Loader from '../../common/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChangeProfilePicForCompany = () => {
    const navigation = useNavigation()
  const [imageData, setImageData] = useState(null);
  const [loading,setLoading] = useState(false)
  const openGallary = async () => {
    const res = await launchImageLibrary({mediaType: 'photo'});
    if (!res.didCancel) {
      setImageData(res);
    }
  };
  const openCamera = async () => {
    const res = await launchCamera({mediaType: 'photo'});
    if (!res.didCancel) {
      setImageData(res);
    }
  };

  const uploadPic=async()=>{
    setLoading(true)
    const id = await AsyncStorage.getItem('USER_ID');
    const reference = storage().ref(imageData.assets[0].fileName);
    const pathToFile = imageData.assets[0].uri;
    await reference.putFile(pathToFile);
    const url = await reference.getDownloadURL();
   
    try {
        await firestore()
          .collection('job_posters')
          .doc(id)
          .update({
            profileImage:url
          });
        await AsyncStorage.setItem('PROFILE_IMAGE', url);
        navigation.goBack();
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Change Profile'} onPress={()=>{navigation.goBack()}} />
      {imageData != null ? (
        <Image source={{uri: imageData.assets[0].uri}} style={styles.image} />
      ) : (
        <Image
          source={require('../../assets/images/profile.png')}
          style={styles.image}
        />
      )}
      
      
      <CustomBorderBtn title={'Pick Image from Gallary'} onPress={() => {
          openGallary();
        }}/>
     
        {imageData!=null&&<CustomSolidBtn title={'Upload picture'} onPress={() => {
          uploadPic();
        }}/>}
        
    {loading && <Loader />}
    </SafeAreaView>
  );
};

export default ChangeProfilePicForCompany;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
  },
  image: {
    width: scale(150),
    height: scale(150),
    alignSelf: 'center',
    marginTop: verticalScale(15),
    resizeMode: 'contain',
    borderRadius: scale(150),
  },
  
});
