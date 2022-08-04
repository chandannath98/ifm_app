import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Route from "./src/navigation/Router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  

  return (
    <SafeAreaView style={[styles.safeAreaViewStyle, styles.container]}>
      <StatusBar backgroundColor="#CEE5D0" />

     <Route/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    paddingTop: Platform.os === "android" ? 25 : 0,
    paddingTop: 35,
    flex: 1,
    // backgroundColor: "#CEE5D0"
  },

  container: {
    
    backgroundColor: "#CEE5D0",
    color: "white",
    // justifyContent:"center",
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
});
