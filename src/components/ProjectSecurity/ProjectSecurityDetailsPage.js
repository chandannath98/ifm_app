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
  Button
} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { getFields } from "../../CustomFunctions/CustomFunctions";
import ProjectSecurityGropingItem from "./ProjectSecurityGropingItem";
import { AntDesign } from "@expo/vector-icons";
import ProjectSecurityItems from "./ProjectSecurityItems";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BottomSheet } from 'react-native-btr'; 
import { SocialIcon } from 'react-native-elements';













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
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  padding: 20,
                  fontSize: 20,
                  color:"red"
                }}>
                Issue
              </Text>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                
              {/* "Category_of_the_issue": "Major",
        "Responsable_Department": "Maintenance",
        "Description_of_the_issue": "Test",
        "Assigned_To": "Gulzar",
        "Issue_Resolved?": "Yes",
        "Issue_Resolved_date_and_Time": "04-02-2022_18:43:00" */}

<View>
  <View style={{display:"flex", flexDirection:"row", justifyContent:"space-around",backgroundColor:"green"}}>
    <Text> Category</Text>
    <Text> Maintainance</Text>
  </View>
</View>








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

        {true? 
        <Pressable onPress={toggleBottomNavigationView} style={styles.issueContainer}>
          <Text style={styles.issueText}>
           
            <AntDesign name="warning" size={24} color="white" /> Issue Found
          </Text>
        </Pressable> : 
        <View></View>}

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
      <MaterialCommunityIcons
        name="circle-edit-outline"
        style={styles.editButton}
        size={55}
        color="black"
        onPress={() => {
          console.log("edit button pressed");
          // navigation.navigate("VisitorsForm", {
          //             item: item,
          //           })
        }}
      />
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
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProjectSecurityDetailsPage;
