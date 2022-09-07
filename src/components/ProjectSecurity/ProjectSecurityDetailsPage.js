import React, { useState,useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  
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
import RBSheet from "react-native-raw-bottom-sheet";
import { Platform } from "react-native";













const windowWidth = Dimensions.get("window").width;



// ******************Main Function*************************//







const ProjectSecurityDetailsPage = ({ navigation, route }) => {

  // Platform
console.log(Platform)
console.log(windowWidth)
  const refRBSheet = useRef();


const item= route.params.item

  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };

  return (
    <SafeAreaView style={styles.container}>



      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={550}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(5, 5, 5, 0.32)",
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

        <ScrollView style={styles.bottomNavigationView}>
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
            <Pressable style={{position:"absolute", top:5,right:10}} onPress={()=>refRBSheet.current.close()}>
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
                    {item.Category_of_the_issue}
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
                    {item.Responsable_Department}
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
                    {item.Description_of_the_issue}
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
                    {item.Assigned_To}
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
                    {item.Issue_Resolved}
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
                    {item.Issue_Resolved_date_and_Time}
                  </Text>
                </View>
              </View>

              <TouchableOpacity onPress={()=>refRBSheet.current.close()} style={styles.visitBtn}>
                <Text
                  style={{ textAlign: "center", color: "white", fontSize: 20 }}
                >
                  Mark Resolved{" "}
                  <AntDesign name="arrowright" size={24} color="white" />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </RBSheet>






{/* ***********Main View ******************** */}




      <View showsVerticalScrollIndicator={false} style={((Platform.OS === "web") & (windowWidth > 800))?{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}:{flex:1}}>
        <TouchableOpacity style={styles.imageContainer} 
        onPress={() => navigation.navigate('ImageV',{
                    images:[
                      {
                        // Simplest usage.
                        url: "https://picsum.photos/1200/800",
                  
                        // width: number
                        // height: number
                        // Optional, if you know the image size, you can set the optimization performance
                  
                        // You can pass props to <Image />.
                        props: {
                          // headers: ...
                        },
                      },
                    ]})} >
          <Image
            style={[styles.image,]}
            source={{ uri: "https://picsum.photos/1200/800" }}
            
          />
        </TouchableOpacity>
<View style={{minWidth:350}}>


        <View style={styles.areaContainer}>
          <Text style={styles.areaText}>{item.Area_visited}</Text>
        </View>
        <View style={styles.dateTimeContainer}>
          <Text style={styles.dateText}>{item.date}</Text>
          <Text style={styles.dateText}>12:30 AM</Text>
        </View>

        {item.Any_issue_found==="Yes" ? (
          <TouchableOpacity
            onPress={()=>refRBSheet.current.open()}
            style={styles.issueContainer}
          >
            <Text style={styles.issueText}>
              <AntDesign name="warning" size={24} color="white" /> {item.Description_of_the_issue}
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
            <Text style={styles.OtherDetailValue}>{item.Name_of_the_guard}</Text>
          </View>

          {/* <View style={styles.otherDetails}>
            <Text style={styles.OtherDetailKey}>Any Issue Found ? </Text>
            <Text style={styles.OtherDetailValue}>No</Text>
          </View> */}
        </View>
        </View>
      </View>
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
    height: ((Platform.OS === "web") & (windowWidth > 800))?500:windowWidth-50,
    width: ((Platform.OS === "web") & (windowWidth > 800))?500:windowWidth-50,
    alignItems:"center"
    
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
