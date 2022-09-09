import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  Platform,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { allUnitList } from "./allUnitList";
import { Entypo } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";





// ******************Main Function*************************//

const ProjectSecurityForm = (props) => {
  const alldata = allUnitList;
  const [data, setdata] = useState(alldata);
  const refRBSheet1 = useRef();
  const refRBSheet2 = useRef();

  // const uniqueProjects = [...new Set(data.map(item => item.Project))]

  const uniqueProjects = data
    .map((item) => item.Project)
    .filter((value, index, self) => self.indexOf(value) === index);

  // const uniqueTowers = [...new Set(data.map(item => item.Location))]
  const [project, setProject] = useState("Rise");
  const [tower, setTower] = useState("Tower");

  const getuniqueLocations = () => {
    var uniqueTowers = data
      .filter((item) => {
        return item.Project === project || project === "Project";
      })
      .map((item) => item.Location)
      .filter((value, index, self) => self.indexOf(value) === index);

    return uniqueTowers;
  };

  const [uniqueLocations, setUniqueLocations] = useState(getuniqueLocations());

  const [location, setLocation] = useState("Location");

  const [filteredData, setFilteredData] = useState(data);

  const filterdata = (project, location) => {
    if ((project === "Project") & (location === "Location")) {
      setFilteredData(data);
    } else if ((project === "Project") & (location != "Location")) {
      var fdata = data.filter((item) => {
        return item.location === location;
      });
      setFilteredData(fdata);
    } else if ((project != "Project") & (location === "Location")) {
      var fdata = data.filter((item) => {
        return item.location === location;
      });
      setFilteredData(fdata);
    } else {
      var fdata = data.filter((item) => {
        return (item.location === location) & (item.Project === project);
      });
      setFilteredData(fdata);
    }
  };




  const listHeader = () => {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginHorizontal: 10,
          margin: 15,
        }}
      >
        <TouchableOpacity
        onPress={()=>refRBSheet1.current.open()}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 3,
            borderColor: "grey",
            borderWidth: 0.3,
            borderRadius: 15,
            maxWidth: 100,
            justifyContent: "center",
            paddingHorizontal: 10,
            marginHorizontal: 10,
          }}
        >
          <Text style={{ fontSize: 17 }}>Project</Text>
          <Entypo name="chevron-down" size={17} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>refRBSheet2.current.open()}

          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 3,
            borderColor: "grey",
            borderWidth: 0.3,
            borderRadius: 15,
            maxWidth: 100,
            justifyContent: "center",
            paddingHorizontal: 10,
          }}
        >
          <Text style={{ fontSize: 17 }}>Tower</Text>
          <Entypo name="chevron-down" size={17} color="black" />
        </TouchableOpacity>











      </View>
    );
  };

  return (
    <View style={[styles.container]}>






<RBSheet
        ref={refRBSheet1}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={400}
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

<View>
  <Text>Project</Text>
</View>


      </RBSheet>






<RBSheet
        ref={refRBSheet2}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={400}
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

<View>
  <Text>Location</Text>
</View>


      </RBSheet>









      <FlatList
        data={data}
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 12,
              paddingHorizontal: 20,
              borderColor: "rgba(242, 238, 240, 0.8)",
              borderWidth: 0.2,
            }}
          >
            <Text>{item.unit_No}</Text>
            <AntDesign name="checkcircle" size={24} color="rgb(0, 172, 194)" />
          </TouchableOpacity>
        )}
        ListHeaderComponent={listHeader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ProjectSecurityForm;
