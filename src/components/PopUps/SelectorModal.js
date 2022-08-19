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
    const uniqueData=DATA.filter((item, i, ar) => ar.indexOf(item) === i);
    
   
    
    
    const [filteredData, setfilteredData] = useState(uniqueData);
  
    const counts = {};

    for (const num of DATA) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
  
    // var newArray = DATA.filter(function (el) {
    //   return el.includes(props.value)
    // });
    
  
  
    const renderItem = ({ item }) => 
    <Pressable onPress={()=>{[props.setValue(item),props.setRnmodelvisible(false)]}} style={styles.contentBox}>
      <Ionicons style={{flex:0.3}} name={props.value===item?"radio-button-on":"radio-button-off"   } size={20} color="black" />
      <Text style={styles.listItems}>{item} {item=="All"?<Text></Text>: <Text style={styles.aggregate}> {counts[item]} </Text>} </Text>
      {/* <Text style={styles.listItems}></Text> */}
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
            <Text>{props.selectorName}</Text>
              <TextInput value={props.value} style={styles.modelInput} placeholder="Search" onChangeText={(e)=>[props.setValue(e),
              (setfilteredData(
                DATA.filter(function (el) {
                  return el.toLowerCase().includes(e.toLowerCase())
                })
              ))
              ]  }/>


              <Pressable onPress={()=>{[props.setValue("All"),props.setRnmodelvisible(false)]}} style={styles.contentBox}>
      <Ionicons style={{flex:0.3}} name={props.value==="All"?"radio-button-on":"radio-button-off"   } size={20} color="black" />
     

      <Text style={styles.listItems}>All <Text style={styles.aggregate}> {DATA.length}  </Text></Text>
        
      
      {/* <Text style={styles.listItems}></Text> */}
    </Pressable>



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
      justifyContent: "flex-start",},
      aggregate
      :{
        color:"#fff", backgroundColor:"grey", borderRadius:10, width:20
      }
  });
  
  export default SelectorModal;
  