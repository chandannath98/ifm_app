import React from "react";
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


// ******************Main Function*************************

const ProjectSecurityItems = (props) => {

const navigation=useNavigation()
return(

  
    <View>

    
    <TouchableOpacity onPress={()=>{navigation.navigate("Project Security Detail Page")}}
      
      style={[styles.item,props.item.Name_of_the_guard?{backgroundColor:'green'}:{backgroundColor:'red'}]}
    >
      <Text style={[styles.textStyle]}>{props.item.Area_visited}</Text>
      <Text style={[styles.textStyle]}>{props.item.date_and_Time}  </Text>
      
    </TouchableOpacity>
    

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
