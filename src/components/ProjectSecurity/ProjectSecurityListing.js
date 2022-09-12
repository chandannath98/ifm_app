import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  TouchableHighlight,
  Platform
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { getFields } from "../../CustomFunctions/CustomFunctions";
import ProjectSecurityGropingItem from "./ProjectSecurityGropingItem";
import { AntDesign, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import ProjectSecurityItems from "./ProjectSecurityItems";
import { Button } from "react-native";
import { TextInput } from "react-native";
import { projectSecurityData } from "./projectsecuritydata";
import { useRef } from "react";
import RBSheet from "react-native-raw-bottom-sheet";

// ******************Main Function*************************//

const ProjectSecurityListing = ({ navigation, route }) => {
  
 
  // **********All Data**********
  var data = projectSecurityData



// *************Today's Date*****************
  var dt = new Date();

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


// ************states for month and year*****************
const [selectedYear, setSelectedYear] = useState(dt.getFullYear());
const [selectedMonth, setselectedMonth] = useState(monthNames[(dt.getMonth())]);





// ************Function to get Total Days in Month*****************


function getDaysInMonth() {
  


  const date = new Date();

  return new Date(
    selectedYear,
    monthNames.indexOf(selectedMonth)+1 ,
    0
  ).getDate();

}


// ************Function to get list of Days in Month*****************

const daysInMonth=()=>{
  const list=[]

  for(let i=1;(i<(getDaysInMonth()+1));i++){
    list.push(i)
  }
  return list
}



// ***************State for selected Day***************

const [selectedDay, setselectedDay] = useState(dt.getDate());



// ***************Funtion for filter data of today***************


const getTodaysDataFuntions = ()=>{

  var copyedData = data.filter((item) => {
    {
      


var yearno=String(selectedYear)
var monthno=String(selectedMonth).padStart(2,"0")

var dayno=String(selectedDay).padStart(2,"0")


      console.log(yearno+"-"+monthno+"-"+dayno)
      return item.date === (yearno+"-"+monthno+"-"+dayno);
      
    }
  });
  
  return copyedData
}



// ***************Filtered data state***************


  const [filteredData, setFilteredData] = useState(getTodaysDataFuntions());



// ***************Filtered For filter visited Unit list***************

  const GetVisitedListData=()=>{
    var vd = filteredData.filter((item) => {
      {
        return item.Name_of_the_guard;
      }
    });
    return vd
  }

// ***************Filtered For filter Notvisited Unit list***************

  const GetNotVisitedListData=()=>{
    var nvd = filteredData.filter((item) => {
      {
        return !item.Name_of_the_guard;
      }
    });
    return nvd
  }
 


// ***************States of visited data and not visited data***************


const [visitedData, setvisitedData] = useState(GetVisitedListData());
const [notVisitedData, setNotVisitedData] = useState(GetNotVisitedListData());




// ***************Use refs for bottom sheets***************

  const refRBSheet1 = useRef();
  const refRBSheet2 = useRef();
  const refRBSheet3 = useRef();


// *********Funtion for filter date month year******




  const filterDataFuntion = (year,month,day)=>{

    var yearno=String(year)
    var monthno=String((monthNames.indexOf(month))+1).padStart(2,"0")
    
    var dayno=String(day).padStart(2,"0")

    var copyedData = data.filter((item) => {
      {
             return item.date === (yearno+"-"+monthno+"-"+dayno);
        
      }
    });
    
    setFilteredData(copyedData)
  }
  
// *********state for visieted not visited filter******

  const [filter, setFilter] = useState("All");

// *********funtion to get data from visieted not visited filter******


  const dataValues = () => {
    if (filter === "All") {
      return filteredData;
    } else if (filter === "Visited") {
      return GetVisitedListData();
    } else {
      return GetNotVisitedListData();
    }
  };


// ***********************
// **************************** Return function*********************
// ***********************************



  return (



    <SafeAreaView style={styles.container}>






  

      {/* ******
      *******Bottom sheet popup 1 for year selection**********
      ******** */}






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
        <View style={{flex:1}}>
          <View style={{ marginTop: 5, marginBottom: 15 }}>
            <Text style={{ alignSelf: "center", fontSize: 17, color: "grey" }}>
              Year
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
            
            









            <FlatList
            
              data={[2020,2021,2022,2023]}
              contentContainerStyle={{ paddingBottom: 400 }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => [refRBSheet1.current.close(),setSelectedYear(item),filterDataFuntion(item,selectedMonth,selectedDay)]}
                  style={
                    selectedYear === item ? styles.selecedItem : styles.selecorItem
                  }
                >
                  <Text
                    style={[
                      { fontSize: 17 },

                      selectedYear != item
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
      *******Bottom sheet popup 2 for Month selection**********
      ******** */}






<RBSheet
        ref={refRBSheet2}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={650}
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
              Month
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
            
           









            <FlatList
            
              data={monthNames}
              contentContainerStyle={{ paddingBottom: 400 }}
              renderItem={({ item }) => (
                <TouchableOpacity
                onPress={() => [refRBSheet2.current.close(),setselectedMonth(item),filterDataFuntion(selectedYear,item,selectedDay)]}

                  style={
                    selectedMonth === item ? styles.selecedItem : styles.selecorItem
                  }
                >
                  <Text
                    style={[
                      { fontSize: 17 },

                      selectedMonth != item
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
      *******Bottom sheet popup 3 for Day selection**********
      ******** */}






<RBSheet
        ref={refRBSheet3}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={650}
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
              Month
            </Text>
          </View>


          <TouchableOpacity
         onPress={() => {refRBSheet3.current.close()}}

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
            
            









            <FlatList
            
              data={daysInMonth()}
              contentContainerStyle={{ paddingBottom: 400 }}
              renderItem={({ item }) => (
                <TouchableOpacity
                onPress={() => [refRBSheet3.current.close(),setselectedDay(item),filterDataFuntion(selectedYear,selectedMonth,item)]}

                  style={
                    selectedDay === item ? styles.selecedItem : styles.selecorItem
                  }
                >
                  <Text
                    style={[
                      { fontSize: 17 },

                      selectedDay != item
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










{/* 
*************************
*****Header*************
***************************** */}

<View style={{display:"flex",flexDirection:"row", backgroundColor:"white"}}>

<Feather onPress={() => navigation.openDrawer()}  style={{flex:1,alignSelf:"center",paddingHorizontal:2}} name="menu" size={25} color="rgb(0, 172, 194)" />




<View style={{
          display: "flex",
          flexDirection: "row",
          marginHorizontal: 10,
          margin: 15,
          flex:20,
          // justifyContent:"space-between"
        }}>



        <TouchableOpacity
          onPress={() => refRBSheet1.current.open()}
          
          style={[{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 3,
            borderColor: "rgb(0, 172, 194)",
            borderWidth: 0.3,
            borderRadius: 15,
            maxWidth: 800,
            justifyContent: "center",
            paddingHorizontal: 10,
            marginHorizontal: 10,
            
          },Platform.OS === "web" ? {paddingHorizontal:15 } : { paddingHorizontal: 10, }]}
        >
          <Text style={{ fontSize: 17,color:"rgb(0, 172, 194)" }}>{selectedYear}</Text>
          <Entypo  name="chevron-down" size={17} color="rgb(0, 172, 194)" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => refRBSheet2.current.open()}
          style={[{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 3,
            borderColor: "rgb(0, 172, 194)",
            borderWidth: 0.3,
            borderRadius: 15,
            maxWidth: 200,
            justifyContent: "center",
            paddingHorizontal: 10,
            
          },Platform.OS === "web" ? {paddingHorizontal:15 } : { paddingHorizontal: 10, }]}
        >
          <Text style={{ fontSize: 17 ,color:"rgb(0, 172, 194)"}}>{selectedMonth}</Text>
          <Entypo  name="chevron-down" size={17} color="rgb(0, 172, 194)" />
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => refRBSheet3.current.open()}
          style={[{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 3,
            borderColor: "rgb(0, 172, 194)",
            borderWidth: 0.3,
            borderRadius: 15,
            maxWidth: 200,
            justifyContent: "center",
            paddingHorizontal: 10,
            marginHorizontal: 10,

            
          },Platform.OS === "web" ? {paddingHorizontal:15 } : { paddingHorizontal: 10, }]}
        >
          <Text  style={{ fontSize: 17 ,color:"rgb(0, 172, 194)"}}>{selectedDay}</Text>
          <Entypo  name="chevron-down" size={17} color="rgb(0, 172, 194)" />
        </TouchableOpacity>

        
{/* ***********
if date is not today then today button for set date to today*****
********** */}


        {(String(selectedDay).padStart(2,"0")+"-"+String(selectedMonth)+"-"+String(selectedYear))===(String(dt.getDate()).padStart(2,"0")+"-"+String(monthNames[(dt.getMonth())])+"-"+String(dt.getFullYear()))?
        <Text></Text>:
        
        <TouchableOpacity
          onPress={() => [
            setSelectedYear(dt.getFullYear()),
            setselectedMonth(monthNames[(dt.getMonth())]),
            setselectedDay(dt.getDate()),
            filterDataFuntion(dt.getFullYear(),(dt.getMonth()),dt.getDate())
            
          ]}
          style={[{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 3,
            borderColor: "rgb(0, 172, 194)",
            borderWidth: 0.3,
            borderRadius: 15,
            maxWidth: 200,
            justifyContent: "center",
            paddingHorizontal: 10,
            marginHorizontal: 2,
            backgroundColor:"rgb(0, 172, 194)",
            elevation:1

            
          },Platform.OS === "web" ? {paddingHorizontal:15 } : { paddingHorizontal: 10, }]}
        >
          <Text  style={{ fontSize: 17 ,color:"#fff"}}>Today</Text>
          
        </TouchableOpacity>
            }

        

        





      </View>
</View>







{/* 
*************************
*****Date View *************
***************************** */}



      <View style={{ paddingBottom: 10 }}>
        <View style={styles.header}>
          <AntDesign name="calendar" size={25} color="#fff" />
          <Text style={styles.headertext}>
            {(String(selectedDay).padStart(2,"0")+"-"+String(selectedMonth)+"-"+String(selectedYear))===(String(dt.getDate()).padStart(2,"0")+"-"+String(monthNames[(dt.getMonth())])+"-"+String(dt.getFullYear()))?"Today":String(selectedDay).padStart(2,"0")+"-"+String(selectedMonth)+"-"+String(selectedYear)
            }
            </Text>
        </View>




{/* 
*************************
*****Filters*************
***************************** */}




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
              {filteredData.length}
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
              {GetVisitedListData().length}
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
              {GetNotVisitedListData().length}
            </Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          flex: 1,
        }}
      >






{/* 
*************************
*****Main List*************
***************************** */}






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

      <AntDesign
        style={styles.addButton}
        name="pluscircle"
        size={55}
        color="black"
        onPress={() => {
          navigation.navigate("ProjectSecurityForm");
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
  addButton: {
    color: "rgb(0, 172, 194)",
    flex: 1,
    position: "absolute",
    justifyContent: "flex-end",
    bottom: 20,
    right: 20,
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
  selectorItemContainerforProject: {
    paddingHorizontal: 20,
    
    
  },
  selectorItemContainer: {
    paddingHorizontal: 20,
    flex:1
    
  },






});

export default ProjectSecurityListing;
