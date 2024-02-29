import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../utils/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore'

const SearchJob = () => {
  const navigation = useNavigation();
  const [searched, setSearched] = useState('');
  const [job, setJob] = useState([])


  const getData = (text) =>{
    firestore().collection('jobs').where('jobTitle',"==",text)
    .get()
    .then((res)=>{
        let temp = []
        res.docs.forEach((item)=>{
            temp.push({...item.data(),id: item.id})
        })
        setJob(temp)
    })
  }

 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchView}>
        <View style={styles.innerView}>
          <Image
            source={require('../../assets/images/search.png')}
            style={styles.inputicon}
          />
          <TextInput
            style={styles.searchText}
            placeholderTextColor={'#2e2e2e'}
            placeholder={'Search job here...'}
            value={searched}
            onChangeText={text =>{
                setSearched(text)
                getData(text)
            }
                }
          />
        </View>
        {searched != '' && (
          <TouchableOpacity onPress={()=>{
            setSearched('')
          }}>
            <Image
              source={require('../../assets/images/wrong.png')}
              style={[styles.inputicon, {marginRight: scale(10)}]}
            />
          </TouchableOpacity>
        )}
      </View>
      <FlatList 
      data={job}
      renderItem={({item, index})=>{
        return(
            <TouchableOpacity style={styles.jobItem} onPress={()=>{
                navigation.navigate('JobDetails', { data:item})
            }}>
                <View style={styles.topView}>
                <Text style={styles.title}>{item.jobTitle}</Text>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/star.png')} style={styles.starIcon}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.itemText}>{"PosterBy : "+item.postedBy}</Text>
                <Text style={styles.itemText}>{"catagory : "+item.category}</Text>
            </TouchableOpacity>
        )
      }}
      />
    </SafeAreaView>
  );
};

export default SearchJob;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
  },
  searchView: {
    width: '85%',
    height: verticalScale(40),
    borderWidth: 0.4,
    alignSelf: 'center',
    borderRadius: moderateScale(20),
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: verticalScale(10),
    justifyContent: 'space-between',
  },
  inputicon: {
    width: scale(24),
    height: scale(24),
    marginLeft: moderateScale(10),
  },
  searchText: {
    fontSize: scale(16),
    color: Colors.TEXT_COLOR,
    marginLeft: moderateScale(10),
    width: '70%',
  },
  innerView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  jobItem:{
    width: '90%',
    height:verticalScale(100),
    alignSelf:'center',
    borderRadius:moderateScale(10),
    marginTop: verticalScale(10),
    backgroundColor:"#eeeeee"
  },
  topView:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'90%',
    alignItems:'center',
    alignSelf:'center',
    marginTop:verticalScale(5)
  },
  starIcon:{
    width:scale(24),
    height:scale(24),
  },
  title:{
    fontSize:scale(18),
    fontWeight:'600',
    color:Colors.TEXT_COLOR,
    width:'80%'
  },
  itemText:{
    width:'90%',
    alignItems:'center',
    alignSelf:'center',
    marginTop:verticalScale(5),
    fontSize:scale(14),
    color:'#2e2e2e'
  }
});
