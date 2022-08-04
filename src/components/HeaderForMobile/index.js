
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function HeaderForMobile() {
  return (
    

      <View style={styles.header}>
        <View style={styles.headerItem}>
          <AntDesign name="star" size={24} color="black" />
          <Text>Rating : </Text>
          <Text>⭐⭐ </Text>
        </View>
        <View style={styles.headerItem}>
          <AntDesign name="calendar" size={24} color="black" />
          <Text>Month-Year : </Text>
          <Text>June-2022 </Text>
        </View>
      </View>
      
  );
}

const styles = StyleSheet.create({
 

  
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor:"#CEE5D0",

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
});
