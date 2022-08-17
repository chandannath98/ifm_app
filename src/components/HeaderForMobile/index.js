
import { Platform, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedVisitorsItems } from "../../redux/actions";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import SelectorModal from "../PopUps/SelectorModal";
import { useState } from "react";



export default function HeaderForMobile(props) {

const [rating, setRating] = useState("⭐⭐⭐⭐⭐");
const [rnmodelvisible, setRnmodelvisible] = useState(false);
  const {selectedVisitorsItems, filterdVisitorsData}=useSelector(state => state.visitorReducer);

  const dispatch = useDispatch();


  var ratingslist=props.getFields("rating")
  
  function getFields( field,data) {
    var output = [];
    for (var i=0; i < data.length ; ++i)
        output.push(data[i][field]);
         
    return output;
}




  return (
    

      <View >
        <View style={styles.header}>
        <Pressable onPress={()=>setRnmodelvisible(true)} style={styles.headerItem}>

<SelectorModal value={rating} setValue={setRating} rnmodelvisible={rnmodelvisible} setRnmodelvisible={setRnmodelvisible} data={props.getFields("rating")}  filterData={props.filterData} />


          <AntDesign name="star" size={20} color="black" />
          <Text>Rating : </Text>
          <Text>{rating} </Text>
        </Pressable>
        <View style={styles.headerItem}>
          <AntDesign name="calendar" size={20} color="black" />
          <Text>Month-Year : </Text>
          <Text>June-2022 </Text>
        </View>
        </View>

        {selectedVisitorsItems.length>0? 



       <View>

       <View style={styles.header}>
       
         

<Menu>
      <MenuTrigger >
      <View style={styles.headerItem}>
      <AntDesign style={styles.item} name="checkcircle" size={17} color="black" />
      <Text style={styles.item}>{selectedVisitorsItems.length}</Text>
         {/* <Text>⭐⭐ </Text> */}
       </View>
      </MenuTrigger>
      <MenuOptions style={{padding:10, borderRadius:10,}}>
        <MenuOption onSelect={() => dispatch(setSelectedVisitorsItems(getFields("visitor_name",filterdVisitorsData)))} text='Select All Filtered data' />
        <MenuOption onSelect={() => dispatch(setSelectedVisitorsItems(props.data))} text='Select All' />
        <MenuOption onSelect={() => dispatch(setSelectedVisitorsItems([])) } >
          <Text>Unselect All</Text>
        </MenuOption>
       
      </MenuOptions>
    </Menu>



        
       <View style={styles.headerItem}>
       <MaterialCommunityIcons name="delete" size={25} color="black" />
       </View>
       </View>


       </View>:



       <Text></Text>  
      }
       
        
      </View>
      
  );
}

const styles = StyleSheet.create({
 

  
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor:"#CEE5D0",

  },

  headerItem: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 7,
    paddingHorizontal: 8,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "space-around",
  },
  item:{
    paddingHorizontal:2
  }
});
