import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";
import { useState } from "react";
import { setSelectedVisitorsItems,setVisitorsSearchValue } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { useEffect } from "react";
import { render } from "react-dom";







// ***************Main Function***************
 function HeaderforComponents(props) {
  

  const navigation = useNavigation();
const [searchvalue, setSearchvalue] = useState(props.searchvalue);
  // *************header item**************
const [searchInputVisible, setSearchInputVisible] = useState(false);
const refTextInput = useRef();

useEffect(() => {
  if(props.searchInputVisible){
    refTextInput.current.focus()
  }
 }, []);

  




 



  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
      }}
    >
      {/* <View
      style={{ flex: 2, alignSelf: "center", paddingHorizontal: 1 ,display:"flex",flexDirection:"row",maxWidth:70}}
      > */}

      
      <Feather
        onPress={() => navigation.openDrawer()}
        style={{ flex: 1, alignSelf: "center", paddingHorizontal: 1}}
        name="menu"
        size={25}
        color="rgb(0, 172, 194)"
      />
{/* </View> */}
      {/* *********First Line********* */}



      
      {!props.searchInputVisible?
      <ScrollView
      horizontal={true}
        style={{
          display: "flex",
          flexDirection: "row",
          margin: 15,
          marginHorizontal: 2,
          flex: 20,
          minWidth:300
          // justifyContent:"space-between"
        }}
      >
        {props.item.map((i, index) => {
          return <View key={index}>{i}</View>;
        })}
      </ScrollView>:
      
     




      <View
     
        style={{
          display:"flex",
          flexDirection:"row",
          
          margin: 15,
          // marginHorizontal: 20,
          flex: 10,
          minWidth:5,
          
        }}
      >
    <TextInput
    
     ref={refTextInput} value={searchvalue} onChangeText={(e)=>setSearchvalue(e)} style={{color:"rgb(0, 172, 194)",paddingHorizontal:5,paddingVertical:3,borderColor:"rgb(0, 172, 194)",
        borderWidth:0.3,
        borderRadius:3,minWidth:200}}/>
     
      <Entypo onPress={()=>[props.setSearchvalue(""),props.setSearchvalue(""),props.setSearchInputVisible(false)]}  style={{alignSelf:"center",  paddingHorizontal: 2,marginHorizontal:2 }} name="cross" size={24} color="rgb(0, 172, 194)" />


      <TouchableOpacity onPress={()=>[props.setSearchvalue(searchvalue)]} style={{alignSelf:"center",  paddingHorizontal: 4,marginHorizontal:2,backgroundColor:"rgb(0, 172, 194)",paddingVertical:4,borderRadius:3 }}>
        <Text style={{color:"white"}}>Search</Text>
      </TouchableOpacity>


      </View>
     }
      <AntDesign onPress={()=>[props.setSearchInputVisible(true)]} style={{ flex: 1, alignSelf: "center", paddingHorizontal: 2,marginHorizontal:2 }} name="search1" size={24} color="rgb(0, 172, 194)" />


    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,

    // backgroundColor: "rgb(0, 172, 194)",
  },

  addButton: {
    color: "rgb(0, 172, 194)",
    flex: 1,
    position: "absolute",
    justifyContent: "flex-end",
    bottom: 20,
    right: 20,
  },
});





export default React.memo(HeaderforComponents)