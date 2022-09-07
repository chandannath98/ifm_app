import { ScrollView } from "native-base";
import * as React from "react";
import { View, StyleSheet, Dimensions, StatusBar, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { MaterialCommunityIcons } from '@expo/vector-icons';








const FirstRoute = () => (
    
  <ScrollView style={[styles.scene]}>
    <View style={styles.TabInnerContainer}>
      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
          Start Time :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>10:15 AM</Text>
      </View>
      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
          Stop Time :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>10:30 AM</Text>
      </View>
      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
          Run Time :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>00:15:00</Text>
      </View>
    </View>
  </ScrollView>
   
);

const SecondRoute = () => (
    <ScrollView style={[styles.scene]}>
    <View style={styles.TabInnerContainer}>
      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
          Opening Reading :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>500</Text>
      </View>
      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
          Closing Reading :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>530</Text>
      </View>
      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
          KWH Gnerated :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>30</Text>
      </View>
    </View>
  </ScrollView>
);

const MeterDetails = () => (
    <ScrollView style={[styles.scene]}>
    <View style={styles.TabInnerContainer}>
      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
          DG Capacity :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>500</Text>
      </View>
      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
          Meter Reading :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>530</Text>
      </View>

      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
          Frequency :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>30</Text>
      </View>
      

      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
          Coolent Temprature :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>30</Text>
      </View>

      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
          Voltaage RY :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>30</Text>
      </View>

      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
          Voltaage RB :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>30</Text>
      </View>

      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
          Current R :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>30</Text>
      </View>

      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
          Current B :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>30</Text>
      </View>

      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
          Load :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>30</Text>
      </View>

      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
          PF :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>30</Text>
      </View>

    </View>
  </ScrollView>
);



const DieselDetails = () => (
    <ScrollView style={[styles.scene]}>
    <View style={styles.TabInnerContainer}>
      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
        Diesel Available :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>500</Text>
      </View>
      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
        Diesel Brought :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>530</Text>
      </View>

      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
          Issued For Other Site :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>30</Text>
      </View>
      

      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
          Balance Diesel :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>30</Text>
      </View>

      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
          Diesel Consumed :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>30</Text>
      </View>

      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
          Diesel Consumed/Hour :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>30</Text>
      </View>

      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
          KWH/Ltr :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>30</Text>
      </View>

      

    </View>
  </ScrollView>
);


const OtherDetails = () => (
    <ScrollView style={[styles.scene]}>
    <View style={styles.TabInnerContainer}>
      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
        Duty Technician :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>Sandeep</Text>
      </View>
      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
        Remark :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>All Good</Text>
      </View>

      
      

    </View>
  </ScrollView>
);



const initialLayout = { width: Dimensions.get("window").width };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: MeterDetails,
  fourth: DieselDetails,
  fifth: OtherDetails,
});

export default function DGMeterDetails() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Date & Time" },
    { key: "second", title: "KWH" },
    { key: "third", title: "Meter Detail" },
    { key: "fourth", title: "Diesel" },
    { key: "fifth", title: "Other" },
  ]);

  return (
    <View style={[styles.scene, styles.container]}>
      <View style={styles.basicInfoTitle}>
        <Text style={[styles.basicInfoText, styles.dgNoText]}>DG-1</Text>
        <Text style={[styles.basicInfoText, styles.dateText,{color: "rgb(0, 172, 194)"}]}>05/04/2022</Text>
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

<MaterialCommunityIcons name="circle-edit-outline" style={styles.editButton}  size={55} color="rgb(0, 172, 194)"  onPress={()=>{navigation.navigate("VisitorsForm", {
                    item: item,
                  })}}/>

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
  editButton:{
    color:"rgb(0, 172, 194)",
   
    position:"absolute",
    justifyContent: 'flex-end',
    bottom:20,
    right:20
  },
});
