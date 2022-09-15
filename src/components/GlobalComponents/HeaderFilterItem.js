import {

  Platform,
  
  Text,
  View,
  FlatList,
 
} from "react-native";

import { AntDesign, Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { useRef } from "react";
import { rbSheetandBtnstyles } from "../rbSheetAndBtnStyle";










// *****************Main Function*********************
const HeaderFilterItem = (props) => {


  
  // ***************Use refs for bottom sheets***************

  const refRBSheet1 = useRef();
  const filterName = props.filterName;

  

  return (
    <View>
      <RBSheet
        ref={refRBSheet1}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={500}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(5, 5, 5, 0.32)",
            borderTopEndRadius: 15,
          },
          draggableIcon: {
            backgroundColor: "black",
            width: 70,
          },
          container: {
            borderTopEndRadius: 15,
            borderTopStartRadius: 15,
          },
        }}
      >
        <View style={{ flex: 1 }}>
          <View style={{ marginTop: 5, marginBottom: 15 }}>
            <Text style={{ alignSelf: "center", fontSize: 17, color: "grey" }}>
              {filterName}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              refRBSheet1.current.close();
            }}
            style={{
              backgroundColor: "#fff",
              borderRadius: 15,
              paddingHorizontal: 15,
              paddingVertical: 5,

              position: "absolute",
              top: -5,
              right: 5,
            }}
          >
            <Entypo name="cross" size={24} color="grey" />
          </TouchableOpacity>

          <View style={rbSheetandBtnstyles.selectorItemContainer}>
            <FlatList
              data={props.FilterList}
              contentContainerStyle={{ paddingBottom: 100 }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => [
                    refRBSheet1.current.close(),
                    props.filerOnSelectionFunctions(item),
                  ]}
                  style={
                    props.filterValue === item
                      ? rbSheetandBtnstyles.selecedItem
                      : rbSheetandBtnstyles.selecorItem
                  }
                >
                  <Text
                    style={[
                      { fontSize: 17 },

                      props.filterValue != item
                        ? { color: "rgba(97, 96, 96, 0.79)" }
                        : { color: "white" },
                    ]}
                  >
                    {item}
                  </Text>
                  <AntDesign name="checkcircle" size={24} color="white" />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </RBSheet>

      <TouchableOpacity
        onPress={() => refRBSheet1.current.open()}
        style={[
          {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 3,
            borderColor: "rgb(0, 172, 194)",
            borderWidth: 0.3,
            borderRadius: 15,
            maxWidth: 800,
            justifyContent: "center",
            paddingHorizontal: 10,
            marginHorizontal: 5,
          },
          Platform.OS === "web"
            ? { paddingHorizontal: 15 }
            : { paddingHorizontal: 10 },
        ]}
      >
        <Text style={{ fontSize: 17, color: "rgb(0, 172, 194)" }}>
          {props.filterValue}
        </Text>
        <Entypo name="chevron-down" size={17} color="rgb(0, 172, 194)" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderFilterItem;
