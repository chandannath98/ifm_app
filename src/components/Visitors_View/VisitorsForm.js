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
import { toTimeString } from "./VisitorsItem";

export const data = [
  {
    value: "1",
    label: "Tiger Nixon",
  },
  {
    value: "2",
    label: "Garrett Winters",
  },
  {
    value: "3",
    label: "Ashton Cox",
  },
  {
    value: "4",
    label: "Cedric Kelly",
  },
];

const VisitorsForm = ({ navigation, route }) => {
  const item = route.params ? route.params.item : false;

  const windowWidth = Dimensions.get("window").width;
  const [date, setDate] = useState({
    nativeEvent: {
      timestamp: item ? new Date(item.date) : Date(),
    },
  });
  const [Time, setTime] = useState({
    nativeEvent: {
      timestamp: item ? new Date(item.time_in) : Date("10/05/2022"),
    },
  });
  const [visitorsName, setVisitorsName] = useState(
    item ? item.visitor_name : ""
  );
  const [phone, setPhone] = useState(item ? item.phone : "");
  const [purpose, setPurpose] = useState(item ? item.purpose : "");
  const [whomeToMeet, setWhomeToMeet] = useState(item ? item.whomeToMeet : "");
  const [detailedReasonToVisit, setDetailedReasonToVisit] = useState(
    item ? item.detailedReasonToVisit : ""
  );
  const [solutionOfferd, setSolutionOfferd] = useState(
    item ? item.solutionOfferd : ""
  );
  const [comment, setComment] = useState(item ? item.comment : "");

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  var dateValue = new Date(date.nativeEvent.timestamp);
  console.log(dateValue);
  var DateString = dateValue.toDateString();

  var timeValue = new Date(Time.nativeEvent.timestamp);
  var hours = timeValue.getHours();
  var minutes = timeValue.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var timeString = hours + ":" + minutes + " " + ampm;

  return (
    <View style={[styles.safeAreaViewStyle]}>
      {showDatePicker && (
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
      )}

      {showTimePicker && (
        <DateTimePicker
          style={{ width: 1000, height: 50, backgroundColor: "red" }}
          value={timeValue}
          mode="time"
          // is24Hour={true}
          display="default"
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
            [setShowTimePicker(false), setTime(d)];
          }}
        />
      )}

      <ScrollView style={styles.FormContainer}>
        <Text style={{ paddingTop: 30 }}></Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Visitor's Name</Text>
          <View style={styles.inputview}>
            <Icon color="#333" name="user" type="font-awesome" size={20} />

            <TextInput
              style={windowWidth < 900 ? styles.input : styles.inputWeb}
              placeholder={"Visitors Name"}
              value={visitorsName}
              onChangeText={setVisitorsName}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone</Text>
          <View style={styles.inputview}>
            <Icon color="#333" name="phone" type="font-awesome" size={20} />

            <TextInput
              style={windowWidth < 900 ? styles.input : styles.inputWeb}
              placeholder={"Visitors Phone Number"}
              keyboardType="phone-pad"
              autoComplete="tel"
              maxLength={10}
              value={phone}
              onChangeText={setPhone}
            />
          </View>
        </View>

        <Pressable
          onPress={() => (windowWidth < 500 ? setShowDatePicker(true) : "")}
          style={styles.inputContainer}
        >
          <Text style={styles.label}>Date</Text>
          <View style={styles.inputview}>
            <Icon color="#333" name="calendar" type="font-awesome" size={20} />

            {windowWidth > 500 ? (
              <TextInput
                style={windowWidth < 900 ? styles.input : styles.inputWeb}
                placeholder={"Date"}
              />
            ) : (
              <Text style={styles.dateFormet}>{DateString}</Text>
            )}
          </View>
        </Pressable>

        <Pressable
          onPress={() => (windowWidth < 500 ? setShowTimePicker(true) : "")}
          style={styles.inputContainer}
        >
          <Text style={styles.label}>Time</Text>
          <View style={styles.inputview}>
            <AntDesign name="clockcircleo" size={20} color="black" />

            {windowWidth > 500 ? (
              <TextInput
                style={windowWidth < 900 ? styles.input : styles.inputWeb}
                placeholder={"Date"}
              />
            ) : (
              <Text style={styles.dateFormet}>
                {toTimeString(Time.nativeEvent.timestamp)}
              </Text>
            )}
          </View>
        </Pressable>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Whome To Meet</Text>
          <View style={styles.inputview}>
            <AntDesign name="infocirlceo" size={20} color="black" />

            <Dropdown
              // label="Whome To Meet"
              data={[
                {
                  value: "To Meet Sales Person",
                  label: "To Meet Sales Person",
                },
                {
                  value: "Site Visit",
                  label: "Site Visit",
                },
                {
                  value: "Sales Enquiry",
                  label: "Sales Enquiry",
                },
                {
                  value: "To Complain",
                  label: "To Complain",
                },
              ]}
              enableSearch
              value={purpose}
              onChange={(e) => setPurpose(e)}
              itemContainerStyle={{ backgroundColor: "#fff" }}
              animationOutTiming={20}
              // itemTextStyle={{backgroundColor:"#fff"}}
              // parentDDContainerStyle={{backgroundColor:"#fff"}}
              textInputStyle={styles.inputview}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Purpose</Text>
          <View style={styles.inputview}>
            <AntDesign name="infocirlceo" size={20} color="black" />

            <Dropdown
              // label="Whome To Meet"
              data={[
                {
                  value: "Tarun",
                  label: "Tarun",
                },
                {
                  value: "Komal",
                  label: "Komal",
                },
                {
                  value: "Dilip",
                  label: "Dilip",
                },
                {
                  value: "Apoorva",
                  label: "Apoorva",
                },
              ]}
              enableSearch
              value={whomeToMeet}
              onChange={(e) => setWhomeToMeet(e)}
              itemContainerStyle={{ backgroundColor: "#fff" }}
              animationOutTiming={20}
              // itemTextStyle={{backgroundColor:"#fff"}}
              // parentDDContainerStyle={{backgroundColor:"#fff"}}
              textInputStyle={styles.inputview}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Detailed Reason To Visit</Text>
          <View style={styles.inputview}>
            <AntDesign name="infocirlceo" size={20} color="black" />

            <TextInput
              style={windowWidth < 900 ? styles.input : styles.inputWeb}
              placeholder={"Detailed Reason To Visit"}
              value={detailedReasonToVisit}
              onChangeText={setDetailedReasonToVisit}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Solution Offerd</Text>
          <View style={styles.inputview}>
            <AntDesign name="solution1" size={20} color="black" />

            <TextInput
              style={windowWidth < 900 ? styles.input : styles.inputWeb}
              placeholder={"Solution Offerd"}
              value={solutionOfferd}
              onChangeText={setSolutionOfferd}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Comment</Text>
          <View style={styles.inputview}>
            <EvilIcons name="comment" size={20} color="black" />

            <TextInput
              style={windowWidth < 900 ? styles.input : styles.inputWeb}
              placeholder={"Comment"}
              value={comment}
              onChangeText={setComment}
            />
          </View>
        </View>

        <AirbnbRating defaultRating={5} />

        <Text style={{ paddingBottom: 30 }}></Text>
      </ScrollView>

      <View style={styles.buttonGroup}>
        <Pressable
          style={[styles.button, styles.cancelButton]}
          onPress={() => {
            navigation.goBack(null);
          }}
        >
          <Text style={styles.text}>Cancel</Text>
        </Pressable>

        <Pressable
          style={[styles.button, styles.saveButton]}
          onPress={() => {
            navigation.goBack(null);
          }}
        >
          <Text style={styles.text}>Save</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
    // backgroundColor: "rgb(0, 172, 194)",
  },
  FormContainer: {
    paddingHorizontal: 20,
    // marginTop: 30,
    // paddingBottom:900,
    marginBottom: 55,
  },

  inputview: {
    width: "100%",
    height: 44,
    backgroundColor: "#cef0f5",
    borderRadius: 8,
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0,
  },
  inputWeb: {
    // height: 50,

    outlineStyle: "none",
    // borderWidth: 1,

    paddingHorizontal: 20,
    borderRadius: 3,
  },

  input: {
    // height: 50,

    // borderWidth: 1,

    paddingHorizontal: 20,
    borderRadius: 3,
  },
  label: {
    paddingBottom: 5,
    color: "grey",
  },
  inputContainer: {
    marginTop: 15,
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    position: "absolute",
    bottom: 5,
    right: 30,
    left: 30,
    justifyContent: "space-between",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    // backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  saveButton: {
    backgroundColor: "rgb(0, 172, 194)",
  },
  cancelButton: {
    backgroundColor: "grey",
  },
  dateFormet: {
    paddingHorizontal: 7,
  },
  dateFormetWeb: {
    paddingHorizontal: 7,
    outlineStyle: "none",
    backgroundColor: "red",
  },
});
export default VisitorsForm;
