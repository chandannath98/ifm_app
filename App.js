import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Route from "./src/navigation/Router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
import { LogBox } from "react-native";
import { MenuProvider } from "react-native-popup-menu";
import React from 'react';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';



LogBox.ignoreLogs(["EventEmitter.removeListener"]);

export default function App() {
  const WindowWidth = Dimensions.get("window").width;
  

  return (
    <SafeAreaView style={[WindowWidth<600 ?styles.safeAreaViewStyleAndroid:styles.safeAreaViewStyleWeb, styles.container]}>
      <Provider store={Store}>
      <StatusBar backgroundColor="#CEE5D0" />
<MenuProvider>
     <Route/>
     </MenuProvider>
     </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewStyleAndroid: {
    paddingTop: Platform.os === "android" ? 25 : 0,
    
    paddingTop: 35,
    flex: 1,
    // backgroundColor: "#CEE5D0"
  },
  safeAreaViewStyleWeb: {
    // paddingTop: Platform.os === "android" ? 25 : 0,
    
    paddingTop: 2,
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
