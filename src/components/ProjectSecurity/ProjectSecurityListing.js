import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { getFields } from "../../CustomFunctions/CustomFunctions";
import ProjectSecurityGropingItem from "./ProjectSecurityGropingItem";
import { AntDesign } from "@expo/vector-icons";
import ProjectSecurityItems from "./ProjectSecurityItems";

// ******************Main Function*************************//

const ProjectSecurityListing = ({ navigation, route }) => {
  //   const monthNames = ["January", "February", "March", "April", "May", "June",
  //   "July", "August", "September", "October", "November", "December"
  // ];

  //   var data = route.params.securitydata.filter((item)=>{
  //     {
  //       return (monthNames[(new Date(item.date).getMonth() + 1)] + " - " + new Date(item.date).getFullYear().toString())===route.params.value

  //     }});

  //   var dates = getFields("date", data).filter(
  //     (item, i, ar) => ar.indexOf(item) === i
  //   );

  // const onpress=()=>{
  //   console.log("presssed")
  // }

  const data = [1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15,16,17,18,19,20];

const [filter, setFilter] = useState("All");

  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingBottom:10}}>

      
      <View style={styles.header}>
        <AntDesign name="calendar" size={25} color="#fff" />
        <Text style={styles.headertext}>20/03/2022</Text>
      </View>

      <View style={[styles.statusContainer]}>
        <Pressable onPress={()=>setFilter("All")} style={[styles.statusInnerContainer,filter==="All"?{backgroundColor:"black"}:{backgroundColor:"white"}]}>
          <Text style={[styles.visitedText,filter==="All"?{color:"white"}:{color:"black"}]}>All : </Text>
          <Text style={[styles.visitedText,filter==="All"?{color:"white"}:{color:"black"}]}>20</Text>
        </Pressable>
        <Pressable onPress={()=>setFilter("Visited")} style={[styles.statusInnerContainer,filter==="Visited"?{backgroundColor:"green"}:{backgroundColor:"white"}]}>
          <Text style={[styles.visitedText,filter==="Visited"?{color:"white"}:{color:"green"}]}>Visited : </Text>
          <Text style={[styles.visitedText,filter==="Visited"?{color:"white"}:{color:"green"}]}>5</Text>
        </Pressable>
        <Pressable onPress={()=>setFilter("NotVisited")} style={[styles.statusInnerContainer,filter==="NotVisited"?{backgroundColor:"red"}:{backgroundColor:"white"}]}>
          <Text style={[styles.notVisitedText,filter==="NotVisited"?{color:"white"}:{color:"red"}]}>Not Visited : </Text>
          <Text style={[styles.notVisitedText,filter==="NotVisited"?{color:"white"}:{color:"red"}]}>15</Text>
        </Pressable>
      </View>
      </View>
      <View
        style={
          {
            // paddingVertical:10
          }
        }
      >
        <FlatList
          data={data}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 300,
            // paddingTop:50,
            paddingHorizontal: 6,
          }}
          // stickyHeaderIndices={[0,6,10]}
          renderItem={({ item }) => (
            <View>
              <ProjectSecurityItems />
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
    borderRadius:15,
    paddingVertical:3,
    paddingHorizontal:10
  },
  visitedText: {
    color: "green",
    fontSize:15
  },
  notVisitedText: {
    color: "red",
    fontSize:15

  },
});

export default ProjectSecurityListing;
