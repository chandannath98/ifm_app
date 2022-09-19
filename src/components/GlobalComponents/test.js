import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import{signal} from "@preact/signals-react"
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";







// ***************Main Function***************
 function test(props) {
  
const count = signal("0")

  const [first, setFirst] = useState("a")




 console.log("render")



  return (
    <View
      style={{
        flex:1
      }}
    >
     <Text>{count}</Text>

<TouchableOpacity >
    <TextInput  onChangeText={(e)=>count.value=e}/>
</TouchableOpacity>
<Text>{first}</Text>

<TouchableOpacity >
    <TextInput  onChangeText={(e)=>setFirst(e)}/>
</TouchableOpacity>
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





export default React.memo(test)