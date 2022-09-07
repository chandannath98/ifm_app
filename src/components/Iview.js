// import { Button, View } from "native-base";
import { useState } from "react";
import { Pressable, View, Text } from "react-native";
// import ImageView from "react-native-image-viewing";
import { Modal } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function IView({navigation,route}) {
  // useState
  const images = route.params.images


  return (
    <View style={{
      flex: 1,
    }}>
      {/* <Pressable onPress={() => setIsVisible(true)}>
        <Text>fsdf</Text>
      </Pressable>

      <Modal transparent={true} visible={visible}> */}
        <View
          style={{
            flex: 1,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack(null)}
            style={{ position: "absolute", top: 10, right: 10, zIndex: 1 }}
          >
            <Entypo name="circle-with-cross" size={40} color="#dedcdc" />
          </TouchableOpacity>

          <ImageViewer
            saveToLocalByLongPress={false}
            enableSwipeDown
            imageUrls={images}
            onSwipeDown={() => navigation.goBack(null)}
            backgroundColor="#fff"
          />
        </View>
      {/* </Modal> */}
    </View>
  );
}
