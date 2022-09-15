import { StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";








// ***************Main Function***************
export default function HeaderforComponents(props) {
  const navigation = useNavigation();

  // *************header item**************

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
      }}
    >
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
        {props.item.map((i, index) => {
          return <View key={index}>{i}</View>;
        })}
      </View>
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
