import {
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  setSelectedVisitorsItems,
  setVisitorsFilterCount,
  setVisitorSelectedRating,
  setVisitorsMonthYearVlaue,
} from "../../redux/actions";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import SelectorModal from "../PopUps/SelectorModal";
import { useState } from "react";

// main function start from here

export default function HeaderForMobile(props) {
  // rating state for grouping used in selector module

  // rnmodle visible state for selector module
  const [rnmodelvisible, setRnmodelvisible] = useState(false);
  const [rnmodel2visible, setRnmodel2visible] = useState(false);
  // selected entrys link state imorted from redux store
  const {
    uniqueRatingList,
    selectedVisitorsItems,
    filterdVisitorsData,
    visitorsMonthYearList,
    visitorsMonthYearValue,
    visitorSelectedRating,
    visitorsFilterCount,
  } = useSelector((state) => state.visitorReducer);

  const dispatch = useDispatch();

  const setRating = (e) => {
    props.filterData(e,visitorsMonthYearValue)
    dispatch(setVisitorSelectedRating(e));
    
    if ((e === "All") & (visitorsFilterCount === 1)) {
      dispatch(setVisitorsFilterCount(0));
    } else if (visitorsFilterCount === 0) {
      dispatch(setVisitorsFilterCount(1));
    }
    
  };

  const setMonthYear = (e) => {
    
    dispatch(setVisitorsMonthYearVlaue(e));
    if ((e === "All") & (visitorsFilterCount === 2)) {
      dispatch(setVisitorsFilterCount(0));
    } else if (visitorsFilterCount === 0) {
      dispatch(setVisitorsFilterCount(2));
    }
    
    props.filterData(visitorSelectedRating,e)
  };







  // geting list of unique list of ratins
  const [ratingData, setRatingData] = useState(uniqueRatingList);

 
  function getFields(field, data) {
    var output = [];
    for (var i = 0; i < data.length; ++i) output.push(data[i][field]);

    return output;
  }

  // main return screen start from here
  return (
    <View>
      <View style={styles.header}>
        <Pressable
          onPress={() => [
            setRnmodelvisible(true),
            
          ]}
          style={styles.headerItem}
        >
          <SelectorModal
            value={visitorSelectedRating}
            setValue={setRating}
            rnmodelvisible={rnmodelvisible}
            setRnmodelvisible={setRnmodelvisible}
            data={props.getFields("rating")}
            selectorName={"Rating"}
            priorityNumber={1}
          />

          <AntDesign name="star" size={20} color="black" />
          <Text>Rating : </Text>
          <Text>{visitorSelectedRating} </Text>
        </Pressable>

        <Pressable
          style={styles.headerItem}
          onPress={() => [setRnmodel2visible(true)]}
        >
          <SelectorModal
            value={visitorsMonthYearValue}
            setValue={setMonthYear}
            rnmodelvisible={rnmodel2visible}
            setRnmodelvisible={setRnmodel2visible}
            data={props.getMonthYear()}
            selectorName={"Month Year"}
            priorityNumber={2}
          />
          <AntDesign name="calendar" size={20} color="black" />
          <Text>Month-Year : </Text>
          <Text>{visitorsMonthYearValue} </Text>
        </Pressable>
      </View>

      {selectedVisitorsItems.length > 0 ? (
        <View>
          <View style={styles.header}>
            <Menu>
              <MenuTrigger>
                <View style={styles.headerItem}>
                  <AntDesign
                    style={styles.item}
                    name="checkcircle"
                    size={17}
                    color="black"
                  />
                  <Text style={styles.item}>
                    {selectedVisitorsItems.length}
                  </Text>
                </View>
              </MenuTrigger>
              <MenuOptions style={{ padding: 10, borderRadius: 10 }}>
                <MenuOption
                  onSelect={() =>[
                    dispatch(
                      setSelectedVisitorsItems(getFields("visitor_name", filterdVisitorsData))
                    ),console.log(getFields("phone", filterdVisitorsData))
                  ]
                  }
                  text="Select All Filtered data"
                />
                <MenuOption
                  onSelect={() =>
                    dispatch(setSelectedVisitorsItems(props.data))
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

            <View style={styles.headerItem}>
              <MaterialCommunityIcons name="delete" size={25} color="black" />
            </View>
          </View>
        </View>
      ) : (
        <Text></Text>
      )}
    </View>
  );
}

// stylesheet

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#CEE5D0",
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
  item: {
    paddingHorizontal: 2,
  },
});
