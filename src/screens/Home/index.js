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



export default function Home() {
  const navigation = useNavigation();
  
  const {filterdVisitorsData}=useSelector(state => state.visitorReducer);
    const dispatch = useDispatch();


  const data = [
    {
      visitor_name: "visitor name1",
      time_in: "10:11 AM",
      time_out: "12:12 PM",
      date: "10/05/2022",
      rating:"⭐⭐⭐⭐⭐",
      phone:"7875896521"
    },
    {
      visitor_name: "visitor name512",
      time_in: "10:12 AM",
      time_out: "12:12 PM",
      date: "10/05/2022",
      rating:"⭐⭐⭐⭐",
      phone:"7875896522"
    },
    {
      visitor_name: "visitor name33",
      time_in: "10:13 AM",
      time_out: "12:12 PM",
      date: "10/05/2022",
      rating:"⭐⭐⭐⭐⭐",
      phone:"7875896523"
    },
    {
      visitor_name: "visitor name47",
      time_in: "10:10 AM",
      time_out: "12:12 PM",
      date: "10/05/2022",
      rating:"⭐⭐⭐⭐⭐",
      phone:"7875896524"
    },
    {
      visitor_name: "visitor name5",
      time_in: "10:10 AM",
      time_out: "12:12 PM",
      date: "10/05/2022",
      rating:"⭐⭐⭐⭐",
      phone:"7875896525"
    },
    {
      visitor_name: "visitor name6",
      time_in: "10:10 AM",
      time_out: "12:12 PM",
      date: "10/05/2022",
      rating:"⭐⭐⭐⭐⭐",
      phone:"7875896526"
    },
    {
      visitor_name: "visitor name7",
      time_in: "10:10 AM",
      time_out: "12:12 PM",
      date: "10/05/2022",
      rating:"⭐⭐⭐⭐",
      phone:"7875896527"
    },
    {
      visitor_name: "visitor name8",
      time_in: "10:10 AM",
      time_out: "12:12 PM",
      date: "10/05/2022",
      rating:"⭐⭐⭐⭐⭐",
      phone:"7875896528"

    },
    {
      visitor_name: "visitor name9",
      time_in: "10:10 AM",
      time_out: "12:12 PM",
      date: "10/05/2022",
      rating:"⭐⭐⭐⭐",
      phone:"7875896529"

    },
    {
      visitor_name: "visitor name10",
      time_in: "10:10 AM",
      time_out: "12:12 PM",
      date: "10/05/2022",
      rating:"⭐⭐⭐",
      phone:"7875896529"
    },
    {
      visitor_name: "visitor name11",
      time_in: "10:10 AM",
      time_out: "12:12 PM",
      date: "10/05/2022",
      rating:"⭐⭐⭐⭐",
      phone:"7875896529"
    },
    {
      visitor_name: "visitor name12",
      time_in: "10:10 AM",
      time_out: "12:12 PM",
      date: "10/05/2022",
      rating:"⭐⭐⭐⭐⭐",
      phone:"7875896529"
    },
    {
      visitor_name: "visitor name13",
      time_in: "10:10 AM",
      time_out: "12:12 PM",
      date: "10/05/2022",
      rating:"⭐⭐⭐",
      phone:"7875896529"
    },
    {
      visitor_name: "visitor name14",
      time_in: "10:10 AM",
      time_out: "12:12 PM",
      date: "10/05/2022",
      rating:"⭐⭐⭐⭐⭐",
      phone:"7875896529"
    },
    {
      visitor_name: "visitor name15",
      time_in: "10:10 AM",
      time_out: "12:12 PM",
      date: "10/05/2022",
      rating:"⭐⭐⭐⭐",
      phone:"7875896529"
    },
    {
      visitor_name: "visitor name16",
      time_in: "10:10 AM",
      time_out: "12:12 PM",
      date: "10/05/2022",
      rating:"⭐⭐⭐",
      phone:"7875896529"
    },
    {
      visitor_name: "aisitor name1",
      time_in: "10:10 AM",
      time_out: "12:12 PM",
      date: "10/05/2022",
      rating:"⭐⭐⭐⭐⭐",
      phone:"7875896529"
    },
    {
      visitor_name: "visitor name18",
      time_in: "10:10 AM",
      time_out: "12:12 PM",
      date: "10/05/2022",
      rating:"⭐⭐⭐⭐",
      phone:"7875896529"
    },
    {
      visitor_name: "visitor name19",
      time_in: "10:10 AM",
      time_out: "12:12 PM",
      date: "10/05/2022",
      rating:"⭐⭐⭐",
      phone:"7875896529"
    },
    
  ];

  function getFields( field) {
    var output = [];
    for (var i=0; i < data.length ; ++i)
        output.push(data[i][field]);
         output = output.filter((item, i, ar) => ar.indexOf(item) === i);
    return output;
}

var allVisitorsName=getFields("visitor_name"); 



const filterData=(rating)=>{
 var data2=data.filter((item)=>{
    return item.rating===rating
  })
  dispatch(setfilterdVisitorsData(data2))
  
}


useEffect(() => {
  dispatch(setfilterdVisitorsData(data))
  console.log(data)
}, []);







  return (
    <View style={[styles.safeAreaViewStyle]}>
      <HeaderForMobile data={allVisitorsName} filterData={filterData}  getFields={getFields}/>

      <FlatList
        style={styles.scrollView}
        data={filterdVisitorsData.sort((a, b) => a.visitor_name.localeCompare(b))}
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
