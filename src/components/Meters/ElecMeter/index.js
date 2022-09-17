import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable, TouchableOpacity, TouchableHighlight,FlatList } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import ElecMeterItem from "./ElecMeterItem";
import { ElecData } from "./elecData";
import { Button } from "native-base";
import HeaderFilterItem from "../../GlobalComponents/HeaderFilterItem";
import HeaderforComponents from "../../GlobalComponents/HeaderForComponents";



// ******************Main Function*************************//



const ElecMeter = ({ navigation, route }) => {
const [editMode, setEditMode] = useState(false);
const [hideHeader, setHideHeader] = useState(false);
    

const flatList = useRef();
const moveToTop = () => flatList.current.scrollToIndex({ index: 0 });
var data= ElecData

var dt = new Date();
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const ltMeterList = ["All", "Tr No-1", "Tr No-2"];
const [selectedYear, setSelectedYear] = useState(dt.getFullYear());
const [selectedMonth, setselectedMonth] = useState(monthNames[dt.getMonth()]);
const [filteredData, setFilteredData] = useState(data);
const [searchInputVisible,setSearchInputVisible] = useState(false);
  const [searchvalue, setSearchvalue] = useState("");












const filterDataFunction = ( year, month) => {
 
    var data2 = data.filter((item) => {
      return (
        
        item.Month === month &
        (item.Year === year)
      );
    });
    setFilteredData(data2);
    
  
};

useEffect(() => {
  filterDataFunction(selectedYear, selectedMonth);
}, []);



const RenderItemIfSearchEnable=(item)=>{
    
  var concdata="";
  for (const key in item) {
    concdata=concdata+String(item[key]).toLowerCase()+" "
  }
 
  if(concdata.includes(searchvalue.toLowerCase())){
    return(
      <ElecMeterItem item={item} editMode={editMode}/>
    )
  }
  }




// *****************Header **********************
const HeaderAndRbSHeet = () => {
  return (
    <HeaderforComponents
    searchInputVisible={searchInputVisible}
    setSearchInputVisible={setSearchInputVisible}
    searchvalue={searchvalue}
    setSearchvalue={setSearchvalue}
      item={[
        <HeaderFilterItem
          filterName={"Year"}
          FilterList={[2021, 2022, 2023]}
          filterValue={selectedYear}
          filerOnSelectionFunctions={(e) => {
            setSelectedYear(e);
            filterDataFunction(e, selectedMonth);
          }}
        />,
        <HeaderFilterItem
          filterName={"Month"}
          FilterList={monthNames}
          filterValue={selectedMonth}
          filerOnSelectionFunctions={(e) => {
            setselectedMonth(e);
            filterDataFunction(selectedYear, e);
          }}
        />,
       
      ]}
    />
  );
};





  return (
    <SafeAreaView style={styles.container}>
      {hideHeader?<></>:<HeaderAndRbSHeet/>}

      <FlatList
      ref={flatList}
        style={styles.scrollView}
        data={filteredData}
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 10 }}
        renderItem={({ item }) => !setSearchInputVisible   ?<ElecMeterItem item={item} editMode={editMode}/>: RenderItemIfSearchEnable(item)}

      />
    
   {editMode?
   <AntDesign name="checkcircle" style={styles.editButton}  size={55} onPress={()=>setEditMode(false)}  color="black" />:
    <MaterialCommunityIcons name="circle-edit-outline" style={styles.editButton}  size={55} color="black"  onPress={()=>setEditMode(true)}/>
     
    }

<FontAwesome onPress={moveToTop} style={{position:"absolute",bottom:20,left:10}} name="angle-up" size={40} color="#e0e0de" />
  

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  addButton:{
    position:"absolute",
    right:5,
    bottom:15,
    backgroundColor:"white",
    borderRadius:50
  },
  editButton:{
    color:"rgb(0, 172, 194)",
    flex: 1,
    position:"absolute",
    justifyContent: 'flex-end',
    bottom:20,
    right:20
  },
});

export default ElecMeter;
