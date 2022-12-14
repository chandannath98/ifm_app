import { useNavigation } from "@react-navigation/native";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import RNModal from "react-native-modal";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedVisitorsItems } from "../../redux/actions";
import { DateFormet } from "../../CustomFunctions/CustomFunctions";




const toTimeString=(time)=>{
  var timeValue= new Date(time)
  var hours = timeValue.getHours();
  var minutes = timeValue.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var timeString = hours + ':' + minutes + ' ' + ampm;
  return timeString
}





















const VisitorsItem = (props) => {
  const navigation = useNavigation();
  const [rnmodalvisible, setRnmodalvisible] = useState(false);
  const { selectedVisitorsItems } = useSelector(
    (state) => state.visitorReducer
  );
  const dispatch = useDispatch();

  const setlist = (item) => {
    var list = selectedVisitorsItems;

    if (list.includes(item)) {
      list = list.filter((i) => {
        return i != item;
      });
    } else {
      list.push(item);
    }
    dispatch(setSelectedVisitorsItems(list));
  };
















  return (
    <View>
      <View
        style={[
          selectedVisitorsItems.includes(props.item.visitor_name)
            ? styles.selected_listing_container
            : styles.listing_container,
          styles.shadowProp,
        ]}
      >
        {selectedVisitorsItems.includes(props.item.visitor_name) ? (
          <AntDesign name="checkcircle" size={15} color="rgb(0, 172, 194)" />
        ) : (
          <Text></Text>
        )}

        <TouchableOpacity
          style={[styles.listing_1container]}
          onPress={
            selectedVisitorsItems.length > 0
              ? () => {
                  setlist(props.item.visitor_name);
                }
              : () => {
                  navigation.navigate("PostDeatils", {
                    item: props.item,
                  });
                }
          }
        >
          <View style={styles.listing_inline_first_row}>
            <Text style={styles.listing_top_line}>
              {" "}
              {props.item.visitor_name}
            </Text>
            <Text> {DateFormet(props.item.date)}</Text>
          </View>
          <View style={styles.listing_inline_second_row}>
            <Text style={styles.listing_second_line}>{toTimeString(props.item.time_in)}</Text>
            <Text style={styles.listing_second_line}>
              {toTimeString(props.item.time_out)}
            </Text>
          </View>
          <View>
            <Text> {props.item.rating}</Text>
          </View>
        </TouchableOpacity>

        <Menu>
          <MenuTrigger>
            <Entypo name="dots-three-vertical" size={24} color="black" />
          </MenuTrigger>
          <MenuOptions style={{ padding: 10, borderRadius: 10 }}>
            <MenuOption
              onSelect={() => navigation.navigate("VisitorsForm", {
                item: props.item,
              })}
              text="Edit"
            />
            <MenuOption onSelect={() => setRnmodalvisible(true)}>
              <Text style={{ color: "red" }}>Delete</Text>
            </MenuOption>
            <MenuOption
              text="Select"
              onSelect={() => setlist(props.item.visitor_name)}
            />
          </MenuOptions>
        </Menu>
      </View>

      <RNModal
        isVisible={rnmodalvisible}
        animationIn={"zoomIn"}
        animationOut={"zoomOut"}
      >
        <View style={styles.rnmodalView}>
          <Text>Are You Sure ?</Text>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => {
              setRnmodalvisible(false);
            }}
          >
            <Text style={styles.modalButtonText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalCancelButton}
            onPress={() => {
              setRnmodalvisible(false);
            }}
          >
            <Text style={styles.modalButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </RNModal>
    </View>
  );
};

const styles = StyleSheet.create({
  listing_1container: {
    flex: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // backgroundColor:"white",
  },
  menuIcon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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

  selected_listing_container: {
    backgroundColor: "#e6f0e7",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    // backgroundColor:"white",
    // height:60,
    paddingVertical: 10,

    marginHorizontal: 10,
    paddingHorizontal: 10,
    // borderRadius:5,
    marginVertical: 1,
    // borderColor:"grey",
  },

  shadowProp: {
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },

  listing_inline_second_row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 2,
  },
  listing_inline_first_row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listing_top_line: {
    fontSize: 16,
    // fontWeight:"bold"
  },
  listing_second_line: {
    color: "rgb(0, 172, 194)",
  },
  rnmodalView: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 70,
    paddingVertical: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalButton: {
    backgroundColor: "red",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginLeft: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    position: "absolute",
    right: 5,
    bottom: 2,
    marginVertical: 3,
  },
  modalCancelButton: {
    backgroundColor: "grey",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginLeft: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    position: "absolute",
    right: 80,
    bottom: 2,
    marginVertical: 3,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 15,
  },
});

export default VisitorsItem;
export {toTimeString}