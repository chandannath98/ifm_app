import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { getFields } from "../../CustomFunctions/CustomFunctions";
import ProjectSecurityGropingItem from "./ProjectSecurityGropingItem";
import { AntDesign } from "@expo/vector-icons";
import ProjectSecurityItems from "./ProjectSecurityItems";
import { Button } from "react-native";

// ******************Main Function*************************//

const ProjectSecurityListing = ({ navigation, route }) => {
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.buttonHeader}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.TopHeaderText}>Home</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const [filteredData, setFilteredData] = useState([]);

  var data = route.params.data.filter((item) => {
    {
      return item.date === route.params.value;
    }
  });

  var visitedData = data.filter((item) => {
    {
      return item.Name_of_the_guard;
    }
  });

  var notVisitedData = data.filter((item) => {
    {
      return !item.Name_of_the_guard;
    }
  });

  const dataValues = () => {
    if (filter === "All") {
      return data;
    } else if (filter === "Visited") {
      return visitedData;
    } else {
      return notVisitedData;
    }
  };

  const [filter, setFilter] = useState("All");

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingBottom: 10 }}>
        <View style={styles.header}>
          <AntDesign name="calendar" size={25} color="#fff" />
          <Text style={styles.headertext}>{route.params.value}</Text>
        </View>

        <View style={[styles.statusContainer]}>
          <Pressable
            onPress={() => setFilter("All")}
            style={[
              styles.statusInnerContainer,
              { borderBottomColor: "black", borderWidth: 0.5 },
              filter === "All"
                ? { backgroundColor: "black" }
                : { backgroundColor: "white" },
            ]}
          >
            <Text
              style={[
                styles.visitedText,
                filter === "All" ? { color: "white" } : { color: "black" },
              ]}
            >
              All :{" "}
            </Text>
            <Text
              style={[
                styles.visitedText,
                filter === "All" ? { color: "white" } : { color: "black" },
              ]}
            >
              {data.length}
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setFilter("Visited")}
            style={[
              styles.statusInnerContainer,
              { borderColor: "green", borderWidth: 0.5 },
              filter === "Visited"
                ? { backgroundColor: "green" }
                : { backgroundColor: "white" },
            ]}
          >
            <Text
              style={[
                styles.visitedText,
                filter === "Visited" ? { color: "white" } : { color: "green" },
              ]}
            >
              Visited :{" "}
            </Text>
            <Text
              style={[
                styles.visitedText,
                filter === "Visited" ? { color: "white" } : { color: "green" },
              ]}
            >
              {visitedData.length}
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setFilter("NotVisited")}
            style={[
              styles.statusInnerContainer,
              { borderColor: "red", borderWidth: 0.5 },
              filter === "NotVisited"
                ? { backgroundColor: "red" }
                : { backgroundColor: "white" },
            ]}
          >
            <Text
              style={[
                styles.notVisitedText,
                filter === "NotVisited" ? { color: "white" } : { color: "red" },
              ]}
            >
              Not Visited :{" "}
            </Text>
            <Text
              style={[
                styles.notVisitedText,
                filter === "NotVisited" ? { color: "white" } : { color: "red" },
              ]}
            >
              {notVisitedData.length}
            </Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <FlatList
          data={dataValues()}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 300,
            // paddingTop:50,
            paddingHorizontal: 6,
          }}
          // stickyHeaderIndices={[0,6,10]}
          renderItem={({ item }) => (
            <View>
              <ProjectSecurityItems item={item} />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  header: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    margin: 10,
    backgroundColor: "rgb(0, 172, 194)",
    borderRadius: 10,
  },
  headertext: {
    fontSize: 25,
    color: "#fff",
  },
  statusContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 5,
  },
  statusInnerContainer: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 15,
    paddingVertical: 3,
    paddingHorizontal: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  visitedText: {
    color: "green",
    fontSize: 15,
  },
  notVisitedText: {
    color: "red",
    fontSize: 15,
  },
  buttonHeader: {
    // backgroundColor:"red",
    marginHorizontal: 15,
  },
  TopHeaderText: {
    color: "rgb(0, 172, 194)",
    fontSize: 17,
    textDecorationLine: "underline",
  },
});

export default ProjectSecurityListing;
