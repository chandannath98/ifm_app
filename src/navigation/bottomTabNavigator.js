import Home from "../screens/Home";

// import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import { Octicons } from '@expo/vector-icons';
import ProjectSecurity from "../components/ProjectSecurity/ProjectSecurityHome";
import { MaterialIcons } from "@expo/vector-icons";

import Meters from "../components/Meters";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ElecMeterForm from "../components/Meters/ElecMeter/ElecMeterForm";
import MaterialInOut from "../components/MaterialInOut";
import IView from "../components/Iview";
import MaterialInDetails from "../components/MaterialInOut/MaterialIN/MaterialInDetails";
import Example from "../components/modelViewer";









const BottemTabNav = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      style={{
        margin: 5,
      }}
      screenOptions={{
        // tabBarActiveBackgroundColor: "rgb(0, 172, 194)",
        tabBarActiveTintColor: "rgb(0, 172, 194)",
        // tabBarStyle: {position:'absolute',bottom:5,marginHorizontal:15,borderRadius:15 },
      }}
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
            const color = focused ? "rgb(0, 172, 194)" : "black";
            return <MaterialIcons name="people" size={25} color={color} />;
          },

          headerShown: false,
        }}
      />
      <Tab.Screen
        name={"Proect Security"}
        component={ProjectSecurity}
        options={{
          tabBarIcon: ({ focused, size }) => {
            // const icon=focused?"bell":"home";
            const color = focused ? "rgb(0, 172, 194)" : "black";
            return <MaterialIcons name="security" size={25} color={color} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={"Meters"}
        component={Meters}
        options={{
          tabBarIcon: ({ focused, size }) => {
            // const icon=focused?"bell":"home";
            const color = focused ? "rgb(0, 172, 194)" : "black";
            return <Octicons name="meter" size={25} color={color} />;
          },
          headerShown: false,
        }}
      />

      <Tab.Screen
        name={"Maaterial In/Out"}
        component={MaterialInOut}
        options={{
          tabBarIcon: ({ focused, size }) => {
            // const icon=focused?"bell":"home";
            const color = focused ? "rgb(0, 172, 194)" : "black";
            return <MaterialCommunityIcons name="boom-gate" size={25} color={color} />;
          },
          headerShown: false,
        }}
      />
    

      <Tab.Screen
        name={"Example"}
        component={Example}
        options={{
          tabBarIcon: ({ focused, size }) => {
            // const icon=focused?"bell":"home";
            const color = focused ? "rgb(0, 172, 194)" : "black";
            return <MaterialCommunityIcons name="boom-gate" size={25} color={color} />;
          },
          headerShown: false,
        }}
      />
    

      
    

   



    </Tab.Navigator>
  );
};
export default BottemTabNav;
