import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";



// ******************Main Function*************************//

const LTMeterItem = ( props ) => {
 
    const navigation = useNavigation();


// var item=props.item

  return (
    
      
      <View
        style={[
           styles.listing_container,
          styles.shadowProp,
        ]}
      >
        {/* {selectedVisitorsItems.includes(props.item.visitor_name) ? (
          <AntDesign name="checkcircle" size={15} color="rgb(0, 172, 194)" />
        ) : (
          <Text></Text>
        )} */}

        <TouchableOpacity
          style={[styles.listing_1container]}
          onPress={
            () => {
                  navigation.navigate("LT Detail Page", {
                    item: props.item,
                  });
                }
          }
        >
          <View style={[styles.listing_inline_first_row,styles.infomationLine]}>
            <Text style={styles.listing_top_line}>
              {" "}
              TR No.-1
            </Text>
            <Text> 01/05/2022 </Text>
          </View>


          <View style={styles.listing_inline_second_row}>
            {/* <Text style={styles.listing_second_line}>Time : <Text style={styles.infoValue}> {item.DG_Start_Time}</Text></Text> */}
            <Text style={styles.listing_second_line}>Time : <Text style={styles.infoValue}> 10:10 AM</Text></Text>
            
          </View>

          <View style={styles.listing_inline_second_row}>
            <Text style={styles.listing_second_line}>KWH Consumed : <Text style={styles.infoValue}> 1250</Text></Text>
            <Text style={styles.listing_second_line}>KVAH Consumed : <Text style={styles.infoValue}> 1532</Text></Text>
            
          </View>



          
        </TouchableOpacity>

        
      </View>

      


   
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
  listing_inline_second_row:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    paddingVertical:5
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
});

export default LTMeterItem;