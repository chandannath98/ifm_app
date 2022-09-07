import { ScrollView } from "native-base";
import * as React from "react";
import { View, StyleSheet, Dimensions, StatusBar, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const KWHandKVAH = () => (
  <ScrollView style={[styles.scene]}>
    <View style={styles.TabInnerContainer}>
      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>Old KWH : </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>500</Text>
      </View>
      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>New KWH : </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>530</Text>
      </View>
      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
          KWH Generated :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>300</Text>
      </View>
      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>Old KVAH : </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>500</Text>
      </View>
      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>New KVAH : </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>530</Text>
      </View>
      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
          KVAH Generated :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>300</Text>
      </View>
      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
          Multiplying Fector :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>10</Text>
      </View>
    </View>
  </ScrollView>
);

const MeterDetails = () => (
  <ScrollView style={[styles.scene]}>
    <View style={styles.TabInnerContainer}>
      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>PF : </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>98</Text>
      </View>
      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
          Voltage R :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>5990</Text>
      </View>

      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
          Voltage Y :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>6000</Text>
      </View>

      <View style={styles.tabItem}>
        <Text style={[styles.tabItemText, styles.tabItemKey]}>
          Voltage B :{" "}
        </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>5752</Text>
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
        <Text style={[styles.tabItemText, styles.tabItemKey]}>Remark : </Text>
        <Text style={[styles.tabItemText, styles.tabItemValue]}>All Good</Text>
      </View>
    </View>
  </ScrollView>
);

const initialLayout = { width: Dimensions.get("window").width };




const renderScene = SceneMap({
  second: KWHandKVAH,
  third: MeterDetails,

  fifth: OtherDetails,
});

export default function HTMeterDetails() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "second", title: "KWH" },
    { key: "third", title: "Meter Detail" },

    { key: "fifth", title: "Other" },
  ]);

  return (
    <View style={[styles.scene, styles.container]}>
      <View style={styles.basicInfoTitle}>
        <Text style={[styles.basicInfoText, styles.dgNoText]}>01/05/2022</Text>
        <Text
          style={[
            styles.basicInfoText,
            styles.dateText,
            { color: "rgb(0, 172, 194)" },
          ]}
        >
          10:10 AM
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
        onPress={() => {
          navigation.navigate("VisitorsForm", {
            item: item,
          });
        }}
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
