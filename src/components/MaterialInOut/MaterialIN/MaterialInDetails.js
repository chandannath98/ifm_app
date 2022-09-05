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

// Platform

// ******************Main Function*************************//

const MaterialInDetails = ({ navigation, route }) => {
  const windowWidth = Dimensions.get("window").width;
  // const windowHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "#fff",
          margin: 25,
          borderRadius: 10,
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "rgb(0, 172, 194)",
            fontWeight: "bold",
            paddingVertical: 5,
          }}
        >
          10/11/2020
        </Text>
        <Text style={{ color: "grey", paddingVertical: 5 }}>10:10 AM</Text>
        <Text style={{ color: "grey", paddingVertical: 5 }}>
          Gate Pass ID:- OCMGPID-526
        </Text>
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
          <View
            style={{
              padding: 5,
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 10,
              marginHorizontal: 20,
              marginVertical: 10,
              paddingBottom: 20,
            }}
          >
            <Image
              style={{ height: 300, width: 300 }}
              source={{
                uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
              }}
            />
            <Text style={{ color: "grey", paddingVertical: 5 }}>
              Vehicle No. :-UK019A7443
            </Text>
          </View>
          <View
            style={{
              padding: 5,
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 10,
              marginHorizontal: 20,
              marginVertical: 10,
              paddingBottom: 20,
            }}
          >
            <Image
              style={{ height: 300, width: 300 }}
              source={{
                uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
              }}
            />
            <Text style={{ color: "grey", paddingVertical: 5 }}>
              Bill No. :-OCMGP-546
            </Text>
          </View>
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
});
export default MaterialInDetails;
