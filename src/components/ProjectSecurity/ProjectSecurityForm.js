// **********Imports********************


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
import { Ionicons } from '@expo/vector-icons';








// ******************Main Function*************************//

const ProjectSecurityForm = ({navigation,route}) => {



  








  // ***********States and data****************
  const alldata = allUnitList;
  const [data, setdata] = useState(alldata);
  const refRBSheet1 = useRef();
  const refRBSheet2 = useRef();
  const refRBSheet3 = useRef();


  const uniqueProjects = [
    "Commercial 1",
    "Commercial 5",
    "Commercial 6",
    "Rise",
    "Hamlet",
    "Hub",
  ];

  const [project, setProject] = useState("Project");
  const [tower, setTower] = useState("Tower");


// **********Function for geting unique location****************


  const getuniqueLocations = (proj) => {
    var uniqueTowers = data
      .filter((item) => {
        return item.Project === proj || proj === "Project";
      })
      .map((item) => item.Location)
      .filter((value, index, self) => self.indexOf(value) === index);

    return uniqueTowers;
  };

// **********unique locations state****************


  const [uniqueLocations, setUniqueLocations] = useState(
    getuniqueLocations("Project")
  );

// **********location value state****************

  const [location, setLocation] = useState("Location");


// **********filtered data, serach value and selected unit states state****************

  const [filteredData, setFilteredData] = useState(data);
  const [searchFilterValue, setSearchFilterValue] = useState("");
  const [seletedUnits, setseletedUnits] = useState([]);




// **********Function for filter data by selecting project and location****************




  const filterdata = (project, location) => {
    if ((project === "Project") & (location === "Location")) {
      setFilteredData(data);
    } else if ((project === "Project") & (location != "Location")) {
      var fdata = data.filter((item) => {
        return item.Location === location;
      });
      setFilteredData(fdata);
    } else if ((project != "Project") & (location === "Location")) {
      var fdata = data.filter((item) => {
        return item.Project === project;
      });
      setFilteredData(fdata);
    } else {
      var fdata = data.filter((item) => {
        return (item.Location === location) & (item.Project === project);
      });
      setFilteredData(fdata);
    }
  };




// **********Functions for selecting project and locatuions****************

  const onProductChange = (item) => {
    refRBSheet1.current.close();
    setProject(item);
    setLocation("Location");
    setUniqueLocations(getuniqueLocations(item));
    filterdata(item, "Location");
  };
  const onchangeLocation = (item) => {
    refRBSheet2.current.close();

    setLocation(item);
    filterdata(project, item);
  };



// **********Function for search filter****************


  const searchfilter = (value) => {
    setProject("Project");
    setLocation("Location");
    const newFilteredData = data.filter((item) => {
      return item.unit_No.toLowerCase().includes(value.toLowerCase());
    });

    setFilteredData(newFilteredData);
  };



// **********Flatlist header component****************



  



// *******************************
// *******************************
// *******************************
// *******************************
// **********Main retrun Funtion****************
// *******************************
// *******************************
// *******************************





  return (
    <View style={[styles.container]}>


{/* *****
**********Selected units count************
*********  */}
{seletedUnits.length>0?
  <TouchableOpacity
  onPress={() => refRBSheet3.current.open()}
  
  style={{position:"absolute",top:60,right:10,display:"flex",flexDirection:"row",backgroundColor:"rgb(0, 172, 194)",maxWidth:300,borderRadius:15,paddingHorizontal:15,paddingVertical:2,zIndex:1}}>
  <Text style={{color:"white"}}>Selected Units : </Text>
  <Text style={{color:"white"}}>{seletedUnits.length}</Text>
</TouchableOpacity>:
<Text></Text>
}









{/* *****
***********Header*********
****** */}


<View style={{display:"flex",flexDirection:"row"}}>
<Ionicons onPress={()=>navigation.goBack(null)}  style={{flex:1,alignSelf:"center",paddingHorizontal:2}} name="arrow-back-outline" size={25} color="black" />

<View style={{
          display: "flex",
          flexDirection: "row",
          marginHorizontal: 10,
          margin: 15,
          flex:20,
          justifyContent:"space-between"
        }}>


<View
        style={{
          display: "flex",
          flexDirection: "row",
        
        }}
      >
        <TouchableOpacity
          onPress={() => refRBSheet1.current.open()}
          style={[{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 3,
            borderColor: "grey",
            borderWidth: 0.3,
            borderRadius: 15,
            maxWidth: 800,
            justifyContent: "center",
            paddingHorizontal: 10,
            marginHorizontal: 10,
            
          },Platform.OS === "web" ? {paddingHorizontal:15 } : { paddingHorizontal: 10, }]}
        >
          <Text style={{ fontSize: 17, }}>{project}</Text>
          <Entypo  name="chevron-down" size={17} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => refRBSheet2.current.open()}
          style={[{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 3,
            borderColor: "grey",
            borderWidth: 0.3,
            borderRadius: 15,
            maxWidth: 200,
            justifyContent: "center",
            paddingHorizontal: 10,
            
          },Platform.OS === "web" ? {paddingHorizontal:15 } : { paddingHorizontal: 10, }]}
        >
          <Text style={{ fontSize: 17 }}>{location}</Text>
          <Entypo  name="chevron-down" size={17} color="black" />
        </TouchableOpacity>

        </View>

{/* ***
***********Text Input for search*************
**** */}

<View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: 3,
          borderColor: "grey",
          borderWidth: 0.3,
          borderRadius: 15,
          maxWidth: 400,
          minWidth: 100,
          justifyContent: "center",
          paddingHorizontal: 10,
          marginHorizontal: 5,
          
          marginHorizontal:3
          
        }}
      >
        <TextInput
          value={searchFilterValue}
          onChangeText={(e) => [setSearchFilterValue(e), searchfilter(e)]}
          style={[
            { flex: 9, paddingHorizontal: 5 },
            Platform.OS === "web" ? { outlineStyle: "none" } : { flex: 10 },
          ]}
        />
        <AntDesign name="search1" size={17} color="black" style={{ flex: 3 }} />
        <TouchableOpacity>
          <Text></Text>
        </TouchableOpacity>
      </View>




      </View>
