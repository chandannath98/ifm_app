import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
} from "react-native";
import { DGData } from "./data";
import DGMeterItem from "./DGMeterItem";
import { AntDesign, Feather } from "@expo/vector-icons";
import HeaderFilterItem from "../../GlobalComponents/HeaderFilterItem";
import { useEffect } from "react";
import HeaderforComponents from "../../GlobalComponents/HeaderForComponents";

// ******************Main Function*************************//

const DGMeter = ({ navigation, route }) => {
  var data = DGData;
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

  const dgMeterList = ["All", "DG-1", "DG-2"];

  const [selectedYear, setSelectedYear] = useState(dt.getFullYear());
  const [selectedMonth, setselectedMonth] = useState(monthNames[dt.getMonth()]);
  const [selectedDGMeter, setSelectedDGMeter] = useState("All");
  const [filteredData, setFilteredData] = useState(data);

  const filterDataFunction = (dgNo, year, month) => {
    if (dgNo === "All") {
      var data2 = data.filter((item) => {
        return (
          (new Date(item.Date).getMonth() === monthNames.indexOf(month)) &
          (new Date(item.Date).getFullYear() === year)
        );
      });

      setFilteredData(data2);
      return data2;
    } else {
      var data2 = data.filter((item) => {
        return (
          (item.DG_No === dgNo) &
          (new Date(item.Date).getMonth() === monthNames.indexOf(month)) &
          (new Date(item.Date).getFullYear() === year)
        );
      });
      setFilteredData(data2);
      return data2;
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
            filterName={"DG No"}
            FilterList={dgMeterList}
            filterValue={selectedDGMeter}
            filerOnSelectionFunctions={(e) => {
              setSelectedDGMeter(e);
              filterDataFunction(e, selectedYear, selectedMonth);
            }}
          />,
        ]}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderAndRbSHeet />

      <FlatList
        style={styles.scrollView}
        data={filteredData}
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 10 }}
        renderItem={({ item }) =>
          item.DG_No ? <DGMeterItem item={item} /> : <View></View>
        }
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          navigation.navigate("VisitorsForm");
        }}
      >
        <AntDesign name="pluscircle" size={55} color="rgb(0, 172, 194)" />
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
    borderRadius: 15,
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
    fontWeight: "bold",
    // fontFamily: 'monospace'
  },
  listing_second_line: {
    color: "grey",
  },

  infomationLine: {
    paddingVertical: 5,
  },
  infoValue: {
    color: "rgb(0, 172, 194)",
  },
  addButton: {
    position: "absolute",
    right: 5,
    bottom: 15,
    backgroundColor: "white",
    borderRadius: 50,
  },
});

export default DGMeter;
