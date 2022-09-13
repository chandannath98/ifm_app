import Home from "../screens/Home";

// import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Meters from "../components/Meters";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MaterialInOut from "../components/MaterialInOut";
import { Text } from "react-native";
import { View } from "react-native";
import ProjectSecurityListing from "../components/ProjectSecurity/ProjectSecurityListing";
import { Platform } from "react-native";

// *********Main Function************

const BottemTabNav = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      style={{
        margin: 5,
      }}
      screenOptions={
        Platform.OS != "web"
          ? {
              // tabBarActiveBackgroundColor: "rgb(0, 172, 194)",
              tabBarActiveTintColor: "rgb(0, 172, 194)",
              // tabBarInactiveTintColor:"black",
            }
          : {
              // tabBarActiveBackgroundColor: "rgb(0, 172, 194)",
              tabBarActiveTintColor: "rgb(0, 172, 194)",
              // tabBarInactiveTintColor:"black",
              tabBarStyle: {
                position: "absolute",
                bottom: 10,
                marginHorizontal: "auto",
                borderRadius: 25,
                maxWidth: 500,
                alignSelf: "center",
                justifyContent: "center",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderTopWidth: 1,
                shadowColor: "grey",

                // shadowColor: "#000",
                shadowOffset: {
                  width: 1,
                  height: 2,
                },
                shadowOpacity: 0.5,
                shadowRadius: 15.35,
              },
            }
      }
      sceneContainerStyle={
        {
          // backgroundColor: "#fff"
        }
      }
    >
      <Tab.Screen
        name={"VisitorsList"}
        component={Home}
        options={{
          // tabBarIcon:((color)=>(
          //     <FontAwesome name="home" size={25} color={"#0d0d0d"} />
          // ))
          tabBarIcon: ({ focused, size }) => {
            // const icon=focused?"bell":"home";
            const color = focused ? "rgb(0, 172, 194)" : "grey";
            return <MaterialIcons name="people" size={25} color={color} />;
          },

          headerShown: false,
        }}
      />
      <Tab.Screen
        name={"Proect Security"}
        component={ProjectSecurityListing}
        options={{
          tabBarIcon: ({ focused, size }) => {
            // const icon=focused?"bell":"home";
            const color = focused ? "rgb(0, 172, 194)" : "grey";
            return <MaterialIcons name="security" size={25} color={color} />;
          },
          headerShown: false,
          // headerTintColor: "white",
          headerStyle: {
            // backgroundColor: "rgb(0, 172, 194)",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitle: (props) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <MaterialIcons
                name="security"
                size={20}
                color="rgb(0, 172, 194)"
              />
              <Text
                style={{
                  color: "rgb(0, 172, 194)",
                  fontSize: 20,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                Project Security
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={"Meters"}
        component={Meters}
        options={{
          tabBarIcon: ({ focused, size }) => {
            // const icon=focused?"bell":"home";
            const color = focused ? "rgb(0, 172, 194)" : "grey";
            return <Octicons name="meter" size={25} color={color} />;
          },
          // headerShown: false,
          headerTintColor: "white",
          headerStyle: {
            // backgroundColor: "rgb(0, 172, 194)",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitle: (props) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Octicons name="meter" size={20} color={"rgb(0, 172, 194)"} />
              <Text
                style={{
                  color: "rgb(0, 172, 194)",
                  fontSize: 20,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                Meters
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={"Maaterial In/Out"}
        component={MaterialInOut}
        options={{
          tabBarIcon: ({ focused, size }) => {
            // const icon=focused?"bell":"home";
            const color = focused ? "rgb(0, 172, 194)" : "grey";
            return (
              <MaterialCommunityIcons
                name="boom-gate"
                size={25}
                color={color}
              />
            );
          },

          headerTintColor: "white",
          headerStyle: {
            // backgroundColor: "rgb(0, 172, 194)",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitle: (props) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <MaterialCommunityIcons
                name="gate"
                size={20}
                color="rgb(0, 172, 194)"
              />
              <Text
                style={{
                  color: "rgb(0, 172, 194)",
                  fontSize: 20,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                Material In/Out
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottemTabNav;
