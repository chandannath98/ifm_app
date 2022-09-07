import React, { useRef } from "react";
import { View, Button,Text } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
 
export default function Example() {
  const refRBSheet = useRef();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        
      }}
    >
      <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={500}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
            borderTopEndRadius:15
          },
          draggableIcon: {
            backgroundColor: "black",
            width:70
            
          },
          container:{
            borderTopEndRadius:15,
            borderTopStartRadius:15
          }
        }}
      >
        <View style={{borderTopEndRadius:15}}>
            <Text>fdf</Text>
        </View>
      </RBSheet>
    </View>
  );
}