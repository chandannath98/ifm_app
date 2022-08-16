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
    const DATA = [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
      },
      {
        id: "58694a0f-3da1-4171f-bd96-145571e29d72",
        title: "Thi1rd Item",
      },
      {
        id: "58694a0f2-3da1-471f-bd96-145571e29d72",
        title: "Third2 Item",
      },
      {
        id: "58694a0f3-3da1-471f-bd96-145571e29d72",
        title: "Third3 Item",
      },
      {
        id: "58694a0f4-3da1-471f-bd96-145571e29d72",
        title: "Thir4d Item",
      },
      {
        id: "58694a50f-3da1-471f-bd96-145571e29d72",
        title: "Thir5d Item",
      },
      {
        id: "58694a06f-3da1-471f-bd96-145571e29d72",
        title: "Third6 Item",
      },
      {
        id: "58694a07f-3da1-471f-bd96-145571e29d72",
        title: "Third 7Item",
      },
      {
        id: "58694a0f-3d8a1-471f-bd96-145571e29d72",
        title: "Thi8rd Item",
      },
      {
        id: "586949a0f-3da1-471f-bd96-145571e29d72",
        title: "Thi9rd Item",
      },
      {
        id: "58694a011f-3da1-471f-bd96-145571e29d72",
        title: "Thir11d Item",
      },
    ];
    
    
    
    const [filteredData, setfilteredData] = useState(DATA);
  
  
  
    var newArray = DATA.filter(function (el) {
      return el.title.includes(props.value)
    });
    console.log(newArray)
  
  
    const renderItem = ({ item }) => 
    <Pressable onPress={()=>{[props.setValue(item.title),props.setRnmodelvisible(false)]}} style={styles.contentBox}>
      <Ionicons style={{flex:0.3}} name={props.value===item.title?"radio-button-on":"radio-button-off"   } size={20} color="black" />
      <Text style={styles.listItems}>{item.title}</Text>
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
                  return el.title.toLowerCase().includes(e.toLowerCase())
                })
              ))
              ]  }/>
              {/* <ScrollView > */}
              <FlatList
              
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
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
  