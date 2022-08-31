import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable, TouchableOpacity, TouchableHighlight,FlatList } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import {DGData} from "../dgMeter/data"
import ElecMeterItem from "./ElecMeterItem";



// ******************Main Function*************************//

const ElecMeter = ({ navigation, route }) => {

    
var data= DGData

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.scrollView}
        data={data}
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 10 }}
        renderItem={({ item }) => item.DG_No?<ElecMeterItem item={item} />:<View></View>}
      />
    

     
    

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
  }
});

export default ElecMeter;
