import {useNavigation} from "@react-navigation/native"
import {  Pressable, StyleSheet, Text, View } from 'react-native';

 const VisitorsItem =()=> {
   const navigation= useNavigation();
  return (
    <Pressable onPress={()=>{navigation.navigate("PostDeatils")}}>
     <View style={[styles.listing_container,styles.shadowProp]}>
        <View style={styles.listing_inline_first_row}>
          <Text style={styles.listing_top_line}> Visitors Name</Text>
          <Text> 02-07-2022</Text>
        </View>
        <View style={styles.listing_inline_second_row}>
          <Text style={styles.listing_second_line}>Time In - 12:15 PM</Text>
          <Text style={styles.listing_second_line}>Time Out - 01:15 PM</Text>
        </View>
        <View>
        <Text> ⭐⭐⭐</Text>
        </View>
      </View>
      
    </Pressable>
    
   
  );
}

const styles = StyleSheet.create({
    

    
  listing_container:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    // padding:"3px",
    backgroundColor:"white",
    // height:60,
    paddingVertical:20,
    paddingBottom:20,
    marginLeft:20,
    marginRight:20,
    paddingHorizontal:20,
    borderRadius:5,
    marginVertical:5,
    
  },
  shadowProp: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation:5,
  },


  listing_inline_second_row:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    marginVertical:10,
    
    
    
  },
  listing_inline_first_row:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    
  },
  listing_top_line:{
    fontSize:20
  },
 listing_second_line:{
  color:"grey",
 }
});



export default VisitorsItem;