import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Modal,
    Pressable,
    
  } from "react-native";
  import { FlatList } from "react-native-gesture-handler";

  import React, { useState } from "react";
  import { Ionicons } from '@expo/vector-icons';

  
  const SelectorModal = (props) => {
    const DATA = props.data
    
   
    
    
    const [filteredData, setfilteredData] = useState(DATA);
  
  
  
    var newArray = DATA.filter(function (el) {
      return el.includes(props.value)
    });
    console.log(newArray)
  
  
    const renderItem = ({ item }) => 
    <Pressable onPress={()=>{[props.setValue(item),props.setRnmodelvisible(false),props.filterData(item)]}} style={styles.contentBox}>
      <Ionicons style={{flex:0.3}} name={props.value===item?"radio-button-on":"radio-button-off"   } size={20} color="black" />
      <Text style={styles.listItems}>{item}</Text>
    </Pressable>
    ;
  
    return (
     
          <Modal
            style={styles.modal}
            visible={props.rnmodelvisible}
            animationIn="zoomIn"
            animationOut="zoomOut"
          >
            <View style={styles.modelContent}>
              <TextInput value={props.value} style={styles.modelInput} placeholder="Search" onChangeText={(e)=>[props.setValue(e),
              (setfilteredData(
                DATA.filter(function (el) {
                  return el.toLowerCase().includes(e.toLowerCase())
                })
              ))
              ]  }/>
              {/* <ScrollView > */}
              <FlatList
              
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={(item) => item}
                fil
              />
              {/* </ScrollView> */}
            </View>
            <Pressable
            style={[styles.button, styles.saveButton]}
            onPress={() => {
              props.setRnmodelvisible(false);
            }}
          ><Text style={{color:"#fff"}}>Close</Text></Pressable>
          </Modal>
        
    );
  };
  
  const styles = StyleSheet.create({
    modal: {
      backgroundColor: "#fff",
      // flex:1,
      borderRadius:5,
      justifyContent:"flex-start",
      height:300,
    },
    modelInput:{
      width: "100%",
      height: 44,
      backgroundColor: "#daebdd",
      borderRadius: 8,
      paddingHorizontal: 10,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginVertical:20,
  
  
    },
    contentBox:{
      display:"flex",
      flexDirection:"row",
      paddingVertical:10,
      paddingHorizontal:5,
      // borderWidth:0.1,
      // marginVertical:5,
      // borderRadius:5,
    },
  
    modelContent:{
      paddingHorizontal:20,
      paddingVertical:30,
      height:"95%"
      
      
    },
    listItems:{
      
      flex:5 ,
  
    },
    saveButton: {
      backgroundColor: "#5ba662",
      // display: "flex",
      // flexDirection: "row",
      alignItems: "center",
  
      position: "absolute",
      bottom: 15,
      right: 10,
      padding:10,
      borderRadius:5,
      // left: 30,
      justifyContent: "flex-start",}
  });
  
  export default SelectorModal;
  