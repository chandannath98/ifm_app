import React, { useState,memo } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  TextInput,Alert, Platform 
} from "react-native";
import { useNavigation } from "@react-navigation/native";







// ******************Main Function*************************//

const ElecMeterItem = (props) => {
  const navigation = useNavigation();
var item=props.item
  var editMode=props.editMode
  const [elecOld, setElecOld] = useState(item.Mains_Old_Reading?item.Mains_Old_Reading:0);
  const [elecNew, setElecNew] = useState(item.Mains_New_Reading?item.Mains_New_Reading:0);
  const [dgOld, setDgOld] = useState(item.DG_Old_Reading?item.DG_Old_Reading:0);
  const [dgNew, setDgNew] = useState(item.Dg_New_Reading?item.Dg_New_Reading:0);
  const [saved, setSaved] = useState(!props.editMode);
var elecricityNewReading=item.Mains_New_Reading
var dgNewReading=item.Dg_New_Reading


const TwoButtonAlert = () =>
    Alert.alert(
      "Error!",

      "Consumed Units cant't be negetive, Please check!",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );








  
  return (
    <View style={[styles.listing_container, styles.shadowProp]}>
      {/* {selectedVisitorsItems.includes(props.item.visitor_name) ? (
          <AntDesign name="checkcircle" size={15} color="rgb(0, 172, 194)" />
        ) : (
          <Text></Text>
        )} */}

      <TouchableOpacity
        style={[styles.listing_1container]}
        onPress={() => {editMode?0:
          navigation.navigate("Elec Detail Page", {
            item: props.item,
          });
        }}
      >
        <View style={[styles.listing_inline_first_row, styles.infomationLine]}>
          <Text style={styles.listing_top_line}> {item.Unit_No}</Text>
          <Text> June-2022 </Text>
        </View>

        <View style={styles.listing_inline_second_row}>
          <Text style={styles.headerText}>Electricity Reading </Text>
        </View>

        <View style={styles.listing_inline_second_row}>
          <Text style={styles.listing_second_line}>
            Old : <Text style={styles.infoValue}> {elecOld}</Text>
          </Text>


          {editMode ? (
            <View style={[styles.listing_second_line, styles.inputcontainer]}>
              <Text style={styles.listing_second_line}>New : </Text>

              <TextInput
                value={elecNew.toString()}
                onChangeText={setElecNew}
                onChange={()=>setSaved(false)}
                
                placeholder="New Reading"
                style={[styles.inputReading,(Platform.OS==="android"?styles.inputReading:styles.inputWeb)]}
              />
            </View>
          ) : (
            <Text style={styles.listing_second_line}>
              New : <Text style={styles.infoValue}> {elecNew}</Text>
            </Text>
          )}
        </View>


        <View style={styles.listing_inline_second_row}>
         
          <Text style={styles.listing_second_line}>
            Consumed :{" "}
            <Text style={[styles.infoValue,(elecNew - elecOld)<0?{color:"red"}:styles.infoValue]}> {elecNew - elecOld}</Text>
          </Text>
        </View>

        <View style={styles.listing_inline_second_row}>
          <Text style={styles.headerText}> DG Reading </Text>
        </View>

        <View style={styles.listing_inline_second_row}>
          <Text style={styles.listing_second_line}>
            Old: <Text style={styles.infoValue}> {dgOld}</Text>
          </Text>

          {editMode ? (
            <View style={[styles.listing_second_line, styles.inputcontainer]}>
              <Text style={styles.listing_second_line}>New : </Text>
              <TextInput
                value={dgNew.toString()}
                onChangeText={setDgNew}
                onChange={()=>setSaved(false)}
                placeholder="New Reading"
                style={[styles.inputReading,(Platform.OS==="android"?styles.inputReading:styles.inputWeb)]}
              />
            </View>
          ) : (
            <Text style={styles.listing_second_line}>
              New : <Text style={styles.infoValue}> {dgNew}</Text>
            </Text>
          )}
        </View>

        <View style={styles.listing_inline_second_row}>
          {/* <Text style={styles.listing_second_line}>DG New Reading : <Text style={styles.infoValue}> 250</Text></Text> */}
          <Text style={styles.listing_second_line}>
            Consumed : <Text style={[styles.infoValue,(dgNew - dgOld)<0?{color:"red"}:styles.infoValue]}> {dgNew - dgOld}</Text>
          </Text>
        </View>

        {(editMode&(!saved&(elecNew!=elecricityNewReading || dgNew!=dgNewReading))) ? (
          <TouchableOpacity onPress={()=>{
            if((elecNew-elecOld)>=0&(dgNew-dgOld)>=0){

              setSaved(true)
            }else{
              alert("Consumed Units can't be negetive, Please Check")
            }

            }}>
            <View style={styles.listing_inline_second_row}>
              <Text style={styles.saveButton}> Save </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <View></View>
        )}

{(!saved&(elecNew!=elecricityNewReading || dgNew!=dgNewReading))? <Text style={{color:"red"}}>Please save</Text>:<View></View>}

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  listing_1container: {
    flex: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // backgroundColor:"white",
  },

  listing_container: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: 10,

    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginVertical: 2,
    // borderColor:"grey",
  },

  shadowProp: {
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },

  listing_inline_first_row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listing_inline_second_row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  listing_top_line: {
    fontSize: 17,
    fontWeight: "bold",
    // fontFamily: 'monospace'
  },
  listing_second_line: {
    color: "grey",
  },

  infomationLine: {
    paddingVertical: 5,
  },
  infoValue: {
    color: "rgb(0, 172, 194)",
  },
  inputReading: {
    
    backgroundColor: "#edeef0",
    paddingHorizontal: 3,
    borderRadius: 5,
    borderColor:"rgb(0, 172, 194)",
    borderWidth:0.5
  },
  headerText: {
    backgroundColor: "rgb(0, 172, 194)",
    color: "white",
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  saveButton: {
    backgroundColor: "green",
    color: "white",
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  inputcontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputWeb:{
    // backgroundColor:"red",
    outlineStyle: 'none',
    paddingVertical:3,
   maxWidth:50
  }
});

export default memo(ElecMeterItem);
