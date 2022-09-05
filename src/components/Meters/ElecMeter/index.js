import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable, TouchableOpacity, TouchableHighlight,FlatList } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import ElecMeterItem from "./ElecMeterItem";
import { ElecData } from "./elecData";
import { Button } from "native-base";



// ******************Main Function*************************//



const ElecMeter = ({ navigation, route }) => {
const [editMode, setEditMode] = useState(false);
    

const flatList = useRef();
const moveToTop = () => flatList.current.scrollToIndex({ index: 0 });
var data= ElecData


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      ref={flatList}
        style={styles.scrollView}
        data={data}
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 10 }}
        renderItem={({ item }) => <ElecMeterItem item={item} editMode={editMode}/>}
      />
    
   {editMode?
   <AntDesign name="checkcircle" style={styles.editButton}  size={55} onPress={()=>setEditMode(false)}  color="black" />:
    <MaterialCommunityIcons name="circle-edit-outline" style={styles.editButton}  size={55} color="black"  onPress={()=>setEditMode(true)}/>
     
    }

<FontAwesome onPress={moveToTop} style={{position:"absolute",bottom:20,left:10}} name="angle-up" size={40} color="#e0e0de" />
  

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  listing_1container: {
    flex: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // backgroundColor:"white",
  },
  

  listing_container: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: 10,

    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius:15,
    marginVertical: 2,
    // borderColor:"grey",
  },

  

  shadowProp: {
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },


  listing_inline_first_row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listing_top_line: {
    fontSize: 17,
    fontWeight:"bold"
    // fontFamily: 'monospace'
  },
  listing_second_line: {
    color: "grey",
  },
 
  infomationLine:{
    paddingVertical:5
  },
  infoValue:{
    color:"rgb(0, 172, 194)"
  }
  ,addButton:{
    position:"absolute",
    right:5,
    bottom:15,
    backgroundColor:"white",
    borderRadius:50
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

export default ElecMeter;
