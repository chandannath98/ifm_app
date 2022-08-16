
import { Button, Platform, SafeAreaView, StyleSheet, Text, View,FlatList } from "react-native";
import Visitors_List from "../../components/Visitors_View";
import HeaderForMobile from "../../components/HeaderForMobile";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native"
import VisitorsItem from "../../components/Visitors_View/VisitorsItem";


export default function Home() {
  const navigation= useNavigation();




const data=[

  {
    visitor_name : 'visitor name1' , time_in : '10:10 AM' , time_out : '12:12 PM', date : '10/05/2022' },
    {
    visitor_name : 'visitor name2' , time_in : '10:10 AM' , time_out : '12:12 PM', date : '10/05/2022' },
    {
    visitor_name : 'visitor name3' , time_in : '10:10 AM' , time_out : '12:12 PM', date : '10/05/2022' },
    {
    visitor_name : 'visitor name4' , time_in : '10:10 AM' , time_out : '12:12 PM', date : '10/05/2022' },
    {
    visitor_name : 'visitor name5' , time_in : '10:10 AM' , time_out : '12:12 PM', date : '10/05/2022' },
    {
    visitor_name : 'visitor name6' , time_in : '10:10 AM' , time_out : '12:12 PM', date : '10/05/2022' },
    {
    visitor_name : 'visitor name7' , time_in : '10:10 AM' , time_out : '12:12 PM', date : '10/05/2022' },
    {
    visitor_name : 'visitor name8' , time_in : '10:10 AM' , time_out : '12:12 PM', date : '10/05/2022' },
    {
    visitor_name : 'visitor name9' , time_in : '10:10 AM' , time_out : '12:12 PM', date : '10/05/2022' },
    {
    visitor_name : 'visitor name10' , time_in : '10:10 AM' , time_out : '12:12 PM', date : '10/05/2022' },
    {
    visitor_name : 'visitor name11' , time_in : '10:10 AM' , time_out : '12:12 PM', date : '10/05/2022' },
    {
    visitor_name : 'visitor name12' , time_in : '10:10 AM' , time_out : '12:12 PM', date : '10/05/2022' },
    {
    visitor_name : 'visitor name13' , time_in : '10:10 AM' , time_out : '12:12 PM', date : '10/05/2022' },
    {
    visitor_name : 'visitor name14' , time_in : '10:10 AM' , time_out : '12:12 PM', date : '10/05/2022' },
    {
    visitor_name : 'visitor name15' , time_in : '10:10 AM' , time_out : '12:12 PM', date : '10/05/2022' },
    {
    visitor_name : 'visitor name16' , time_in : '10:10 AM' , time_out : '12:12 PM', date : '10/05/2022' },
    {
    visitor_name : 'visitor name17' , time_in : '10:10 AM' , time_out : '12:12 PM', date : '10/05/2022' },
    {
    visitor_name : 'visitor name18' , time_in : '10:10 AM' , time_out : '12:12 PM', date : '10/05/2022' },
    {
    visitor_name : 'visitor name19' , time_in : '10:10 AM' , time_out : '12:12 PM', date : '10/05/2022' },
    
    

    ]










  return (
    <View style={[styles.safeAreaViewStyle]}>
      <HeaderForMobile/>
    


    <FlatList
    style={styles.scrollView}
     data={data}
     renderItem={({ item }) =>(
    
    
    <VisitorsItem item={item} />

     )}/>
     
      {/* <View style={styles.EmptySpace}></View> */}
     
    
    <AntDesign style={styles.addButton} name="pluscircle" size={55} color="black"  onPress={()=>{navigation.navigate("VisitorsForm")}}/>
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
  addButton:{
    color:"#5ba662",
    flex: 1,
    position:"absolute",
    justifyContent: 'flex-end',
    bottom:20,
    right:20
  },
  EmptySpace:{
    height:100
  },
  scrollView :{
paddingTop:10,
// marginBottom:10,
// paddingBottom:60
  }
});
