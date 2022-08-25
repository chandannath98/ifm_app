
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native"
import { toTimeString } from '../../components/Visitors_View/VisitorsItem';
import { DateFormet } from '../../CustomFunctions/CustomFunctions';








export default function PostDetail({ navigation, route }) {
  
  // const navigation= useNavigation();
  
const item= route.params.item

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <>
          <View>
            <Image
              style={styles.coverImage}
              
            />
          </View>
          <View style={styles.profileContainer}>
            {/* Profile Details */}
            <View>
              {/* Profile Image */}
              <View style={styles.profileImageView}>
                <View style={styles.profileImage}>

              <Ionicons  name="person-circle" size={100} color="black" />
                </View>
              {/* <Ionicons name="person-circle" size={24} color="black" /> */}
              </View>
              {/* Profile Name and Bio */}
              <View style={styles.nameAndBioView}>
                <Text style={styles.userFullName}>{item.visitor_name}</Text>
                <Text style={styles.userBio}>{item.phone}</Text>
              </View>
              {/* Posts/Followers/Following View */}
              <View style={styles.countsView}>
                <View style={styles.countView}>
                  <Text style={styles.countNum}>{DateFormet(item.date)}</Text>
                  <Text style={styles.countText}>Date</Text>
                </View>
                <View style={styles.countView}>
                  <Text style={styles.countNum}>{toTimeString(item.time_in)}</Text>
                  <Text style={styles.countText}>Time In</Text>
                </View>
                <View style={styles.countView}>
                  <Text style={styles.countNum}>{toTimeString(item.time_out)}</Text>
                  <Text style={styles.countText}>Time Out</Text>
                </View>
              </View>
              
              
              {/* Mutual Followed By Text */}
              <View style={{ paddingHorizontal: 25, marginTop: 10 }}>
                <Text style={{  fontSize: 16 }}>
                  
                  Ratings : {item.rating} 
                  
                </Text>
              </View>
            </View>



            <View style={{alignItems:"center"}}>

            

            <View style={styles.otherDetailsContainer}>
              
              <View style={styles.otherDetails}>
                <Text style={styles.OtherDetailKey}>Whome To Meet  </Text>
                <Text style={styles.OtherDetailValue}>Tarun</Text>
              </View>

              
              
              <View style={styles.otherDetails}>
                <Text style={styles.OtherDetailKey}>Purpose  </Text>
                <Text style={styles.OtherDetailValue}>Sales Enquary</Text>
              </View>

              
              
              <View style={styles.otherDetails}>
                <Text  style={styles.OtherDetailKey}>Detailed Reason to Visit  </Text>
                <Text style={styles.OtherDetailValue}>Sales Enquary</Text>
              </View>

              
              
              <View style={styles.otherDetails}>
                <Text  style={styles.OtherDetailKey}>Comment  </Text>
                <Text style={styles.OtherDetailValue}>No Comment</Text>
              </View>

              
            </View>
            </View>
            
          </View>
        </>
      </ScrollView>
      <MaterialCommunityIcons name="circle-edit-outline" style={styles.editButton}  size={55} color="black"  onPress={()=>{navigation.navigate("VisitorsForm", {
                    item: item,
                  })}}/>
      
    </View>
  );
}



const styles = StyleSheet.create({
  coverImage: {paddingTop:5, height: 200, width: '100%',backgroundColor:"rgb(0, 172, 194)" },
  profileContainer: {
    // height: 1000,
    backgroundColor: '#fff',
    marginTop: -50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  profileImageView: { alignItems: 'center', marginTop: -50,alignItems:"center", alignContent:"center",justifyContent:"center" },
  profileImage: {
    // width: 95,
    // height: 100,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#fff',
    backgroundColor:"white",
    alignItems:"center"
  },
  nameAndBioView: { alignItems: 'center', marginTop: 10 },
  userFullName: {  fontSize: 26 },
  userBio: {
   
    fontSize: 18,
    color: '#333',
    marginTop: 4,
    
  },
  countsView: { 
    borderRadius:6,
    paddingVertical:9,
    marginHorizontal:20,
    flexDirection: 'row', marginTop: 50,

  
 
 
},


  countView: { flex: 1, alignItems: 'center' },
  countNum: {  fontSize: 20 },
  countText: {  fontSize: 18, color: 'grey' },
  


  otherDetailsContainer:{
    
    margin:20,
    
    padding:10,
    backgroundColor:"#fff",
   
    borderRadius: 8,
   
    // elevation: 4,
    shadowColor: 'grey',
    justifyContent:"space-around",
    // alignItems:"center",
    width:"90%",
    // shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 9,
},
shadowOpacity: 0.50,
shadowRadius: 12.35,

elevation: 5,
  },
  otherDetails:{
    marginVertical:5,
    paddingVertical:7,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
  },
  OtherDetailKey:{
    // display:"flex",
    flex:2,
    flexWrap:"wrap",
    color:"grey",
    alignItems:"center",
    alignContent:"center"
    // flexDirection:"flex-start"
  },
  OtherDetailValue:{
    // display:"flex",
    flex:3,
    flexWrap:"wrap",
    alignItems:"center",
    alignContent:"center"
  },
  editButton:{
    color:"rgb(0, 172, 194)",
    flex: 1,
    position:"absolute",
    justifyContent: 'flex-end',
    bottom:20,
    right:20
  },
  
});
 