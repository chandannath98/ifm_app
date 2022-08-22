import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from '@expo/vector-icons';


// ******************Main Function*************************

const ProjectSecurityItems = (props) => {


return(

  
    <View>

    
    <Pressable
      
      style={[styles.item,true?{backgroundColor:'green'}:{backgroundColor:'red'}]}
    >
      <Text style={[styles.textStyle]}>FCC-01-001</Text>
      <Text style={[styles.textStyle]}>30/07/2022, 10:41:00 pm  </Text>
      
    </Pressable>
    <Pressable
      
      style={[styles.item,true?{backgroundColor:'green'}:{backgroundColor:'red'}]}
    >
      <Text style={[styles.textStyle]}>FCC-01-001</Text>
      <Text style={[styles.textStyle]}>30/07/2022, 10:41:00 pm  </Text>
      
    </Pressable>
    <Pressable
      
      style={[styles.item,true?{backgroundColor:'red'}:{backgroundColor:'red'}]}
    >
      <Text style={[styles.textStyle]}>FCC-01-001</Text>
      <Text style={[styles.textStyle]}>30/07/2022, 10:41:00 pm  </Text>
      
    </Pressable>

    </View>
    

   

    
  
)};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    color:"white"
  },
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    // backgroundColor: "green",
    marginVertical: 2,
    // marginHorizontal:10,
    borderRadius: 6,
  },
});

export default ProjectSecurityItems;
