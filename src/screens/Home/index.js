
import { Button, Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Visitors_List from "../../components/Visitors_View";
import HeaderForMobile from "../../components/HeaderForMobile";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";



export default function Home() {
  return (
    <View style={[styles.safeAreaViewStyle]}>
      <HeaderForMobile/>
    <ScrollView >

      <Visitors_List />
      <Visitors_List />
      <Visitors_List />
      <Visitors_List />
      <Visitors_List />
      <Visitors_List />
      <Visitors_List />
      <Visitors_List />
      <Visitors_List />
      <Visitors_List />
     
    </ScrollView>
    <AntDesign style={styles.addButton} name="pluscircle" size={55} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaViewStyle: {    
    flex: 1,
    // backgroundColor: "#CEE5D0",
  },

 
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    // backgroundColor:"white",
    // marginHorizontal:10
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
  addButton:{
    color:"#5ba662",
    flex: 1,
    position:"absolute",
    justifyContent: 'flex-end',
    bottom:20,
    right:20
  }
});
