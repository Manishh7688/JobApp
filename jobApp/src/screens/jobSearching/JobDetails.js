import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/Colors';
import {useRoute} from '@react-navigation/native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

const JobDetails = () => {
  const route = useRoute();
  console.log(route);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{route.params.data.jobTitle}</Text>
      <Text style={styles.subtitle}>
        {'Posted By:' + route.params.data.postedBy}
      </Text>
      <Text style={styles.subtitle}>
        {'Category : ' + route.params.data.category}
      </Text>
      <Text style={styles.subtitle}>
        {'PosterName : ' + route.params.data.posterName}
      </Text>
      <Text style={styles.subtitle}>
        {'Job Description : ' + route.params.data.jobDesc}
      </Text>
      <Text style={styles.subtitle}>
        {'Salary : ' + route.params.data.salary + 'LPA'}
      </Text>
      <Text style={styles.subtitle}>
        {'Skill : ' + route.params.data.skill}
      </Text>
      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.starBtn}>
          <Image
            source={require('../../assets/images/star.png')}
            style={styles.starIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyBtn}>
          <Text style={styles.applyTxt}>Apply Job</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default JobDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
  },
  title: {
    fontSize: scale(24),
    width: '90%',
    textAlign: 'center',
    fontWeight: '600',
    color: Colors.TEXT_COLOR,
    marginTop: moderateVerticalScale(20),
  },
  subtitle: {
    fontSize: scale(18),
    width: '90%',
    alignSelf: 'center',
    fontWeight: '400',
    color: '#2e2e2e',
    marginTop: moderateVerticalScale(20),
  },
  bottomView: {
    width: '96%',
    height: moderateVerticalScale(70),
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  starBtn: {
    width: '30%',
    height: moderateVerticalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: moderateScale(10),
  },
  starIcon: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
  applyBtn: {
    width: '65%',
    height: moderateVerticalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    backgroundColor: Colors.TEXT_COLOR,
  },
  applyTxt: {
    color: Colors.BG_COLOR,
    fontSize: moderateScale(18),
  },
});
