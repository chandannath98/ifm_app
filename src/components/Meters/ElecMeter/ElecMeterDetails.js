import { ScrollView } from "native-base";
import * as React from "react";
import { View, StyleSheet, Dimensions, StatusBar, Text, TabBarIOSItem } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { MaterialCommunityIcons } from "@expo/vector-icons";



export default function ElecMeterDetails({ navigation, route }) {
  const item= route.params.item


  const Electricity = () => (

  
    <ScrollView style={[styles.scene]}>
  
      <View style={styles.TabInnerContainer}>
  
        <View style={styles.tabItem}>
          <Text style={[styles.tabItemText, styles.tabItemKey]}>Old Reading : </Text>
          <Text style={[styles.tabItemText, styles.tabItemValue]}>{item.Mains_Old_Reading}</Text>
        </View>
  
  
        <View style={styles.tabItem}>
          <Text style={[styles.tabItemText, styles.tabItemKey]}>New Reading : </Text>
          <Text style={[styles.tabItemText, styles.tabItemValue]}>{item.Mains_New_Reading}</Text>
        </View>
  
  
        <View style={styles.tabItem}>
          <Text style={[styles.tabItemText, styles.tabItemKey]}>
            Electricity Reading :{" "}
          </Text>
          <Text style={[styles.tabItemText, styles.tabItemValue]}>{item.Mains_New_Reading-item.Mains_Old_Reading}</Text>
        </View>
        
      </View>
    </ScrollView>
  );
  
  const DG = () => (
    <ScrollView style={[styles.scene]}>
  
      <View style={styles.TabInnerContainer}>
          
        <View style={styles.tabItem}>
          <Text style={[styles.tabItemText, styles.tabItemKey]}>Old Reading : </Text>
          <Text style={[styles.tabItemText, styles.tabItemValue]}>{item.DG_Old_Reading}</Text>
        </View>
  
  
        <View style={styles.tabItem}>
          <Text style={[styles.tabItemText, styles.tabItemKey]}>New Reading : </Text>
          <Text style={[styles.tabItemText, styles.tabItemValue]}>{item.Dg_New_Reading}</Text>
        </View>
  
  
        <View style={styles.tabItem}>
          <Text style={[styles.tabItemText, styles.tabItemKey]}>
            DG Reading :{" "}
          </Text>
          <Text style={[styles.tabItemText, styles.tabItemValue]}>{item.Dg_New_Reading-item.DG_Old_Reading}</Text>
        </View>
  
      </View>
    </ScrollView>
  );
  
  const OtherDetails = () => (
    <ScrollView style={[styles.scene]}>
      <View style={styles.TabInnerContainer}>
  
        <View style={styles.tabItem}>
          <Text style={[styles.tabItemText, styles.tabItemKey]}>
            Meter No :{" "}
          </Text>
          <Text style={[styles.tabItemText, styles.tabItemValue]}>{item.Meter_No}</Text>
        </View>
        <View style={styles.tabItem}>
          <Text style={[styles.tabItemText, styles.tabItemKey]}>Sention Load : </Text>
          <Text style={[styles.tabItemText, styles.tabItemValue]}>{item.Sanctioned_Load}</Text>
        </View>
  
  
      </View>
    </ScrollView>
  );
  
  const initialLayout = { width: Dimensions.get("window").width };
  
  
  
  const renderScene = SceneMap({
    second: Electricity,
    third: DG,
  
    fifth: OtherDetails,
  });









  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "second", title: "Electricity" },
    { key: "third", title: "DG" },

    { key: "fifth", title: "Other" },
  ]);




  return (

    <View style={[styles.scene, styles.container]}>
      <View style={styles.basicInfoTitle}>
        <Text style={[styles.basicInfoText, styles.dgNoText]}>{item.Unit_No}</Text>
        <Text
          style={[
            styles.basicInfoText,
            styles.dateText,
            { color: "rgb(0, 172, 194)" },
          ]}
        >
          {item.Project}
        </Text>
      </View>
      <TabView
        swipeEnabled
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: "rgb(0, 172, 194)" }}
            labelStyle={{ color: "black" }}
            activeColor={"rgb(0, 172, 194)"}
            style={{
              backgroundColor: "white",
              color: "black",
            }}
          />
        )}
        // activeColor={"red"}
      />

      <MaterialCommunityIcons
        name="circle-edit-outline"
        style={styles.editButton}
        size={55}
        color="rgb(0, 172, 194)"
        // onPress={() => {
        //   navigation.navigate("VisitorsForm", {
        //     item: item,
        //   });
        // }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 20,
    paddingVertical: 20,
    backgroundColor: "white",
  },
  scene: {
    flex: 1,
  },
  basicInfoTitle: {
    // display:"flex",
    // flexDirection:"row",
    // justifyContent:"space-between",
    // marginHorizontal:10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "white",
    // marginVertical:10,
    // borderRadius:10
  },
  dgNoText: {
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 5,
  },
  dateText: {
    fontSize: 17,
    paddingVertical: 5,
  },
  TabInnerContainer: {
    margin: 20,
    padding: 20,
    maxWidth:500,
    backgroundColor:"#FAFAFA",
    borderRadius:10,
    // display:"flex",
    // justifyContent:"space-between",
    minWidth:350,
    alignSelf:"center"
  },
  tabItem: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 10,
  },
  tabItemText: {
   
    alignItems: "center",
    justifyContent: "center",
    fontSize: 17,
    
  },
  tabItemKey: {
    color: "grey",
    flex: 6,
    flexWrap:"wrap"
  },
  tabItemValue: {
    flex: 2,
    color: "rgb(0, 172, 194)",
  },
  editButton: {
    color: "rgb(0, 172, 194)",
    flex: 1,
    position: "absolute",
    justifyContent: "flex-end",
    bottom: 20,
    right: 20,
  },
});
