import React, { useState } from "react";
import { StyleSheet,  View, SafeAreaView, Pressable, TouchableOpacity,FlatList } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import MaterialInItem from "./MaterialInItem";
import { MINData } from "./MINData";
import { useEffect } from "react";
import HeaderforComponents from "../../GlobalComponents/HeaderForComponents";
import HeaderFilterItem from "../../GlobalComponents/HeaderFilterItem";




// ******************Main Function*************************//

const MaterialIn = ({ navigation, route }) => {
var data= MINData


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

  const [selectedYear, setSelectedYear] = useState(dt.getFullYear());
  const [selectedMonth, setselectedMonth] = useState(monthNames[dt.getMonth()]);
  const [filteredData, setFilteredData] = useState(data);
  const [searchInputVisible,setSearchInputVisible] = useState(false);
  const [searchvalue, setSearchvalue] = useState("");





  const filterDataFunction = (year, month) => {
    var data2 = data.filter((item) => {
      return (
        (new Date(item.date).getMonth() === monthNames.indexOf(month)) &
        (new Date(item.date).getFullYear() === year)
      );
    });
    setFilteredData(data2);
    return data2;
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
        <MaterialInItem item={item} />
      )
    }
    }
  






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
      {/* <StatusBar backgroundColor="white" /> */}

<HeaderAndRbSHeet/>

      <FlatList
        style={styles.scrollView}
        data={filteredData}
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 10 }}
        renderItem={({ item }) => !searchInputVisible?<MaterialInItem item={item} />:RenderItemIfSearchEnable(item)}
      />
    

      <TouchableOpacity style={styles.addButton} 
    //   onPress={() => {
    //       navigation.navigate("VisitorsForm");
    //     }}
        >
      <AntDesign
        
        name="pluscircle"
        size={55}
        color="rgb(0, 172, 194)"
        
      />
      </TouchableOpacity>
    

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 5,
  },
  listing_1container: {
    flex: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // backgroundColor:"white",
  },
  

  listing_container: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: 10,

    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius:15,
    marginVertical: 2,
    // borderColor:"grey",
  },

  

  shadowProp: {
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },


  listing_inline_first_row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listing_top_line: {
    fontSize: 17,
    fontWeight:"bold"
    // fontFamily: 'monospace'
  },
  listing_second_line: {
    color: "grey",
  },
 
  infomationLine:{
    paddingVertical:5
  },
  infoValue:{
    color:"rgb(0, 172, 194)"
  }
  ,addButton:{
    position:"absolute",
    right:5,
    bottom:15,
    backgroundColor:"white",
    borderRadius:50
  }
});

export default MaterialIn;