</View>








     {/* *****
     ********Bottom sheet popup 1*************
     ***** */}





      <RBSheet
        ref={refRBSheet1}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={400}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(5, 5, 5, 0.32)",
            borderTopEndRadius: 15,
          },
          draggableIcon: {
            backgroundColor: "black",
            width: 70,
          },
          container: {
            borderTopEndRadius: 15,
            borderTopStartRadius: 15,
            
          },
        }}
      >
        <View>
          <View style={{ marginTop: 5, marginBottom: 15 }}>
            <Text style={{ alignSelf: "center", fontSize: 17, color: "grey" }}>
              Projects
            </Text>
          </View>


          <TouchableOpacity
         onPress={() => {refRBSheet1.current.close()}}

          style={{
            backgroundColor: "#fff",
            borderRadius: 15,
            paddingHorizontal: 15,
            paddingVertical: 5,
            
            position:"absolute",
            top:-5,
            right:5
          }}
        >
         <Entypo name="cross" size={24} color="grey" />
        </TouchableOpacity>



          <View style={styles.selectorItemContainer}>
            <TouchableOpacity
              onPress={() => onProductChange("Project")}
              style={
                project === "Project" ? styles.selecedItem : styles.selecorItem
              }
            >
              <Text
                style={[
                  { fontSize: 17 },

                  project != "Project"
                    ? { color: "rgba(97, 96, 96, 0.79)" }
                    : { color: "white" },
                ]}
              >
                All
              </Text>
              <AntDesign name="checkcircle" size={24} color="white" />
            </TouchableOpacity>


