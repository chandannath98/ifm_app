import {useNavigation} from "@react-navigation/native"
import {  Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import RNModal from 'react-native-modal';
import { useState } from "react";
import { MenuProvider } from 'react-native-popup-menu';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

 const VisitorsItem =(props)=> {
   const navigation= useNavigation();
   const [rnmodalvisible, setRnmodalvisible] = useState(false);
  return (
    <View >
      <View style={[styles.listing_container,styles.shadowProp]}>

      <Pressable style={[styles.listing_1container]} onPress={()=>{navigation.navigate("PostDeatils")}}>
        <View style={styles.listing_inline_first_row}>
          <Text style={styles.listing_top_line}> {props.item.visitor_name}</Text>
          <Text> {props.item.date}</Text>
        </View>
        <View style={styles.listing_inline_second_row}>
          <Text style={styles.listing_second_line}>{props.item.time_in}</Text>
          <Text style={styles.listing_second_line}>{props.item.time_out}</Text>
        </View>
        <View>
        <Text> ⭐⭐⭐</Text>
        </View>
      </Pressable>

      <Menu>
      <MenuTrigger >
      <Entypo name="dots-three-vertical" size={24} color="black" />
      </MenuTrigger>
      <MenuOptions style={{padding:10, borderRadius:10,}}>
        <MenuOption onSelect={() => navigation.navigate("VisitorsForm")} text='Edit' />
        <MenuOption onSelect={() => setRnmodalvisible(true)} >
          <Text style={{color: 'red'}}>Delete</Text>
        </MenuOption>
        <MenuOption   text='Select' />
      </MenuOptions>
    </Menu>



      </View>
     

     




<RNModal
isVisible={rnmodalvisible}
animationIn={"zoomIn"}
animationOut={"zoomOut"}
>
  <View style={styles.rnmodalView}>
    <Text>Are You Sure ?</Text>
<TouchableOpacity style={styles.modalButton} onPress={()=>{setRnmodalvisible(false)}}>
<Text style={styles.modalButtonText}>Delete</Text>
</TouchableOpacity>
  </View>
</RNModal>











      
    </View>
    
   
  );
}

const styles = StyleSheet.create({
    

    
  listing_1container:{
    flex:4,
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    backgroundColor:"white",
   
    
  },
  menuIcon:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },

  listing_container:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
   
    backgroundColor:"white",
    // height:60,
    paddingVertical:10,
    
    marginHorizontal:10,
    paddingHorizontal:10,
    // borderRadius:5,
    marginVertical:1,
    // borderColor:"grey",
    
  },
  shadowProp: {
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation:5,
  },


  listing_inline_second_row:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    marginVertical:2,
    
    
    
  },
  listing_inline_first_row:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    
  },
  listing_top_line:{
    fontSize:15
  },
 listing_second_line:{
  color:"grey",
 },
 rnmodalView:{
  backgroundColor:"white",
  borderRadius:8,
  paddingHorizontal:70,
  // marginHorizontal:320,
  // width:"30%",
  // position:"absolute",
  // right:10,
  paddingVertical:14,
  shadowColor:"#000",
  shadowOffset:{
    width:0,
    height:2,
  },
  shadowOpacity:0.25,
  shadowRadius:3.84,
  elevation:5,
 },
 modalButton:{
  backgroundColor:"red",
  paddingVertical:6,
  paddingHorizontal:10,
  borderRadius:4,
  marginLeft:10,
  elevation:2,
  shadowColor:"#000",
  shadowOffset:{
    width:2,
    height:2,
  },
  shadowOpacity:0.25,
  shadowRadius:3.5,
  position:"absolute",
  right:5,
  bottom:2,
  marginVertical:3,
 },
 modalButtonText:{
  color:"#fff",
  fontSize:15
 }









});



export default VisitorsItem;