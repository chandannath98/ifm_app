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
import HeaderFilterItem from "../../components/GlobalComponents/HeaderFilterItem";
import HeaderforComponents from "../../components/GlobalComponents/HeaderForComponents";

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

  const ratingList = ["All", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐", "⭐⭐", "⭐"];

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
        <HeaderforComponents
          item={[
            <HeaderFilterItem
              filterName={"Year"}
              FilterList={[2021, 2022, 2023]}
              filterValue={selectedYear}
              filerOnSelectionFunctions={(e) => {
                setSelectedYear(e);
                setSelectedRating("All");
                filterDataFunction("All", e, selectedMonth);
              }}
            />,
            <HeaderFilterItem
              filterName={"Month"}
              FilterList={monthNames}
              filterValue={selectedMonth}
              filerOnSelectionFunctions={(e) => {
                setselectedMonth(e);
                setSelectedRating("All");
                filterDataFunction("All", selectedYear, e);
              }}
            />,

            <HeaderFilterItem
              filterName={"Rating"}
              FilterList={ratingList}
              filterValue={selectedRating}
              filerOnSelectionFunctions={(e) => {
                setSelectedRating(e);
                filterDataFunction(e, selectedYear, selectedMonth);
              }}
            />,
          ]}
        />

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
