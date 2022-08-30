
import { Platform, SafeAreaView, StyleSheet, Text, View ,StatusBar} from "react-native";
import Route from "./src/navigation/Router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
import { LogBox } from "react-native";
import { MenuProvider } from "react-native-popup-menu";
import React from "react";
import { Provider } from "react-redux";
import { Store } from "./src/redux/store";
import { NativeBaseProvider } from 'native-base';


LogBox.ignoreLogs(["EventEmitter.removeListener"]);

export default function App() {
  const WindowWidth = Dimensions.get("window").width;

  return (
    <NativeBaseProvider>

    
    <View
      style={styles.safeAreaViewStyle}
    >
      <Provider store={Store}>
        <StatusBar backgroundColor="rgb(0, 172, 194)" />
        <MenuProvider>
          <Route />
        </MenuProvider>
      </Provider>
    </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
    paddingTop:1,
    backgroundColor:"rgb(0, 172, 194)",
    fontFamily: 'notoserif'
  },
  safeAreaViewStyleWeb: {
    // paddingTop: Platform.os === "android" ? 25 : 0,

    paddingTop: 2,
    flex: 1,
    // backgroundColor: "rgb(0, 172, 194)"
  },

  container: {
    backgroundColor: "black",
    color: "white",
    // justifyContent:"center",
  },
  
});
