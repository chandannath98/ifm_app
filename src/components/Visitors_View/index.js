
import { Platform,  StyleSheet, Text, View } from 'react-native';
import  VisitorsItem from './VisitorsItem';

export default function Visitors_List() {
  return (
    
    <View >
     <VisitorsItem/>
      
    </View>
    
   
  );
}

const styles = StyleSheet.create({
    container: {
        // paddingTop:10,
        flex:1,
        // backgroundColor: "#CEE5D0",
        color:"white",
        // justifyContent:"center",
        
    },

    
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
