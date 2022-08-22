import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";



// ******************Main Function*************************

const ProjectSecurityGropingItem = (props) => {


return(

  <View>
    <Pressable
      onPress={() => props.onpress()}
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

export default ProjectSecurityGropingItem;
