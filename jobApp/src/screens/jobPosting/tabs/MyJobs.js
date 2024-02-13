import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../../utils/Colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
const MyJobs = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJOb();
  }, [isFocused]);

  const getJOb = async () => {
    let id = await AsyncStorage.getItem('USER_ID');
    firestore()
      .collection('jobs')
      .where('postedBy', '==', id)
      .get()
      .then(data => {
        let temp = [];
        data.docs.forEach(item => {
          temp.push({...item.data(), id: item.id});
        });
        setJobs(temp);
      });
  };

  const deleteJob = async id => {
    firestore()
      .collection('jobs')
      .doc(id)
      .delete()
      .then(() => {
        getJOb();
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>MyJobs</Text>
      {jobs.length > 0 ? (
        <FlatList
          data={jobs}
          renderItem={({item, index}) => {
            return (
              <View style={styles.jobItems}>
                <Text style={styles.title}>{item.jobTitle}</Text>
                <Text style={styles.desc}>{item.jobDesc}</Text>
                <Text style={styles.salary}>
                  {'Salary:' + item.salary + 'Lpa'}
                </Text>
                <Text style={styles.salary}>{'Category:' + item.category}</Text>
                <Text style={styles.salary}>{'Skill:' + item.skill}</Text>
                <View style={styles.bottomView}>
                  <TouchableOpacity
                    style={styles.editBtn}
                    onPress={() => {
                      navigation.navigate('EditJob', {data: item});
                    }}>
                    <Text>Edit job_poster</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.deleteBtn}
                    onPress={() => {
                      deleteJob(item.id);
                    }}>
                    <Text style={{color: 'red'}}>Delete job</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      ) : (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>Empty Job</Text>
        </View>
      )}
    </View>
  );
};

export default MyJobs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
  },
  heading: {
    fontSize: scale(25),
    fontWeight: '600',
    color: Colors.TEXT_COLOR,
    marginLeft: scale(20),
  },
  jobItems: {
    width: '90%',
    marginTop: moderateScale(20),
    backgroundColor: '#f2f2f2',
    borderRadius: moderateScale(20),
    alignSelf: 'center',
    padding: moderateScale(10),
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: '600',
    color: Colors.TEXT_COLOR,
  },
  desc: {
    fontSize: moderateScale(16),
    color: Colors.TEXT_COLOR,
    marginTop: moderateScale(5),
  },
  salary: {
    fontSize: moderateScale(14),
    marginTop: moderateScale(5),
    color: Colors.TEXT_COLOR,
    fontWeight: '600',
  },
  bottomView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginBottom: moderateScale(20),
    marginTop: moderateVerticalScale(10),
  },
  editBtn: {
    width: '40%',
    height: moderateScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    borderWidth: 1,
  },
  deleteBtn: {
    width: '40%',
    height: moderateScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: 'red',
  },
  empty: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: moderateScale(20),
    fontWeight: '600',
    color: Colors.TEXT_COLOR,
  },
});
