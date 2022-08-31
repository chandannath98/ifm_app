import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import React, { useState } from "react";
import { Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Rating, AirbnbRating } from "react-native-ratings";
import DateTimePicker from "@react-native-community/datetimepicker";

import { EvilIcons } from "@expo/vector-icons";
import { Dropdown } from "sharingan-rn-modal-dropdown";



const UnitItem=(props)=>{
    return(
        <View style={styles.item}>

        <View style={styles.itemFirstCol}>
          <Text style={styles.keyName}>FCA-05-203</Text>
        </View>

        <View style={styles.itemOtherCol}>
          <Text style={styles.OldReadingText}>469</Text>
        </View>

        <View style={styles.itemOtherCol}>
          <TextInput placeholder="New Reading" style={styles.inputStyle} />
        </View>

      </View>
    )
    }


const ElecMeterForm = ({ navigation, route }) => {
  return (
    <View style={[styles.safeAreaViewStyle]}>
      <View style={styles.topHeader}>
        <View
          style={{ flex: 4, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16, color:"white" }}>Unit</Text>
        </View>

        <View
          style={{ flex: 3, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16, color:"white" }}>Old Reading</Text>
        </View>

        <View
          style={{ flex: 3, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16, color:"white" }}>New Reading</Text>
        </View>
      </View>


<ScrollView>

<UnitItem/>
<UnitItem/>
<UnitItem/>
<UnitItem/>
<UnitItem/>
<UnitItem/>
<UnitItem/>
<UnitItem/>
<UnitItem/>
<UnitItem/>
<UnitItem/>
<UnitItem/>
<UnitItem/>
<UnitItem/>
<UnitItem/>
<UnitItem/>
<UnitItem/>
<UnitItem/>
<UnitItem/>
<UnitItem/>
<UnitItem/>
<UnitItem/>
<UnitItem/>
<UnitItem/>

</ScrollView>
      


    </View>
  );
};

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
    backgroundColor: "white",
    
  },
  topHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "rgb(0, 172, 194)",
    color:"white",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    // backgroundColor:"white",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  itemFirstCol: { flex: 4, justifyContent: "center", alignItems: "center" },
  itemOtherCol: { flex: 3, justifyContent: "center", alignItems: "center" },
  keyName: { fontSize: 15, color: "rgb(0, 172, 194)" },
  OldReadingText: { fontSize: 15, color: "grey" },
  newReadingText: { fontSize: 15 },
  inputStyle: {
    borderColor: "rgb(0, 172, 194)",
    borderWidth: 0.5,
    padding: 5,
    borderRadius: 8,
  },
});

export default ElecMeterForm;
