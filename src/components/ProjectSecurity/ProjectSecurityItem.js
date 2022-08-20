import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { getFields } from "../../CustomFunctions/CustomFunctions";
import { projectSecurityData } from "./projectsecuritydata";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

var data = projectSecurityData;

var dates = getFields("Date", data).filter(
  (item, i, ar) => ar.indexOf(item) === i
);

// ******************Main Function*************************

const ProjectSecurityItem = (props) => {

  const navigation = useNavigation();

return(

  <View>
    <Pressable
      onPress={() => {
        navigation.navigate("Project Security Date Wise", {
          securitydata: props.securitydata,
          data: props.data,
          value: props.value,
        });
      }}
      style={styles.item}
    >
      <Text style={styles.textStyle}>{props.item}</Text>
      <AntDesign name="right" size={20} color="black" />
    </Pressable>
  </View>
)};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 2,
    borderRadius: 6,
  },
});

export default ProjectSecurityItem;