<View >


            <FlatList
           
              data={uniqueProjects}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => onProductChange(item)}
                  style={
                    project === item ? styles.selecedItem : styles.selecorItem
                  }
                >
                  <Text
                    style={[
                      { fontSize: 17 },

                      project != item
                        ? { color: "rgba(97, 96, 96, 0.79)" }
                        : { color: "white" },
                    ]}
                  >
                    {item}
                  </Text>
                  <AntDesign name="checkcircle" size={24} color="white" />
                </TouchableOpacity>
              )}
            />
            </View>
          </View>
        </View>
      </RBSheet>




      {/* ******
      *******Bottom sheet popup 2**********
      ******** */}






      <RBSheet
        ref={refRBSheet2}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={800}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(5, 5, 5, 0.32)",
            borderTopEndRadius: 15,
          },
          draggableIcon: {
            backgroundColor: "black",
            width: 70,
          },
          container: {
            borderTopEndRadius: 15,
            borderTopStartRadius: 15,
           
           

          },
        }}
      >
        <View style={{flex:1}}>
          <View style={{ marginTop: 5, marginBottom: 15 }}>
            <Text style={{ alignSelf: "center", fontSize: 17, color: "grey" }}>
              Towers/Locations
            </Text>
          </View>


          <TouchableOpacity
         onPress={() => {refRBSheet2.current.close()}}

          style={{
            backgroundColor: "#fff",
            borderRadius: 15,
            paddingHorizontal: 15,
            paddingVertical: 5,
           
            position:"absolute",
            top:-5,
            right:5
          }}
        >
                   <Entypo name="cross" size={24} color="grey" />

        </TouchableOpacity>




          <View style={styles.selectorItemContainer}>
            
            <TouchableOpacity
              onPress={() => onchangeLocation("Location")}
              style={
                location === "Location"
                  ? styles.selecedItem
                  : styles.selecorItem
              }
            >
              <Text
                style={[
                  { fontSize: 17 },

                  location != "Location"
                    ? { color: "rgba(97, 96, 96, 0.79)" }
                    : { color: "white" },
                ]}
              >
                All
              </Text>
              <AntDesign name="checkcircle" size={24} color="white" />
            </TouchableOpacity>









            <FlatList
            
              data={uniqueLocations}
              contentContainerStyle={{ paddingBottom: 400 }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => onchangeLocation(item)}
                  style={
                    location === item ? styles.selecedItem : styles.selecorItem
                  }
                >
                  <Text
                    style={[
                      { fontSize: 17 },

                      location != item
                        ? { color: "rgba(97, 96, 96, 0.79)" }
                        : { color: "white" },
                    ]}
                  >
                    {item}
                  </Text>
                  <AntDesign name="checkcircle" size={24} color="white" />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </RBSheet>



      {/* ******
      *******Bottom sheet popup 3**********
      ******** */}






      <RBSheet
        ref={refRBSheet3}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={600}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(5, 5, 5, 0.32)",
            borderTopEndRadius: 15,
          },
          draggableIcon: {
            backgroundColor: "black",
            width: 70,
          },
          container: {
            borderTopEndRadius: 15,
            borderTopStartRadius: 15,
          },
        }}
      >
        <View>

        

          <View style={{ marginTop: 5, marginBottom: 15 }}>
            <Text style={{ alignSelf: "center", fontSize: 17, color: "grey" }}>
              Selected Units
            </Text>
          </View>


          <View
        style={{
          position:"absolute",
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-between",
         
          padding: 10,
          marginHorizontal: 10,
          right: 5,
          left:5,
          
top:-10,
// maxWidth:200
        }}
      >
       
        <TouchableOpacity
         onPress={() => {refRBSheet3.current.close()}}

          style={{
            backgroundColor: "#fff",
            borderRadius: 15,
            paddingHorizontal: 15,
            paddingVertical: 5,
            borderColor:"rgb(0, 172, 194)",
            borderWidth:0.3
          }}
        >
          <Text style={{ fontSize: 17, color: "rgb(0, 172, 194)" }}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={() => {refRBSheet3.current.close(),navigation.goBack(null)}}

          style={{
            backgroundColor: "rgb(0, 172, 194)",
            borderRadius: 15,
            paddingHorizontal: 15,
            paddingVertical: 5,
          }}
        >
          <Text style={{ fontSize: 17, color: "white" }}>Add Keys</Text>
        </TouchableOpacity>
      </View>





          <View style={styles.selectorItemContainer}>
           


          <FlatList
        data={seletedUnits}
        contentContainerStyle={{ paddingBottom: 300 }}
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
            onPress={() => {
                var arr = seletedUnits;
                setseletedUnits(arr.filter((e) => e !== item));
             
            }}
          >
            <Text>{item}</Text>
            {seletedUnits.includes(item) ? (
              <AntDesign
                name="checkcircle"
                size={24}
                color="rgb(0, 172, 194)"
              />
            ) : (
              <Text></Text>
            )}
          </TouchableOpacity>
        )}
       
      />




          </View>
        </View>
      </RBSheet>




      {/* *******************************
      *************Main Units List******************
      ******************************* */}







      <FlatList
        data={filteredData}
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
            onPress={() => {
              if (seletedUnits.includes(item.unit_No)) {
                var arr = seletedUnits;

                setseletedUnits(arr.filter((e) => e !== item.unit_No));
              } else {
                setseletedUnits((oldArray) => [...oldArray, item.unit_No]);
              }
            }}
          >
            <Text>{item.unit_No}</Text>
            {seletedUnits.includes(item.unit_No) ? (
              <AntDesign
                name="checkcircle"
                size={24}
                color="rgb(0, 172, 194)"
              />
            ) : (
              <Text></Text>
            )}
          </TouchableOpacity>
        )}
       
      />


{/* *************
Save and Cancel Button****
************** */}



      <View
        style={{
          position: "absolute",
          bottom: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#fff",
          padding: 10,
          marginHorizontal: 10,
          right: 5,
          left: 5,
        }}
      >
        <TouchableOpacity
        onPress={()=>navigation.goBack(null)}
          style={{
            borderColor: "rgb(0, 172, 194)",
            borderWidth: 0.3,
            borderRadius: 15,
            paddingHorizontal: 15,
            paddingVertical: 5,
          }}
        >
          <Text style={{ fontSize: 17, color: "grey" }}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={() => refRBSheet3.current.open()}

          style={{
            backgroundColor: "rgb(0, 172, 194)",
            borderRadius: 15,
            paddingHorizontal: 15,
            paddingVertical: 5,
          }}
        >
          <Text style={{ fontSize: 17, color: "white" }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  selecorItem: {
    paddingVertical: 7,
    marginVertical: 3,
    borderColor: "grey",
    borderWidth: 0.3,
    paddingHorizontal: 10,
    borderRadius: 15,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  selecedItem: {
    paddingVertical: 7,
    marginVertical: 3,
    borderColor: "grey",
    borderWidth: 0.3,
    paddingHorizontal: 10,
    borderRadius: 15,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "rgb(0, 172, 194)",
  },
  selectorItemContainer: {
    paddingHorizontal: 20,
    
    flex:1
  },
});

export default ProjectSecurityForm;
