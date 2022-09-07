
import React, { useState,useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native"
import { toTimeString } from '../../components/Visitors_View/VisitorsItem';
import { DateFormet } from '../../CustomFunctions/CustomFunctions';
import { AntDesign } from "@expo/vector-icons";
import { BottomSheet } from "react-native-btr";
import { TextInput } from 'react-native-gesture-handler';
import { Rating, AirbnbRating } from "react-native-ratings";
import { Dimensions } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import RBSheet from "react-native-raw-bottom-sheet";







// *****************Main Funtion*******************

export default function PostDetail({ navigation, route }) {
  
  const windowWidth = Dimensions.get("window").width;
  const refRBSheet = useRef();
 
    
  
  
  
const item= route.params.item




const [Time, setTime] = useState({
  nativeEvent: {
    timestamp: new Date() ,
  },
});

var timeValue = new Date(Time.nativeEvent.timestamp);
  var hours = timeValue.getHours();
  var minutes = timeValue.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var timeString = hours + ":" + minutes + " " + ampm;

  const [showTimePicker, setShowTimePicker] = useState(false);









  


// **************return Funtion Start Here***************





  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>

{showTimePicker && (
        <DateTimePicker
          style={{ width: 1000, height: 50, backgroundColor: "red" }}
          value={Time.nativeEvent.timestamp?timeValue:new Date()}
          mode="time"
          // is24Hour={true}
          display="default"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
            // ... You can check the source to find the other keys.
          }}
          onChange={(d) => {
            [setShowTimePicker(false), d.nativeEvent.timestamp?setTime(d):console.log(d)];
          }}
        />
      )}





<RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={400}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(5, 5, 5, 0.32)",
            borderTopEndRadius:15
          },
          draggableIcon: {
            backgroundColor: "black",
            width:70
            
          },
          container:{
            borderTopEndRadius:15,
            borderTopStartRadius:15
          }
        }}
      >

        <View style={styles.bottomNavigationView}>
          <View
            style={{
              flex: 1,
              // flexDirection: 'column',
              // justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                textAlign: "center",
                padding: 20,
                fontSize: 20,
                color: "rgb(0, 172, 194)",
                // textDecorationLine: "underline",
                fontWeight:"bold"
              }}
            >
              Mark Exit
            </Text>
            <Pressable style={{position:"absolute", top:5,right:10}} onPress={()=>refRBSheet.current.close()}>
            <AntDesign  name="close" size={24} color="grey" />
            </Pressable>
            <View>
              {/* "Category_of_the_issue": "Major",
        "Responsable_Department": "Maintenance",
        "Description_of_the_issue": "Test",
        "Assigned_To": "Gulzar",
        "Issue_Resolved?": "Yes",
        "Issue_Resolved_date_and_Time": "04-02-2022_18:43:00" */}

              <View>
                <View style={styles.modelInnerDetailContainer}>
                  <Text style={[styles.modelDetailText, styles.modelDetailKey]}>
                    {" "}
                    Time Out
                  </Text>

                  
                    
                    <Pressable
          onPress={() => (windowWidth < 500 ? setShowTimePicker(true) : "")}
          style={[styles.modelDetailText,styles.timeInput]}
        >
          
          
            <AntDesign name="clockcircleo" size={20} color="red" />

           
              <Text style={styles.timeFormet}>
                {toTimeString(Time.nativeEvent.timestamp)}
              </Text>
            
          
        </Pressable>

                  
                </View>
                <View style={styles.modelInnerDetailContainer}>
                 
                  <  AirbnbRating style={[styles.modelDetailText, styles.modelDetailValue]} defaultRating={5} />
                  
                </View>

              </View>

              <Pressable style={styles.modelSubmitBtn} onPress={()=>refRBSheet.current.close()} >
                <Text
                  style={{ textAlign: "center", color: "white", fontSize: 20 }}
                >
                  Submit
                  
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </RBSheet>














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
          <View style={{height:200}}></View>
        </>
      </ScrollView>
      <MaterialCommunityIcons name="circle-edit-outline" style={styles.editButton}  size={55} color="black"  onPress={()=>{navigation.navigate("VisitorsForm", {
                    item: item,
                  })}}/>
      <Pressable onPress={()=>refRBSheet.current.open()} style={styles.visitBtn}>
                <Text
                  style={{ textAlign: "center", color: "white", fontSize: 20 }}
                >
                  Mark Exit{" "}
                  <AntDesign name="arrowright" size={24} color="white" />
                </Text>
              </Pressable>
              
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
  visitBtn: {
    position:"absolute",
    bottom:10,
    left:10,
    marginHorizontal: 5,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 25,
    // textAlign:"center",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },


  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: 500,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  modelInnerDetailContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 10,
    paddingVertical: 15,
  },
  modelDetailText: {
    flex: 6,
    fontSize:20,
    paddingHorizontal: 10,
    fontSize: 15,
    textAlign:"center",
    justifyContent:"center"
  },
  modelDetailKey: {
    color: "grey",
    fontSize:20
  },
  modelDetailValue: {
    fontWeight: "bold",
  },

  modelSubmitBtn: {
    // position:"absolute",
    // bottom:10,
    // left:10,
    marginHorizontal: 5,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 25,
    // textAlign:"center",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  timeInput:{
    display:"flex",
    flexDirection:"row",
    borderColor:"red",
    borderWidth:1,
    paddingVertical:8,
    borderRadius:7
  },
  timeFormet:{
    paddingHorizontal:10,
    color:"red",
    fontSize:20
  }




  
});
 