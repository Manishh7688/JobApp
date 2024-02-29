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
import {scale, verticalScale} from 'react-native-size-matters';
import Home from './tabs/Home';
import Applies from './tabs/Applies';
import Inbox from './tabs/Inbox';
import Profile from './tabs/Profile';

const DrawerScreen = () => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      {currentTab == 0 ? (
        <Home />
      ) : currentTab == 1 ? (
        <Applies />
      ) : currentTab == 2 ? (
        <Inbox />
      ) : (
        <Profile />
      )}
      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setCurrentTab(0)}>
          <Image
            source={
              currentTab == 0
                ? require('../../assets/images/home1.png')
                : require('../../assets/images/home.png')
            }
            style={styles.tabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setCurrentTab(1)}>
          <Image
            source={
              currentTab == 1
                ? require('../../assets/images/send1.png')
                : require('../../assets/images/send.png')
            }
            style={styles.tabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setCurrentTab(2)}>
          <Image
            source={
              currentTab == 2
                ? require('../../assets/images/chat1.png')
                : require('../../assets/images/chat.png')
            }
            style={styles.tabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setCurrentTab(3)}>
          <Image
            source={
              currentTab == 3
                ? require('../../assets/images/user.png')
                : require('../../assets/images/user1.png')
            }
            style={styles.tabIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DrawerScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
  },
  bottomView: {
    width: '100%',
    height: verticalScale(60),
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderColor: '#9e9e9e',
  },
  bottomTab: {
    width: '25%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    width: scale(25),
    height: scale(25),
    resizeMode: 'contain',
  },
});
