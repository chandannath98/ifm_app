import {
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
} from "react-native";
import Visitors_List from "../../components/Visitors_View";
import HeaderForMobile from "../../components/HeaderForMobile";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import VisitorsItem from "../../components/Visitors_View/VisitorsItem";
import { useState,useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setfilterdVisitorsData } from "../../redux/actions";
import { visitorsdata } from "../../components/Visitors_View/data";



export default function Home() {
  const navigation = useNavigation();
  
  const {filterdVisitorsData,uniqueRatingList,visitorSelectedRating,visitorsMonthYearValue}=useSelector(state => state.visitorReducer);
    const dispatch = useDispatch();


  var data=visitorsdata

  function getFields( field) {
    var output = [];
    for (var i=0; i < data.length ; ++i)
        output.push(data[i][field]);
        //  output = output.filter((item, i, ar) => ar.indexOf(item) === i);
    return output;
}

function getMonthYear( ) {
    var output = [];
    for (var i=0; i < data.length ; ++i)
        output.push((new Date(data[i]["date"]).getMonth()+1).toString()+"-"+ new Date(data[i]["date"]).getFullYear().toString());
       
    return output;
}





const filterData=(rating,MonthYear)=>{
  if(rating==="All" &MonthYear==="All" ){
    dispatch(setfilterdVisitorsData(data))
    
    return data
    
  }
  
  else if(rating==="All" &MonthYear != "All") {
    var data2=data.filter((item)=>{
      return (((new Date(item.date).getMonth()+1).toString()+"-"+ new Date(item.date).getFullYear().toString())===MonthYear)
    })
    dispatch(setfilterdVisitorsData(data2))
    return data2
  }
  else if(rating !="All" &MonthYear==="All")  {
    var data2=data.filter((item)=>{
      return (item.rating===rating)
    })
    dispatch(setfilterdVisitorsData(data2))
    return data2
  }
  else{
    var data2=data.filter((item)=>{
      return (item.rating===rating & ((new Date(item.date).getMonth()+1).toString()+"-"+ new Date(item.date).getFullYear().toString())===MonthYear)
    })
    dispatch(setfilterdVisitorsData(data2))
    return data2
    
  }
  
}

useEffect(() => {
  dispatch(setfilterdVisitorsData(data))

}, []);











  return (
    <View style={[styles.safeAreaViewStyle]}>
      <HeaderForMobile  getMonthYear={getMonthYear} data={ getFields("visitor_name", data)}  getFields={getFields} filterData={filterData}/>

      <FlatList
        style={styles.scrollView}
        data={filterdVisitorsData}
        // stickyHeaderIndices={[0,6,10]}
        renderItem={({ item }) => (
          
            <VisitorsItem
              item={item}
            />
          
        )}
      />

      

      <AntDesign
        style={styles.addButton}
        name="pluscircle"
        size={55}
        color="black"
        onPress={() => {
          navigation.navigate("VisitorsForm");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,

    // backgroundColor: "#CEE5D0",
  },

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    // backgroundColor:"white",
    // marginHorizontal:10
  },

  headerItem: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 7,
    paddingHorizontal: 8,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "space-around",
  },
  addButton: {
    color: "#5ba662",
    flex: 1,
    position: "absolute",
    justifyContent: "flex-end",
    bottom: 20,
    right: 20,
  },
  EmptySpace: {
    height: 100,
  },
  scrollView: {
    paddingTop: 10,
    // marginBottom:10,
    // paddingBottom:60
  },
});
