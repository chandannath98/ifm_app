import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  Dimensions,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Image } from "react-native";
import { ScrollView } from "react-native";
import { Platform } from "react-native";

// ******************Main Function*************************//

const MaterialOutDetails = ({ navigation, route }) => {
  const windowWidth = Dimensions.get("window").width;
  // const windowHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "#fff",
          marginHorizontal: 25,
          marginVertical: 10,
          borderRadius: 10,
          padding: 10,
          maxWidth: 400,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "rgb(0, 172, 194)",
            fontWeight: "bold",
            paddingVertical: 5,
          }}
        >
          10/11/2020 10:20 AM
        </Text>

        <Text style={{ color: "grey", paddingVertical: 5, fontWeight: "bold" }}>
          Material:- Brics
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          marginHorizontal: 25,
          marginVertical: 10,
          borderRadius: 10,
          padding: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",

          //   maxWidth:400
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={styles.QtyitemValue}>50 PCS</Text>

          <Text style={styles.QitemKey}>Quantity</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.QtyitemValue}>40 PCS</Text>

          <Text style={styles.QitemKey}>Returned Quantity</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.QtyitemValue}>10 PCS</Text>

          <Text style={styles.QitemKey}>Balance Quantity</Text>
        </View>
      </View>

      <ScrollView>
        <View
          style={[
            { padding: 5, display: "flex", alignItems: "center" },
            (Platform.OS === "web") & (windowWidth > 800)
              ? { flexDirection: "row" }
              : { flexDirection: "column" },
          ]}
        >

<View style={styles.Card}>
            <View style={{ minHeight: 100, width: 300 }}>


              <View
                style={{ display: "flex", flexDirection: "row", padding: 10 }}
              >
                <Text style={{ flex: 3, color: "grey" }}>Guard Name : </Text>
                <Text style={{ flex: 3, color: "rgb(0, 172, 194)" }}>
                  Gurdeep Singh
                </Text>
              </View>

              <View
                style={{ display: "flex", flexDirection: "row", padding: 10 }}
              >
                <Text style={{ flex: 3, color: "grey" }}>Gate Pass ID : </Text>
                <Text style={{ flex: 3, color: "rgb(0, 172, 194)" }}>
                  OCM-GPMO-25
                </Text>
              </View>


              <View style={{ padding: 10 }}>
                <Text style={{ color: "grey", paddingVertical: 5 }}>
                  Comment{" "}
                </Text>
                <Text>For Repairing</Text>
              </View>
            </View>
          </View>


          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ImageV", {
                images: [
                  {
                    // Simplest usage.
                    url: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",

                    // width: number
                    // height: number
                    // Optional, if you know the image size, you can set the optimization performance

                    // You can pass props to <Image />.
                    props: {
                      // headers: ...
                    },
                  },
                ],
              })
            }
            style={styles.imageCard}
          >
            <Image
              style={{ height: 300, width: 300 }}
              source={{
                uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
              }}
            />
            
          </TouchableOpacity>

          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  imageCard: {
    padding: 5,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    
  },
  Card: {
    padding: 20,

    backgroundColor: "#fff",
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    
  },
  QtyitemValue: {
    fontSize: 13,
    color: "rgb(0, 172, 194)",
    fontWeight: "bold",
    paddingVertical: 5,
  },
  QitemKey: { color: "grey", paddingVertical: 5 },
});
export default MaterialOutDetails;
