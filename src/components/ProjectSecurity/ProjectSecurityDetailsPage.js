import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  Platform,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { getFields } from "../../CustomFunctions/CustomFunctions";
import ProjectSecurityGropingItem from "./ProjectSecurityGropingItem";
import { AntDesign } from "@expo/vector-icons";
import ProjectSecurityItems from "./ProjectSecurityItems";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BottomSheet } from "react-native-btr";
import { SocialIcon } from "react-native-elements";

// ******************Main Function*************************//
const windowWidth = Dimensions.get("window").width;

const ProjectSecurityDetailsPage = ({ navigation, route }) => {
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BottomSheet
        visible={visible}
        //setting the visibility state of the bottom shee
        onBackButtonPress={toggleBottomNavigationView}
        //Toggling the visibility state on the click of the back botton
        onBackdropPress={toggleBottomNavigationView}
        //Toggling the visibility state on the clicking out side of the sheet
      >
        <View style={styles.bottomNavigationView}>
          <View
            style={{
              flex: 1,
              // flexDirection: 'column',
              // justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                textAlign: "center",
                padding: 20,
                fontSize: 25,
                color: "red",
                textDecorationLine: "underline",
                fontWeight:"bold"
              }}
            >
              Issue
            </Text>
            <Pressable style={{position:"absolute", top:5,right:10}} onPress={toggleBottomNavigationView}>
            <AntDesign  name="close" size={24} color="grey" />
            </Pressable>
            <View>
             

              <View>
                <View style={styles.modelInnerDetailContainer}>
                  <Text style={[styles.modelDetailText, styles.modelDetailKey]}>
                    {" "}
                    Category
                  </Text>
                  <Text
                    style={[styles.modelDetailText, styles.modelDetailValue]}
                  >
                    {" "}
                    Major
                  </Text>
                </View>
                <View style={styles.modelInnerDetailContainer}>
                  <Text style={[styles.modelDetailText, styles.modelDetailKey]}>
                    {" "}
                    Responsable Department
                  </Text>
                  <Text
                    style={[styles.modelDetailText, styles.modelDetailValue]}
                  >
                    {" "}
                    Maintainance
                  </Text>
                </View>
                <View style={styles.modelInnerDetailContainer}>
                  <Text style={[styles.modelDetailText, styles.modelDetailKey]}>
                    {" "}
                    Description of the issue
                  </Text>
                  <Text
                    style={[styles.modelDetailText, styles.modelDetailValue]}
                  >
                    {" "}
                    Issue Found
                  </Text>
                </View>
                <View style={styles.modelInnerDetailContainer}>
                  <Text style={[styles.modelDetailText, styles.modelDetailKey]}>
                    {" "}
                    Assigned To
                  </Text>
                  <Text
                    style={[styles.modelDetailText, styles.modelDetailValue]}
                  >
                    {" "}
                    Gulzar
                  </Text>
                </View>
                <View style={styles.modelInnerDetailContainer}>
                  <Text style={[styles.modelDetailText, styles.modelDetailKey]}>
                    {" "}
                    Issue Resolved
                  </Text>
                  <Text
                    style={[styles.modelDetailText, styles.modelDetailValue]}
                  >
                    {" "}
                    No
                  </Text>
                </View>
                <View style={styles.modelInnerDetailContainer}>
                  <Text style={[styles.modelDetailText, styles.modelDetailKey]}>
                    {" "}
                    Issue Resolved date and Time
                  </Text>
                  <Text
                    style={[styles.modelDetailText, styles.modelDetailValue]}
                  >
                    {" "}
                    04-02-2022 18:43:00
                  </Text>
                </View>
              </View>

              <TouchableOpacity onPress={toggleBottomNavigationView} style={styles.visitBtn}>
                <Text
                  style={{ textAlign: "center", color: "white", fontSize: 20 }}
                >
                  Mark Resolved{" "}
                  <AntDesign name="arrowright" size={24} color="white" />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </BottomSheet>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: "https://picsum.photos/1200/800" }}
          />
        </View>

        <View style={styles.areaContainer}>
          <Text style={styles.areaText}>FCA-00-001</Text>
        </View>
        <View style={styles.dateTimeContainer}>
          <Text style={styles.dateText}>01/01/2020</Text>
          <Text style={styles.dateText}>12:30 AM</Text>
        </View>

        {true ? (
          <TouchableOpacity
            onPress={toggleBottomNavigationView}
            style={styles.issueContainer}
          >
            <Text style={styles.issueText}>
              <AntDesign name="warning" size={24} color="white" /> Issue Found
            </Text>
          </TouchableOpacity>
        ) : (
          <View></View>
        )}

        <View style={styles.otherDetailsContainer}>
          <View style={styles.otherDetails}>
            <Text style={styles.OtherDetailKey}>Area Visited ? </Text>
            <Text style={styles.OtherDetailValue}>Yes </Text>
          </View>

          <View style={styles.otherDetails}>
            <Text style={styles.OtherDetailKey}>Name Of The Guard </Text>
            <Text style={styles.OtherDetailValue}>Manpreet</Text>
          </View>

          <View style={styles.otherDetails}>
            <Text style={styles.OtherDetailKey}>Any Issue Found ? </Text>
            <Text style={styles.OtherDetailValue}>No</Text>
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
  image: {
    borderRadius: 10,
    margin: 5,
    height: 300,
    width: windowWidth - 30,
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 15,
  },

  dateTimeContainer: {
    backgroundColor: "rgb(0, 172, 194)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 7,
    paddingHorizontal: 10,
  },
  dateText: {
    color: "white",
    fontSize: 16,
  },
  areaContainer: {
    margin: 30,
    alignItems: "center",
  },
  areaText: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold",
  },
  otherDetailsContainer: {
    margin: 20,

    padding: 10,
    backgroundColor: "#fff",

    borderRadius: 8,

    // elevation: 4,
    shadowColor: "grey",
    justifyContent: "space-around",
    // alignItems:"center",
    // width:"100%",
    // shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 5,
  },
  otherDetails: {
    marginVertical: 5,
    paddingVertical: 7,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  OtherDetailKey: {
    // display:"flex",
    flex: 6,
    flexWrap: "wrap",
    color: "grey",
    alignItems: "center",
    alignContent: "center",
    // width:"50%"
  },
  OtherDetailValue: {
    // display:"flex",
    flex: 6,
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
    paddingHorizontal: 10,
    // width:"50%"
  },
  editButton: {
    color: "rgb(0, 172, 194)",
    flex: 1,
    position: "absolute",
    justifyContent: "flex-end",
    bottom: 20,
    right: 20,
  },
  issueContainer: {
    backgroundColor: "red",
    padding: 10,
    margin: 10,
    borderRadius: 7,
    justifyContent: "center",
  },
  issueText: {
    color: "white",
    fontSize: 15,
    justifyContent: "center",
    fontWeight:"bold"
  },
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: 500,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  modelInnerDetailContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 10,
    paddingVertical: 15,
  },
  modelDetailText: {
    flex: 6,
    // color:"white",
    paddingHorizontal: 10,
    fontSize: 15,
  },
  modelDetailKey: {
    color: "grey",
  },
  modelDetailValue: {
    fontWeight: "bold",
  },
  visitBtn: {
    // position:"absolute",
    // bottom:-25,
    // left:5,
    marginHorizontal: 20,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 25,
    // textAlign:"center",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },
});

export default ProjectSecurityDetailsPage;
