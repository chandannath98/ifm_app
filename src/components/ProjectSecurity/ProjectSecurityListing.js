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
import { AntDesign, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import ProjectSecurityItems from "./ProjectSecurityItems";
import { projectSecurityData } from "./projectsecuritydata";
import { useRef } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import HeaderFilterItem from "../GlobalComponents/HeaderFilterItem";
import HeaderforComponents from "../GlobalComponents/HeaderForComponents";
import { useDispatch, useSelector } from "react-redux";







// ******************Main Function*************************//

const ProjectSecurityListing = ({ navigation, route }) => {
  

  // **********All Data**********
  var data = projectSecurityData

  const [searchInputVisible,setSearchInputVisible] = useState(false);
  const [searchvalue, setSearchvalue] = useState("");

// *************Today's Date*****************
  var dt = new Date();

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


// ************states for month and year*****************
const [selectedYear, setSelectedYear] = useState(dt.getFullYear());
const [selectedMonth, setselectedMonth] = useState(monthNames[(dt.getMonth())]);
const [hideHeader, setHideHeader] = useState(false);

const { selectedVisitorsItems } = useSelector(
  (state) => state.visitorReducer
);



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

  const RenderItemIfSearchEnable=(item)=>{
    
    var concdata="";
    for (const key in item) {
      concdata=concdata+String(item[key]).toLowerCase()+" "
    }
   
    if(concdata.includes(searchvalue.toLowerCase())){
      return(
        <View>
              <ProjectSecurityItems item={item} />
            </View>
      )
    }
    }


const HeaderAndRbSheet=()=>{
return(

<View>




      <HeaderforComponents
      searchInputVisible={searchInputVisible}
      setSearchInputVisible={setSearchInputVisible}
      searchvalue={searchvalue}
      setSearchvalue={setSearchvalue}
        item={[
          <HeaderFilterItem
            filterName={"Year"}
            FilterList={[2021, 2022, 2023]}
            filterValue={selectedYear}
            filerOnSelectionFunctions={(e) => {
              setSelectedYear(e),filterDataFuntion(e,selectedMonth,selectedDay)
            }}
          />,
          <HeaderFilterItem
            filterName={"Month"}
            FilterList={monthNames}
            filterValue={selectedMonth}
            filerOnSelectionFunctions={(e) => {
              setselectedMonth(e),filterDataFuntion(selectedYear,e,selectedDay)
            }}
          />,
          <HeaderFilterItem
            filterName={"Days"}
            FilterList={daysInMonth()}
            filterValue={selectedDay}
            filerOnSelectionFunctions={(e) => {
              setselectedDay(e),filterDataFuntion(selectedYear,selectedMonth,e)
            }}
          />,



          (String(selectedDay).padStart(2,"0")+"-"+String(selectedMonth)+"-"+String(selectedYear))===(String(dt.getDate()).padStart(2,"0")+"-"+String(monthNames[(dt.getMonth())])+"-"+String(dt.getFullYear()))?
        <></>:
        
        <TouchableOpacity
          onPress={() => [
            setSelectedYear(dt.getFullYear()),
            setselectedMonth(monthNames[(dt.getMonth())]),
            setselectedDay(dt.getDate()),
            filterDataFuntion(dt.getFullYear(),(monthNames[(dt.getMonth())]),dt.getDate())
            
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
            


        ]}
      />








        
{/* ***********
if date is not today then today button for set date to today*****
********** */}


        

        

        





      </View>


)

}











// ***********************
// **************************** Return function*********************
// ***********************************



  return (



    <SafeAreaView style={styles.container}>



{hideHeader?<></>:<HeaderAndRbSheet/>}


  





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
          renderItem={({ item }) => !searchInputVisible?
            <View>
              <ProjectSecurityItems item={item} />
            </View>:
            RenderItemIfSearchEnable(item)
          }
          onScrollBeginDrag={()=>setHideHeader(true)}
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









});

export default React.memo(ProjectSecurityListing);
