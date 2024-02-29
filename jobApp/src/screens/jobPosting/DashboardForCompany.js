import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,

} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../utils/Colors';
import {moderateVerticalScale, scale} from 'react-native-size-matters';
import MyJobs from './tabs/MyJobs';
import SearchCondidate from './tabs/SearchCondidate';
import Chats from './tabs/Chats';
import Profile from './tabs/Profile';
import {useNavigation} from '@react-navigation/native';

const DashboardForCompany = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      {selected == 0 ? (
        <MyJobs />
      ) : selected == 1 ? (
        <SearchCondidate />
      ) : selected == 3 ? (
        <Chats />
      ) : (
        <Profile onJobClick={()=>{
          setSelected(0)
        }}/>
      )}
      <View style={styles.bottomView}>
        <TouchableOpacity
          style={[
            styles.bottomTab,
            {borderTopWidth: selected === 0 ? 3 : 0, borderColor: 'red'},
          ]}
          onPress={() => {
            setSelected(0);
          }}>
          <Image
            source={require('../../assets/images/home1.png')}
            style={[
              styles.tabIcon,
              {tintColor: selected == 0 ? 'red' : '#9e9e9e'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.bottomTab,
            {borderTopWidth: selected === 1 ? 3 : 0, borderColor: 'red'},
          ]}
          onPress={() => {
            setSelected(1);
          }}>
          <Image
            source={require('../../assets/images/search-user.png')}
            style={[
              styles.tabIcon,
              {tintColor: selected == 1 ? 'red' : '#9e9e9e'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.bottomTab,
            {borderTopWidth: selected === 2 ? 3 : 0, borderColor: 'red'},
          ]}
          onPress={() => {
            navigation.navigate('AddJob');
          }}>
          <Image
            source={require('../../assets/images/addition.png')}
            style={[
              styles.tabIcon,
              {tintColor: selected == 2 ? 'red' : '#9e9e9e'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.bottomTab,
            {borderTopWidth: selected === 3 ? 3 : 0, borderColor: 'red'},
          ]}
          onPress={() => {
            setSelected(3);
          }}>
          <Image
            source={require('../../assets/images/chat1.png')}
            style={[
              styles.tabIcon,
              {tintColor: selected == 3 ? 'red' : '#9e9e9e'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.bottomTab,
            {borderTopWidth: selected === 4 ? 3 : 0, borderColor: 'red'},
          ]}
          onPress={() => {
            setSelected(4);
          }}>
          <Image
            source={require('../../assets/images/user.png')}
            style={[
              styles.tabIcon,
              {tintColor: selected == 4 ? 'red' : '#9e9e9e'},
            ]}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DashboardForCompany;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
  },
  bottomView: {
    width: '100%',
    height: moderateVerticalScale(70),
    backgroundColor: Colors.BG_COLOR,
    shadowColor: 'rgba(0,0,0,.5)',
    shadowOffset: {x: 0, y: 1},
    shadowOpacity: 0.6,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomTab: {
    width: '20%',
    heigth: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: scale(24),
    height: scale(24),
    marginTop: moderateVerticalScale(10),
  },
});
