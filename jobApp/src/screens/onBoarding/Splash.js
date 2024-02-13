import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {Colors} from '../../utils/Colors';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      getData()
    }, 2000);
  }, []);
  const getData = async () => {
    const Type = await AsyncStorage.getItem('USER_TYPE');
    console.log("login usertype====",Type);
    
      if (Type == 'company') {
        navigation.navigate('DashboardForCompany');
      }
     else {
      navigation.navigate('SelectUser');
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/job.jpg')}
        style={styles.image}
      />
      <Text style={styles.text}>FindMyJob</Text>
      <Text style={styles.bottom}>Post & Find jobs at one place</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BG_COLOR,
  },
  image: {
    width: scale(200),
    height: verticalScale(200),
  },
  text: {
    fontSize: moderateScale(35),
    fontWeight: '600',
    color: Colors.TEXT_COLOR,
  },
  bottom: {
    position: 'absolute',
    fontSize: moderateScale(16),
    fontStyle: 'italic',
    bottom: moderateVerticalScale(50),
  },
});
