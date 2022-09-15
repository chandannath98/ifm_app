import React, { useState } from "react";
import { StyleSheet,  SafeAreaView,  TouchableOpacity, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import LTMeterItem from "./LTMeterItem";
import { ltMeterData } from "./ltMeterData";
import HeaderFilterItem from "../../GlobalComponents/HeaderFilterItem";
import HeaderforComponents from "../../GlobalComponents/HeaderForComponents";
import { useEffect } from "react";




// ******************Main Function*************************//

const LTMeter = ({ navigation, route }) => {
var data= ltMeterData


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
const [selectedLTMeter, setselectedLTMeter] = useState("All");
const [filteredData, setFilteredData] = useState(data);




const filterDataFunction = (LTNo, year, month) => {
  if (LTNo === "All") {
    var data2 = data.filter((item) => {
      return (
        (new Date(item.date).getMonth() === monthNames.indexOf(month)) &
        (new Date(item.date).getFullYear() === year)
      );
    });

    setFilteredData(data2);
    
  } else {
    var data2 = data.filter((item) => {
      return (
        (item.Tr_No === LTNo) &
        (new Date(item.date).getMonth() === monthNames.indexOf(month)) &
        (new Date(item.date).getFullYear() === year)
      );
    });
    setFilteredData(data2);
    
  }
};

useEffect(() => {
  filterDataFunction("All", selectedYear, selectedMonth);
}, []);

// *****************Header **********************
const HeaderAndRbSHeet = () => {
  return (
    <HeaderforComponents
      item={[
        <HeaderFilterItem
          filterName={"Year"}
          FilterList={[2021, 2022, 2023]}
          filterValue={selectedYear}
          filerOnSelectionFunctions={(e) => {
            setSelectedYear(e);
            filterDataFunction("All", e, selectedMonth);
          }}
        />,
        <HeaderFilterItem
          filterName={"Month"}
          FilterList={monthNames}
          filterValue={selectedMonth}
          filerOnSelectionFunctions={(e) => {
            setselectedMonth(e);
            filterDataFunction("All", selectedYear, e);
          }}
        />,
        <HeaderFilterItem
          filterName={"LT No"}
          FilterList={ltMeterList}
          filterValue={selectedLTMeter}
          filerOnSelectionFunctions={(e) => {
            setselectedLTMeter(e);
            filterDataFunction(e, selectedYear, selectedMonth);
          }}
        />,
      ]}
    />
  );
};

















  return (
    <SafeAreaView style={styles.container}>
      <HeaderAndRbSHeet/>
      <FlatList
        style={styles.scrollView}
        data={filteredData}
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 10 }}
        renderItem={({ item }) => <LTMeterItem item={item} />}
      />
    

      <TouchableOpacity style={styles.addButton} onPress={() => {
          navigation.navigate("VisitorsForm");
        }}>
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
  }
  
  ,addButton:{
    position:"absolute",
    right:5,
    bottom:15,
    backgroundColor:"white",
    borderRadius:50
  }
});

export default LTMeter;
