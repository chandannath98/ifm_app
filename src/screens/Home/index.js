import {
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
} from "react-native";
import Visitors_List from "../../components/Visitors_View";
import HeaderForMobile from "../../components/HeaderForMobile";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import VisitorsItem from "../../components/Visitors_View/VisitorsItem";
import { useState, useEffect } from "react";
import { setfilterdVisitorsData } from "../../redux/actions";
import { visitorsdata } from "../../components/Visitors_View/data";
import { StatusBar } from "expo-status-bar";
import { DrawerActions } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import { useRef } from "react";
import { rbSheetandBtnstyles } from "../../components/rbSheetAndBtnStyle";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedVisitorsItems } from "../../redux/actions";
import RBSheetHeader from "../../components/GlobalComponents/RBSheetHeader";
import RBSheetListItem from "../../components/GlobalComponents/RBSheetLIstItem";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

export default function Home({ navigation }) {
  var data = visitorsdata;
  var dt = new Date();

  // ***************Use refs for bottom sheets***************

  const refRBSheet1 = useRef();
  const refRBSheet2 = useRef();
  const refRBSheet3 = useRef();
  const refRBSheet4 = useRef();

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

  // ************states for month and year*****************
  const [selectedYear, setSelectedYear] = useState(dt.getFullYear());
  const [selectedMonth, setselectedMonth] = useState(monthNames[dt.getMonth()]);
  const [selectedRating, setSelectedRating] = useState("All");

  // const navigation = useNavigation();

  // **************Redux State**************

  const { selectedVisitorsItems } = useSelector(
    (state) => state.visitorReducer
  );

  // ***************Dispatch from redux*************
  const dispatch = useDispatch();

  // *****************Filtered Data State*******************
  const [filterdVisitorsData, setFilterdVisitorsData] = useState(data);

  // **********get field funtion for gative values of a perticuler key form data***********

  function getFields(field, data) {
    var output = [];
    for (var i = 0; i < data.length; ++i) output.push(data[i][field]);

    return output;
  }

  // ****************Filter data function  for filtering data*********

  const filterDataFunction = (rating, year, month) => {
    if (rating === "All") {
      setFilterdVisitorsData(data);
      var data2 = data.filter((item) => {
        return (
          (new Date(item.date).getMonth() === monthNames.indexOf(month)) &
          (new Date(item.date).getFullYear() === year)
        );
      });
      setFilterdVisitorsData(data2);
      return data2;
    } else {
      var data2 = data.filter((item) => {
        return (
          (item.rating === rating) &
          (new Date(item.date).getMonth() === monthNames.indexOf(month)) &
          (new Date(item.date).getFullYear() === year)
        );
      });
      setFilterdVisitorsData(data2);
      return data2;
    }
  };

  // **********filter data for today************

  useEffect(() => {
    filterDataFunction(selectedRating, selectedYear, selectedMonth);
  }, []);

  // *************header item**************

  const HeaderAndRbSHeet = () => {
    return (
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
          }}
        >
          {/* ******
           *******Bottom sheet popup 1 for year selection**********
           ******** */}

          <RBSheet
            ref={refRBSheet1}
            closeOnDragDown={true}
            closeOnPressMask={true}
            height={400}
            customStyles={rbSheetandBtnstyles.rbSheetStyle}
          >
            <View style={{ flex: 1 }}>
              <RBSheetHeader name={"Year"} />

              <TouchableOpacity
                onPress={() => {
                  refRBSheet1.current.close();
                }}
                style={rbSheetandBtnstyles.modelClose}
              >
                <Entypo name="cross" size={24} color="grey" />
              </TouchableOpacity>

              <View style={rbSheetandBtnstyles.selectorItemContainer}>
                <FlatList
                  data={[2020, 2021, 2022, 2023]}
                  contentContainerStyle={{ paddingBottom: 400 }}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => [
                        refRBSheet1.current.close(),
                        setSelectedYear(item),
                        filterDataFunction("All", item, selectedMonth),
                      ]}
                    >
                      <RBSheetListItem value={selectedYear} item={item} />
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          </RBSheet>

          {/* ******
           *******Bottom sheet popup 2 for Month selection**********
           ******** */}

          <RBSheet
            ref={refRBSheet2}
            closeOnDragDown={true}
            closeOnPressMask={true}
            height={650}
            customStyles={rbSheetandBtnstyles.rbSheetStyle}
          >
            <View style={{ flex: 1 }}>
              <RBSheetHeader name={"Month"} />

              <TouchableOpacity
                onPress={() => {
                  refRBSheet2.current.close();
                }}
                style={rbSheetandBtnstyles.modelClose}
              >
                <Entypo name="cross" size={24} color="grey" />
              </TouchableOpacity>

              <View style={rbSheetandBtnstyles.selectorItemContainer}>
                <FlatList
                  data={monthNames}
                  contentContainerStyle={{ paddingBottom: 400 }}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => [
                        refRBSheet2.current.close(),
                        setselectedMonth(item),
                        filterDataFunction("All", selectedYear, item),
                      ]}
                    >
                      <RBSheetListItem value={selectedMonth} item={item} />
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          </RBSheet>

          {/* ******
           *******Bottom sheet popup 3 for Rating selection**********
           ******** */}

          <RBSheet
            ref={refRBSheet3}
            closeOnDragDown={true}
            closeOnPressMask={true}
            height={650}
            customStyles={rbSheetandBtnstyles.rbSheetStyle}
          >
            <View style={{ flex: 1 }}>
              <RBSheetHeader name={"Rating"} />

              <TouchableOpacity
                onPress={() => {
                  refRBSheet3.current.close();
                }}
                style={rbSheetandBtnstyles.modelClose}
              >
                <Entypo name="cross" size={24} color="grey" />
              </TouchableOpacity>

              <View style={rbSheetandBtnstyles.selectorItemContainer}>
                <TouchableOpacity
                  onPress={() => [
                    refRBSheet3.current.close(),
                    setSelectedRating("All"),
                    filterDataFunction("All", selectedYear, selectedMonth),
                  ]}
                >
                  <RBSheetListItem value={selectedRating} item={"All"} />
                </TouchableOpacity>

                <FlatList
                  data={["⭐⭐⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐", "⭐⭐", "⭐"]}
                  contentContainerStyle={{ paddingBottom: 400 }}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => [
                        refRBSheet3.current.close(),
                        setSelectedRating(item),
                        filterDataFunction(item, selectedYear, selectedMonth),
                      ]}
                    >
                      <RBSheetListItem value={selectedRating} item={item} />
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          </RBSheet>

          <Feather
            onPress={() => navigation.openDrawer()}
            style={{ flex: 1, alignSelf: "center", paddingHorizontal: 2 }}
            name="menu"
            size={25}
            color="rgb(0, 172, 194)"
          />

          {/* *********First Line********* */}

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginHorizontal: 10,
              margin: 15,
              flex: 20,
              // justifyContent:"space-between"
            }}
          >
            <TouchableOpacity
              onPress={() => refRBSheet1.current.open()}
              style={[
                rbSheetandBtnstyles.filterbtn,
                Platform.OS === "web"
                  ? { paddingHorizontal: 15 }
                  : { paddingHorizontal: 10 },
              ]}
            >
              <Text style={{ fontSize: 17, color: "rgb(0, 172, 194)" }}>
                {selectedYear}
              </Text>
              <Entypo name="chevron-down" size={17} color="rgb(0, 172, 194)" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => refRBSheet2.current.open()}
              style={[
                rbSheetandBtnstyles.filterbtn,
                Platform.OS === "web"
                  ? { paddingHorizontal: 15 }
                  : { paddingHorizontal: 10 },
              ]}
            >
              <Text style={{ fontSize: 17, color: "rgb(0, 172, 194)" }}>
                {/* {selectedMonth} */}

                {selectedMonth}
              </Text>
              <Entypo name="chevron-down" size={17} color="rgb(0, 172, 194)" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => refRBSheet3.current.open()}
              style={[
                rbSheetandBtnstyles.filterbtn,
                Platform.OS === "web"
                  ? { paddingHorizontal: 15 }
                  : { paddingHorizontal: 10 },
              ]}
            >
              <Text style={{ fontSize: 17, color: "rgb(0, 172, 194)" }}>
                {selectedRating === "All" ? (
                  <AntDesign
                    style={{ paddingHorizontal: 5 }}
                    name="star"
                    size={20}
                    color="rgb(0, 172, 194)"
                  />
                ) : (
                  <Text></Text>
                )}
                {selectedRating}
              </Text>
              <Entypo name="chevron-down" size={17} color="rgb(0, 172, 194)" />
            </TouchableOpacity>
          </View>
        </View>

        {/* *********Second Line********* */}
        {/* *********For seleted units*********** */}

        {selectedVisitorsItems.length ? (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "white",
              padding: 10,
            }}
          >
            <Menu>
              <MenuTrigger>
                <View
                  // onPress={() => refRBSheet4.current.open()}

                  style={[
                    rbSheetandBtnstyles.filterbtn,
                    Platform.OS === "web"
                      ? { paddingHorizontal: 15 }
                      : { paddingHorizontal: 10 },
                  ]}
                >
                  <Text style={{ fontSize: 17, color: "rgb(0, 172, 194)" }}>
                    seleced Items :- {selectedVisitorsItems.length}
                  </Text>
                </View>
              </MenuTrigger>

              <MenuOptions style={{ padding: 10, borderRadius: 10 }}>
                <MenuOption
                  onSelect={() => [
                    dispatch(
                      setSelectedVisitorsItems(
                        getFields("visitor_name", filterdVisitorsData)
                      )
                    ),
                  ]}
                  text="Select All Filtered data"
                />
                <MenuOption
                  onSelect={() =>
                    dispatch(
                      setSelectedVisitorsItems(getFields("visitor_name", data))
                    )
                  }
                  text="Select All"
                />
                <MenuOption
                  onSelect={() => dispatch(setSelectedVisitorsItems([]))}
                >
                  <Text>Unselect All</Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>
        ) : (
          <></>
        )}
      </View>
    );
  };

  // ********************
  // ***********************Return Function************
  // *************************************

  return (
    <View style={[styles.safeAreaViewStyle]}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={{ position: "absolute", top: 15, left: 10, zIndex: 1 }}
      >
        <Feather name="menu" size={24} color="white" />
      </TouchableOpacity>

      {/* 

      <HeaderForMobile
        getMonthYear={getMonthYear}
        data={getFields("visitor_name", data)}
        getFields={getFields}
        filterData={filterData}
      /> */}

      <HeaderAndRbSHeet />

      <FlatList
        style={styles.scrollView}
        data={filterdVisitorsData}
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 10 }}
        renderItem={({ item }) => (
          <VisitorsItem
            item={item}
            selectedVisitorsItems={selectedVisitorsItems}
            setSelectedVisitorsItems={setSelectedVisitorsItems}
          />
        )}
      />

      <AntDesign
        style={styles.addButton}
        name="pluscircle"
        size={55}
        color="black"
        onPress={() => {
          navigation.navigate("VisitorsForm");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,

    // backgroundColor: "rgb(0, 172, 194)",
  },

  addButton: {
    color: "rgb(0, 172, 194)",
    flex: 1,
    position: "absolute",
    justifyContent: "flex-end",
    bottom: 20,
    right: 20,
  },

  
});
