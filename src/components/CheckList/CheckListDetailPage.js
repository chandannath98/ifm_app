import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,

  TouchableOpacity,
  
  Dimensions,
} from "react-native";
import { FlatList } from "react-native";
import { Entypo } from '@expo/vector-icons';

import { Image } from "react-native";
import { ScrollView } from "react-native";
import { Platform } from "react-native";



// ******************Main Function*************************//

const CheckListDetails = ({ navigation, route }) => {
  const windowWidth = Dimensions.get("window").width;
  // const windowHeight = Dimensions.get('window').height;

var data=[1,2,3,4,5,6,7,8]










  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "#fff",
          margin: 15,
          borderRadius: 10,
          padding: 10,
          maxWidth:400
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "rgb(0, 172, 194)",
            fontWeight: "bold",
            paddingVertical: 2,
          }}
        >
          10/11/2020
        </Text>
        <Text style={{ color: "grey", paddingVertical: 2 }}>Fire Pump Panel</Text>
        <Text style={{ color: "grey", paddingVertical: 2 }}>
        Technican Name:- <Text style={{color:"black"}}>Prabhakar</Text>
        </Text>
        <Text style={{ color: "grey", paddingVertical: 2 }}>
        Checklist Type:- <Text style={{color:"black"}}>Daily</Text>
        </Text>
      </View>
      
      
        
<View  style={{paddingTop:10,backgroundColor:"white", flex:1}}>
    <Text style={{color:"grey",fontSize:20,padding:5,alignItems:"center",borderRadius:10,marginHorizontal:20,alignContent:"center"}}><Entypo name="list" size={20} color="grey" /> Items</Text>
<FlatList
       
        data={data}
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 10,}}
        renderItem={({ item }) => 
        
        <View style={styles.itemContainer}>
        <Text style={styles.itemHeader}>
        Hydrant And Sprinkler Jockey Pump Status
        </Text>
        <Text style={styles.itemKey }>Status :- <Text style={styles.itemValue}>Ok</Text></Text>
        <Text style={styles.itemKey }>Observation:- <Text style={styles.itemValue}>All Good</Text></Text>
        <Text style={styles.itemKey }>remark :- <Text style={styles.itemValue}>All Ok</Text></Text>
    </View> }
      />



      
</View>
      




        
    
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor:"#fff"
  },
  imageCard:{
    padding: 5,
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 5,
              marginHorizontal: 20,
              marginVertical: 10,
              paddingBottom: 20,
  },
  itemContainer:{
    backgroundColor:"#FAFAFA",
    marginHorizontal:25,
    marginVertical:5,
    padding:25,
    borderRadius:5,
    maxWidth:500
  },
  itemHeader:{
    color:"rgb(0, 172, 194)",
    fontSize:17,
    paddingVertical:5,
  },
  itemKey:{
    color:"grey",
    paddingVertical:4
    
  },
  itemValue:{
    color:"black"
  }

});
export default CheckListDetails;
