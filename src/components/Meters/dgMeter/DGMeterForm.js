import { ScrollView } from "native-base";
import * as React from "react";
import { View, StyleSheet, Dimensions, StatusBar, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";
import { useCallback } from "react";
import { signal } from "@preact/signals-react"
import { Platform } from "react-native";
import HeaderFilterItem from "../../GlobalComponents/HeaderFilterItem";
import { useState } from "react";
import { useRef } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";












export default function DGMeterForm() {
    const [index, setIndex] = React.useState(0);

    const [dgCapecity, setdgCapecity] = React.useState("")

    const dgc = signal(0)
    const fgc = signal(0)





    const [routes] = React.useState([
        { key: "first", title: "Date & Time" },
        { key: "second", title: "KWH" },
        { key: "third", title: "Meter Detail" },
        { key: "fourth", title: "Diesel" },
        { key: "fifth", title: "Other" },
    ]);













    const FirstRoute = () => (

        <ScrollView style={[styles.scene]}>
            <View style={styles.TabInnerContainer}>
                <View style={styles.tabItem}>
                    <Text style={[styles.tabItemText, styles.tabItemKey]}>
                        Start Time :{" "}
                    </Text>
                    <View style={[styles.tabItemValue, styles.textinputStyle, dgc.value < 1200 ? { borderWidth: 0.2, borderColor: "red" } : styles.tabItemValue]}>

                        <TextInput style={[styles.tabItemText, styles.tabItemValue, Platform.OS === "web" ? { outlineStyle: "none" } : { backgroundColor: "white" }]}
                            onChangeText={(e) => dgc.value = Number(e)}
                        />

                    </View>
                </View>
                <View style={styles.tabItem}>
                    <Text style={[styles.tabItemText, styles.tabItemKey]}>
                        Stop Time :{" "}
                    </Text>
                    <View style={[styles.tabItemValue, styles.textinputStyle, dgc.value < 1200 ? { borderWidth: 0.2, borderColor: "red" } : styles.tabItemValue]}>

                        <TextInput style={[styles.tabItemText, styles.tabItemValue, Platform.OS === "web" ? { outlineStyle: "none" } : { backgroundColor: "white" }]}
                            onChangeText={(e) => dgc.value = Number(e)}
                        />

                    </View>
                </View>
                <View style={styles.tabItem}>
                    <Text style={[styles.tabItemText, styles.tabItemKey]}>
                        Run Time :{" "}
                    </Text>
                    <View style={[styles.tabItemValue, styles.textinputStyle, dgc.value < 1200 ? { borderWidth: 0.2, borderColor: "red" } : styles.tabItemValue]}>

                        <TextInput style={[styles.tabItemText, styles.tabItemValue, Platform.OS === "web" ? { outlineStyle: "none" } : { backgroundColor: "white" }]}
                            onChangeText={(e) => dgc.value = Number(e)}
                        />

                    </View>
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
                    <View style={[styles.tabItemValue, styles.textinputStyle, dgc.value < 1200 ? { borderWidth: 0.2, borderColor: "red" } : styles.tabItemValue]}>

                        <TextInput style={[styles.tabItemText, styles.tabItemValue, Platform.OS === "web" ? { outlineStyle: "none" } : { backgroundColor: "white" }]}
                            onChangeText={(e) => dgc.value = Number(e)}
                        />

                    </View>
                </View>
                <View style={styles.tabItem}>
                    <Text style={[styles.tabItemText, styles.tabItemKey]}>
                        Closing Reading :{" "}
                    </Text>
                    <View style={[styles.tabItemValue, styles.textinputStyle, dgc.value < 1200 ? { borderWidth: 0.2, borderColor: "red" } : styles.tabItemValue]}>

                        <TextInput style={[styles.tabItemText, styles.tabItemValue, Platform.OS === "web" ? { outlineStyle: "none" } : { backgroundColor: "white" }]}
                            onChangeText={(e) => dgc.value = Number(e)}
                        />

                    </View>
                </View>
                <View style={styles.tabItem}>
                    <Text style={[styles.tabItemText, styles.tabItemKey]}>
                        KWH Gnerated :{" "}
                    </Text>
                    <View style={[styles.tabItemValue, styles.textinputStyle, dgc.value < 1200 ? { borderWidth: 0.2, borderColor: "red" } : styles.tabItemValue]}>

                        <TextInput style={[styles.tabItemText, styles.tabItemValue, Platform.OS === "web" ? { outlineStyle: "none" } : { backgroundColor: "white" }]}
                            onChangeText={(e) => dgc.value = Number(e)}
                        />

                    </View>
                </View>
            </View>
        </ScrollView>
    );


    //   ****child*****
    const MeterDetails = () => {

        return (

            <ScrollView style={[styles.scene]}>
                <View style={styles.TabInnerContainer}>
                    <View style={styles.tabItem}>
                        <Text style={[styles.tabItemText, styles.tabItemKey]}>
                            DG Capacity :{" "}
                        </Text>
                        {/* <Text style={[styles.tabItemText, styles.tabItemValue]}>500</Text> */}
                        <View style={[styles.tabItemValue, styles.textinputStyle, dgc.value < 1200 ? { borderWidth: 0.2, borderColor: "red" } : styles.tabItemValue]}>

                            <TextInput style={[styles.tabItemText, styles.tabItemValue, Platform.OS === "web" ? { outlineStyle: "none" } : { backgroundColor: "white" }]}
                                onChangeText={(e) => dgc.value = Number(e)}
                            />

                        </View>







                    </View>
                    <View style={styles.tabItem}>
                        <Text style={[styles.tabItemText, styles.tabItemKey]}>
                            Meter Reading :{" "}
                        </Text>

                        <View style={[styles.tabItemValue, styles.textinputStyle, dgc.value < 1200 ? { borderWidth: 0.2, borderColor: "red" } : styles.tabItemValue]}>

                            <TextInput style={[styles.tabItemText, styles.tabItemValue, Platform.OS === "web" ? { outlineStyle: "none" } : { backgroundColor: "white" }]}
                                onChangeText={(e) => dgc.value = Number(e)}
                            />

                        </View>

                    </View>

                    <View style={styles.tabItem}>
                        <Text style={[styles.tabItemText, styles.tabItemKey]}>
                            Frequency :{" "}
                        </Text>
                        <View style={[styles.tabItemValue, styles.textinputStyle, dgc.value < 1200 ? { borderWidth: 0.2, borderColor: "red" } : styles.tabItemValue]}>

                            <TextInput style={[styles.tabItemText, styles.tabItemValue, Platform.OS === "web" ? { outlineStyle: "none" } : { backgroundColor: "white" }]}
                                onChangeText={(e) => dgc.value = Number(e)}
                            />

                        </View>
                    </View>


                    <View style={styles.tabItem}>
                        <Text style={[styles.tabItemText, styles.tabItemKey]}>
                            Coolent Temprature :{" "}
                        </Text>
                        <View style={[styles.tabItemValue, styles.textinputStyle, dgc.value < 1200 ? { borderWidth: 0.2, borderColor: "red" } : styles.tabItemValue]}>

                            <TextInput style={[styles.tabItemText, styles.tabItemValue, Platform.OS === "web" ? { outlineStyle: "none" } : { backgroundColor: "white" }]}
                                onChangeText={(e) => dgc.value = Number(e)}
                            />

                        </View>
                    </View>

                    <View style={styles.tabItem}>
                        <Text style={[styles.tabItemText, styles.tabItemKey]}>
                            Voltaage RY :{" "}
                        </Text>
                        <View style={[styles.tabItemValue, styles.textinputStyle, dgc.value < 1200 ? { borderWidth: 0.2, borderColor: "red" } : styles.tabItemValue]}>

                            <TextInput style={[styles.tabItemText, styles.tabItemValue, Platform.OS === "web" ? { outlineStyle: "none" } : { backgroundColor: "white" }]}
                                onChangeText={(e) => dgc.value = Number(e)}
                            />

                        </View>
                    </View>

                    <View style={styles.tabItem}>
                        <Text style={[styles.tabItemText, styles.tabItemKey]}>
                            Voltaage RB :{" "}
                        </Text>
                        <View style={[styles.tabItemValue, styles.textinputStyle, dgc.value < 1200 ? { borderWidth: 0.2, borderColor: "red" } : styles.tabItemValue]}>

                            <TextInput style={[styles.tabItemText, styles.tabItemValue, Platform.OS === "web" ? { outlineStyle: "none" } : { backgroundColor: "white" }]}
                                onChangeText={(e) => dgc.value = Number(e)}
                            />

                        </View>
                    </View>

                    <View style={styles.tabItem}>
                        <Text style={[styles.tabItemText, styles.tabItemKey]}>
                            Current R :{" "}
                        </Text>
                        <View style={[styles.tabItemValue, styles.textinputStyle, dgc.value < 1200 ? { borderWidth: 0.2, borderColor: "red" } : styles.tabItemValue]}>

                            <TextInput style={[styles.tabItemText, styles.tabItemValue, Platform.OS === "web" ? { outlineStyle: "none" } : { backgroundColor: "white" }]}
                                onChangeText={(e) => dgc.value = Number(e)}
                            />

                        </View>
                    </View>

                    <View style={styles.tabItem}>
                        <Text style={[styles.tabItemText, styles.tabItemKey]}>
                            Current B :{" "}
                        </Text>
                        <View style={[styles.tabItemValue, styles.textinputStyle, dgc.value < 1200 ? { borderWidth: 0.2, borderColor: "red" } : styles.tabItemValue]}>

                            <TextInput style={[styles.tabItemText, styles.tabItemValue, Platform.OS === "web" ? { outlineStyle: "none" } : { backgroundColor: "white" }]}
                                onChangeText={(e) => dgc.value = Number(e)}
                            />

                        </View>
                    </View>

                    <View style={styles.tabItem}>
                        <Text style={[styles.tabItemText, styles.tabItemKey]}>
                            Load :{" "}
                        </Text>
                        <View style={[styles.tabItemValue, styles.textinputStyle, dgc.value < 1200 ? { borderWidth: 0.2, borderColor: "red" } : styles.tabItemValue]}>

                            <TextInput style={[styles.tabItemText, styles.tabItemValue, Platform.OS === "web" ? { outlineStyle: "none" } : { backgroundColor: "white" }]}
                                onChangeText={(e) => dgc.value = Number(e)}
                            />

                        </View>
                    </View>

                    <View style={styles.tabItem}>
                        <Text style={[styles.tabItemText, styles.tabItemKey]}>
                            PF :{" "}
                        </Text>
                        <View style={[styles.tabItemValue, styles.textinputStyle, dgc.value < 1200 ? { borderWidth: 0.2, borderColor: "red" } : styles.tabItemValue]}>

                            <TextInput style={[styles.tabItemText, styles.tabItemValue, Platform.OS === "web" ? { outlineStyle: "none" } : { backgroundColor: "white" }]}
                                onChangeText={(e) => dgc.value = Number(e)}
                            />

                        </View>
                    </View>

                </View>
            </ScrollView>
        )
    };



    const DieselDetails = () => (
        <ScrollView style={[styles.scene]}>
            <View style={styles.TabInnerContainer}>
                <View style={styles.tabItem}>
                    <Text style={[styles.tabItemText, styles.tabItemKey]}>
                        Diesel Available :{" "}
                    </Text>
                    <View style={[styles.tabItemValue, styles.textinputStyle, dgc.value < 1200 ? { borderWidth: 0.2, borderColor: "red" } : styles.tabItemValue]}>

                        <TextInput style={[styles.tabItemText, styles.tabItemValue, Platform.OS === "web" ? { outlineStyle: "none" } : { backgroundColor: "white" }]}
                            onChangeText={(e) => dgc.value = Number(e)}
                        />

                    </View>
                </View>
                <View style={styles.tabItem}>
                    <Text style={[styles.tabItemText, styles.tabItemKey]}>
                        Diesel Brought :{" "}
                    </Text>
                    <View style={[styles.tabItemValue, styles.textinputStyle, dgc.value < 1200 ? { borderWidth: 0.2, borderColor: "red" } : styles.tabItemValue]}>

                        <TextInput style={[styles.tabItemText, styles.tabItemValue, Platform.OS === "web" ? { outlineStyle: "none" } : { backgroundColor: "white" }]}
                            onChangeText={(e) => dgc.value = Number(e)}
                        />

                    </View>
                </View>

                <View style={styles.tabItem}>
                    <Text style={[styles.tabItemText, styles.tabItemKey]}>
                        Issued For Other Site :{" "}
                    </Text>
                    <View style={[styles.tabItemValue, styles.textinputStyle, dgc.value < 1200 ? { borderWidth: 0.2, borderColor: "red" } : styles.tabItemValue]}>

                        <TextInput style={[styles.tabItemText, styles.tabItemValue, Platform.OS === "web" ? { outlineStyle: "none" } : { backgroundColor: "white" }]}
                            onChangeText={(e) => dgc.value = Number(e)}
                        />

                    </View>
                </View>


                <View style={styles.tabItem}>
                    <Text style={[styles.tabItemText, styles.tabItemKey]}>
                        Balance Diesel :{" "}
                    </Text>
                    <View style={[styles.tabItemValue, styles.textinputStyle, dgc.value < 1200 ? { borderWidth: 0.2, borderColor: "red" } : styles.tabItemValue]}>

                        <TextInput style={[styles.tabItemText, styles.tabItemValue, Platform.OS === "web" ? { outlineStyle: "none" } : { backgroundColor: "white" }]}
                            onChangeText={(e) => dgc.value = Number(e)}
                        />

                    </View>
                </View>

                <View style={styles.tabItem}>
                    <Text style={[styles.tabItemText, styles.tabItemKey]}>
                        Diesel Consumed :{" "}
                    </Text>
                    <View style={[styles.tabItemValue, styles.textinputStyle, dgc.value < 1200 ? { borderWidth: 0.2, borderColor: "red" } : styles.tabItemValue]}>

                        <TextInput style={[styles.tabItemText, styles.tabItemValue, Platform.OS === "web" ? { outlineStyle: "none" } : { backgroundColor: "white" }]}
                            onChangeText={(e) => dgc.value = Number(e)}
                        />

                    </View>
                </View>

                <View style={styles.tabItem}>
                    <Text style={[styles.tabItemText, styles.tabItemKey]}>
                        Diesel Consumed/Hour :{" "}
                    </Text>
                    <View style={[styles.tabItemValue, styles.textinputStyle, dgc.value < 1200 ? { borderWidth: 0.2, borderColor: "red" } : styles.tabItemValue]}>

                        <TextInput style={[styles.tabItemText, styles.tabItemValue, Platform.OS === "web" ? { outlineStyle: "none" } : { backgroundColor: "white" }]}
                            onChangeText={(e) => dgc.value = Number(e)}
                        />

                    </View>
                </View>

                <View style={styles.tabItem}>
                    <Text style={[styles.tabItemText, styles.tabItemKey]}>
                        KWH/Ltr :{" "}
                    </Text>
                    <View style={[styles.tabItemValue, styles.textinputStyle, dgc.value < 1200 ? { borderWidth: 0.2, borderColor: "red" } : styles.tabItemValue]}>

                        <TextInput style={[styles.tabItemText, styles.tabItemValue, Platform.OS === "web" ? { outlineStyle: "none" } : { backgroundColor: "white" }]}
                            onChangeText={(e) => dgc.value = Number(e)}
                        />

                    </View>
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

    const [dgNo, setdgNo] = useState("DG No-1")

    const refRBSheet1 = useRef();

    const [date, setDate] = useState({
        nativeEvent: {
            timestamp: new Date(),
        },
    });

    const [showDatePicker, setShowDatePicker] = useState(false);


    var dateValue = new Date(date.nativeEvent.timestamp);
    console.log(dateValue);
    var DateString = dateValue.toDateString();


    return (
        <View style={[styles.scene, styles.container]}>








            <View style={styles.basicInfoTitle}>

                <HeaderFilterItem
                    filterName={"DG No"}
                    FilterList={["DG No-1", "DG No-2"]}
                    filterValue={dgNo}
                    filerOnSelectionFunctions={(e) => {
                        setdgNo(e);

                    }}
                    btnCustomStyle={{ borderRadius: 4, paddingVertical: 6, maxWidth: 200 }}
                />

                {/* {showDatePicker && (
        <DateTimePicker
          style={{ width: 1000, height: 50, backgroundColor: "red" }}
          value={dateValue}
          mode="date"
          // is24Hour={true}
          display="default"
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-05-2022"
          maxDate="01-01-2090"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
            // ... You can check the source to find the other keys.
          }}
          onChange={(d) => {
            [setShowDatePicker(false), setDate(d)];
          }}
        />
      )} */}

                <Text style={[styles.basicInfoText, styles.dateText, { color: "rgb(0, 172, 194)", borderRadius: 4, paddingVertical: 6, maxWidth: 200, borderColor: "rgb(0, 172, 194)", borderWidth: 0.5, alignItems: "center", marginVertical: 3, paddingHorizontal: 5, justifyContent: "center", textAlign: "center", marginHorizontal: 1 }]} onPress={() => setShowDatePicker(true)}>05/04/2022</Text>
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

            <MaterialCommunityIcons name="circle-edit-outline" style={styles.editButton} size={55} color="rgb(0, 172, 194)" onPress={() => {
                navigation.navigate("VisitorsForm", {
                    item: item,
                })
            }} />

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
        maxWidth: 500,
        backgroundColor: "#FAFAFA",
        borderRadius: 10,
        // display:"flex",
        // justifyContent:"space-between",
        minWidth: 350,
        alignSelf: "center"
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
        flexWrap: "wrap"
    },
    tabItemValue: {
        flex: 2,
        color: "rgb(0, 172, 194)",
    },
    editButton: {
        color: "rgb(0, 172, 194)",

        position: "absolute",
        justifyContent: 'flex-end',
        bottom: 20,
        right: 20
    },
    textinputStyle: {
        borderWidth: 0.5,
        borderColor: "rgb(0, 172, 194)",
        backgroundColor: "white",
        borderRadius: 3,
        paddingHorizontal: 3

    }
});
