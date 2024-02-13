import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../utils/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import CustomInputText from '../../../common/CustomInputText';
import CustomSolidBtn from '../../../common/CustomSolidBtn';
import CustomDropdown from '../../../common/CustomDropdown';
import {useNavigation} from '@react-navigation/native';
import {profiles} from '../../../utils/Profiles';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../../common/Loader';
const AddJob = () => {
  const navigation = useNavigation();
  const [jobTitle, setJobTitle] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [experience, setExperience] = useState('');
  const [salary, setSalary] = useState('');
  const [company, setCompany] = useState('');
  const [categoryModal, setCategoryModal] = useState(false);
  const [skillModal, setSkillModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('select category');
  const [selectedSkill, setSelectedSkill] = useState('select skill');
  const [loading, setLoading] = useState(false);
  const postJob = async () => {
    let id = await AsyncStorage.getItem('USER_ID');
    let name = await AsyncStorage.getItem('NAME');
    setLoading(true);
    firestore()
      .collection('jobs')
      .add({
        postedBy: id,
        posterName: name,
        jobTitle: jobTitle,
        jobDesc,
        experience,
        salary,
        company,
        skill: selectedSkill,
        category: profiles[selectedCategory].category,
      })
      .then(() => {
        setLoading(false);
        navigation.goBack();
      })
      .catch(e => {
        setLoading(false);
        console.log('error', e);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../../../assets/images/wrong.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Post Job</Text>
      </View>
      <CustomInputText
        title={'Job title'}
        placeholder={'ex. web development'}
        value={jobTitle}
        onChangeText={text => setJobTitle(text)}
      />
      <CustomInputText
        title={'Job Description'}
        placeholder={'development'}
        value={jobDesc}
        onChangeText={text => setJobDesc(text)}
      />
      <CustomDropdown
        title={'category'}
        placeholder={
          selectedCategory == 'select category'
            ? 'select category'
            : profiles[selectedCategory].category
        }
        value={jobDesc}
        onChangeText={text => setJobDesc(text)}
        onPress={() => {
          setCategoryModal(true);
        }}
      />
      <CustomDropdown
        value={jobDesc}
        onChangeText={text => setJobDesc(text)}
        title={'Skills'}
        placeholder={selectedSkill}
        onPress={() => {
          setSkillModal(true);
        }}
      />
      <CustomInputText
        title={'Experience'}
        placeholder={'ex.required experience in years'}
        value={experience}
        onChangeText={text => setExperience(text)}
      />
      <CustomInputText
        title={'package'}
        placeholder={'ex.10 Lpa'}
        value={salary}
        onChangeText={text => setSalary(text)}
      />
      <CustomInputText
        title={'company'}
        placeholder={'ex.google'}
        value={company}
        onChangeText={text => setCompany(text)}
      />

      <CustomSolidBtn
        title={'Save Post'}
        onPress={() => {
          postJob();
        }}
      />

      <Modal
        visible={categoryModal}
        animationType="fade"
        transparent={true}
        style={{flex: 1}}>
        <View style={styles.modalView}>
          <View style={styles.listing}>
            <Text style={styles.textCtg}>Select category</Text>
            <FlatList
              data={profiles}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={styles.profileItem}
                    onPress={() => {
                      setSelectedCategory(index);
                      setCategoryModal(false);
                    }}>
                    <Text>{item.category}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </Modal>
      <Modal
        visible={skillModal}
        animationType="fade"
        transparent={true}
        style={{flex: 1}}>
        <View style={styles.modalView}>
          <View style={styles.listing}>
            <Text style={styles.textCtg}>Select skill</Text>
            <FlatList
              data={
                selectedCategory == 'select category'
                  ? profiles[0].keywords
                  : profiles[selectedCategory].keywords
              }
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={styles.profileItem}
                    onPress={() => {
                      setSelectedSkill(item[0]);
                      setSkillModal(false);
                    }}>
                    <Text>{item[0]}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </Modal>
      {loading && <Loader />}
    </SafeAreaView>
  );
};

export default AddJob;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
  },
  header: {
    width: '100%',
    height: verticalScale(45),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(20),
  },
  icon: {
    width: scale(24),
    height: scale(24),
  },
  title: {
    fontSize: scale(18),
    fontWeight: '600',
    color: Colors.TEXT_COLOR,
    marginLeft: moderateScale(10),
  },
  modalView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listing: {
    width: '90%',
    height: '80%',
    borderRadius: moderateScale(10),
    backgroundColor: Colors.BG_COLOR,
  },
  profileItem: {
    width: '90%',
    height: verticalScale(40),
    justifyContent: 'center',
    paddingLeft: moderateScale(20),
    borderBottomWidth: 0.4,
    alignItems: 'flex-start',
  },
  textCtg: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: verticalScale(10),
    color: Colors.TEXT_COLOR,
    marginLeft: moderateScale(20),
  },
});
