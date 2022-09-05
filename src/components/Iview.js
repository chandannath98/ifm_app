// import { Button, View } from "native-base";
import { useState } from "react";
import { Pressable, View, Text } from "react-native";
// import ImageView from "react-native-image-viewing";
import { Modal } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function IView() {
  // useState
  const images = [
    {
      // Simplest usage.
      url: "https://picsum.photos/500/500",

      // width: number
      // height: number
      // Optional, if you know the image size, you can set the optimization performance

      // You can pass props to <Image />.
      props: {
        // headers: ...
      },
    },
  ];

  const [visible, setIsVisible] = useState(true);

  return (
    <View>
      <Pressable onPress={() => setIsVisible(true)}>
        <Text>fsdf</Text>
      </Pressable>

      <Modal transparent={true} visible={visible}>
        <View
          style={{
            flex: 1,
          }}
        >
          <TouchableOpacity
            onPress={() => setIsVisible(false)}
            style={{ position: "absolute", top: 10, right: 10, zIndex: 1 }}
          >
            <Entypo name="circle-with-cross" size={40} color="#dedcdc" />
          </TouchableOpacity>

          <ImageViewer
            saveToLocalByLongPress={false}
            enableSwipeDown
            imageUrls={images}
            onSwipeDown={() => setIsVisible(false)}
            backgroundColor="#fff"
          />
        </View>
      </Modal>
    </View>
  );
}
