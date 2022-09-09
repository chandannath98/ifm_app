import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  Platform,
  TextInput,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SelectDropdown from 'react-native-select-dropdown'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FlatList } from "react-native";


// ******************Main Function*************************//

const CheckListForm = (props) => {
  const navigation = useNavigation();
  const countries = ["Egypt", "Canada", "Australia", "Ireland"]
const [checklisttype, setChecklisttype] = useState("Daily");



var data = 
[{
  'equipment':"Fire Pump",
  'type':"daily",
  'items': {
    'pump': {
      'status': "",
      'observation': "",
      'remark':""
    },
    'pump2': {
      'status': "",
      'observation': "",
      'remark':""

    },
    'pump3': {
      'status': "",
      'observation': "",
      'remark':""

    },
    'pump4': {
      'status': "",
      'observation': "",
      'remark':""

    },
  },
}]
const [items, setitems] = useState(data[0].items);
const [itemkeys, setItemkeys] = useState(Object.keys(items));
const setOk=(item)=>{
  var i=items
  i[item].status="ok"

  setitems(i)
  setItemkeys(Object.keys(items))

}
const setNotOk=(item)=>{
  var i=items
  i[item].status="Not ok"
  
  setitems(i)
  setItemkeys(Object.keys(items))

}
// Object.keys(items).forEach(function(item, index) {
//   console.log(item)})




  return (
    <View style={[styles.container]}>


      <View style={styles.innerContainer}>






        <View style={styles.checkListTypeContainer}>
          <View style={{flex:4,justifyContent:"center"}}>
            <Text style={{color:"grey"}}>Checklist Type</Text>
          </View>
          <View style={styles.checkListTypeInnerContainer}>
            <TouchableOpacity onPress={()=>setChecklisttype("Daily")} style={checklisttype==="Daily"?styles.cheklistTypeBtnSelected:styles.cheklistTypeBtn}>
              <Text style={checklisttype==="Daily"?{color:"white"}:{color:"black"}}>Daily</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>setChecklisttype("Monthly")} style={checklisttype==="Monthly"?styles.cheklistTypeBtnSelected:styles.cheklistTypeBtn}>
              <Text style={checklisttype==="Monthly"?{color:"white"}:{color:"black"}}>Monthly</Text>
            </TouchableOpacity>
          </View>
        </View>
     



        <View style={styles.checkListTypeContainer}>

          <View style={{flex:4,justifyContent:"center"}}>
            <Text style={{color:"grey"}}>Equipment</Text>
          </View>

          <View style={styles.checkListTypeInnerContainer}>
          <SelectDropdown
	data={countries}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
    buttonStyle={{backgroundColor:"#ebeced",
borderWidth:0.2,borderRadius:5,borderColor:"grey",padding:10,minWidth:150,marginHorizontal:10,alignItems:"center",alignContent:"center",alignSelf:"center"}}
renderDropdownIcon={()=>
    <AntDesign name="caretdown" size={15} color="black" />
}
dropdownIconPosition="left"
defaultButtonText="Select "
buttonTextStyle={{alignItems:"center",alignContent:"center",alignSelf:"center",paddingHorizontal:5,justifyContent:"center"}}
dropdownStyle={{backgroundColor:"white",borderRadius:5,shadowColor: 'grey',

shadowOffset: {
width: 0,
height: 9,
},
shadowOpacity: 0.50,
shadowRadius: 12.35,

elevation: 5,}}
dropdownOverlayColor={"rgba(60, 60, 60, 0.21)"}

rowStyle={{padding:5,borderWidth:0.1,borderColor:"rgba(190, 188, 188, 0.96)",alignItems:"center"}}
selectedRowStyle={{backgroundColor:"rgb(0, 172, 194)"}}
selectedRowTextStyle={{color:"white"}}
search={true}
searchInputStyle={{backgroundColor:"white",borderColor:"grey",borderWidth:0.2}}
// renderSearchInputRightIcon={()=>
// <FontAwesome5 name="search" size={15} color="black" />
// }
searchPlaceHolder="🔎 Search"
/>

          </View>
        </View>
      


      

</View>

<View style={{flex:1}}>











<FlatList
       
        data={Object.keys(items)}
        // contentContainerStyle={{ paddingTop: 10,}}
        renderItem={({ item }) => 
        
        <View style={styles.itemContainer}>
        <Text style={styles.itemHeader}>
        {item}
        </Text>

<View>
        <Text style={styles.itemKey }>Status :-</Text>
        
        <View style={{
            display:"flex",
        flexDirection:"row",

        }}>
            <TouchableOpacity 
            onPress={()=>{setOk(item)
              

            }} 
            style={[
              styles.cheklistTypeBtn,(items[item].status==="ok")?{backgroundColor:"rgb(0, 172, 194)"}:{backgroundColor:"white"}
              ]}>
                <Text style={(items[item].status==="ok")?{color:"white"}:{color:"black"}}>Ok</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{setNotOk(item)}} 
            style={[
              styles.cheklistTypeBtn,(items[item].status==="Not ok")?{backgroundColor:"rgb(0, 172, 194)"}:{backgroundColor:"white"}
              ]}>
                <Text style={(items[item].status==="Not ok")?{color:"white"}:{color:"black"}}>Not Ok</Text>
            </TouchableOpacity>
        </View>
        </View>
        <View>



        <Text style={styles.itemKey }>Observation:- </Text> 

        <TextInput style={styles.textinputstyle}
        
        value={items[item].observation}

        onChangeText={(e)=>{
        
          var i=items
          i[item].observation=e
         
          setitems(i)
          setItemkeys(Object.keys(items))

        }}
        />


        </View>



        <View>
        <Text style={styles.itemKey }>Remark:- </Text> 
        <TextInput 
        value={items[item].remark}

        onChangeText={(e)=>{
        
          var i=items
          i[item].remark=e
         
          setitems(i)
          setItemkeys(Object.keys(items))
          
        }}
        
        style={styles.textinputstyle}/>
        </View>
       
       
    </View> }
      />










</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff"
  },
  innerContainer:{
    marginTop:25,
    marginHorizontal:20,
    maxWidth:800,
    alignSelf:"center",
    minWidth:350,
    // flex:1
  },
 checkListTypeContainer:{
    display:"flex",
    flexDirection:"row",
    paddingVertical:2,
    marginVertical:4
    // justifyContent:"space-around"
 },
  
  checkListTypeInnerContainer:{
    display:"flex",
    flex:6,
    flexDirection:"row",
  
 },
 cheklistTypeBtn:{
    padding:7,
    backgroundColor:"#ebeced",
    borderColor:"grey",
    borderWidth:0.2,
    borderRadius:5,
marginHorizontal:10
 },
 cheklistTypeBtnSelected:{
    padding:7,
    backgroundColor:"rgb(0, 172, 194)",
    borderColor:"white",
    borderWidth:0.2,
    borderRadius:5,
marginHorizontal:10
 },

 itemContainer:{
    backgroundColor:"#FAFAFA",
    marginHorizontal:10,
    marginVertical:5,
    padding:25,
    borderRadius:5,
    // maxWidth:500
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
  },
  statusBtn:{
    backgroundColor:"#fff"
  },
  textinputstyle:{
    backgroundColor:"white",
    height:50,
    borderColor:"rgb(0, 172, 194)",
    borderWidth:0.3,
    borderRadius:5,
    paddingHorizontal:15
  }
});

export default CheckListForm;
