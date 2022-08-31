
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, ScrollView } from 'native-base';
import DGMeter from './dgMeter';
import ElecMeter from './ElecMeter';
import HTMeter from './htMeter';
import LTMeter from './LTMeter';

const Tab = createMaterialTopTabNavigator();

const HomeScreen=()=>{
    return(
        <View>
            <Text> Home</Text>
        </View>
    )
}



function Meters() {
  return (
   
    <Tab.Navigator
    
    screenOptions={{
        tabBarLabelStyle: { fontSize: 12,color:"rgb(0, 172, 194)" },
        tabBarItemStyle: { width: 100 },
        tabBarStyle: { backgroundColor: 'white' },
        tabBarIndicatorStyle:{backgroundColor:"rgb(0, 172, 194)"},
        tabBarActiveTintColor: "grey",
      }} 
      
    >
      <Tab.Screen  name="DG Meter" component={DGMeter} />
      <Tab.Screen name="HT Meter" component={HTMeter} />
      <Tab.Screen name="LT Meter" component={LTMeter} />
      <Tab.Screen name="Elec. Meter" component={ElecMeter} />
    
    </Tab.Navigator>
   
  );
}


export default Meters

























// import React from "react";
// import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
// import { AntDesign } from "@expo/vector-icons";
// import { MaterialIcons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import { Octicons } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";

// // ******************Main Function*************************

// const Meters = () => {
//   const navigation = useNavigation();

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.Topheader}>
//         <Octicons name="meter" size={30} color="white" />

//         <Text style={styles.Topheadertext}>Meters</Text>
//       </View>
//       {/* <View style={styles.header}>
//       <AntDesign name="calendar" size={50} color="#fff" />
//       <Text style={styles.headertext}>Month-Year</Text>
//     </View> */}
//       <View
//         style={{
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <View style={{display:"flex",flexDirection:"row"}}>



//           <View
//             style={{
//                backgroundColor: "white",
//               justifyContent: "center",
//               alignItems: "center",
//               padding: 20,
//               borderRadius: 25,
//               margin:20,
//               width:"42%",
//               elevation:5,
//               shadowColor: 'grey',
              
            
//           shadowOffset: {
//               width: 0,
//               height: 9,
//           },
//           shadowOpacity: 0.50,
//           shadowRadius: 12.35,

//             }}
//           >
//             <Text style={{ color: "rgb(0, 172, 194)", fontSize: 25, fontWeight: "bold" }}>
//               DG
//             </Text>
//             <Text style={{ color: "rgb(0, 172, 194)", fontSize: 25, fontWeight: "bold" }}>
//               Meter
//             </Text>
//             <Ionicons name="speedometer-outline" size={50} color="rgb(0, 172, 194)" />
//           </View>

//           <View
//             style={{
//                backgroundColor: "white",
//               justifyContent: "center",
//               alignItems: "center",
//               padding: 20,
//               borderRadius: 25,
//               margin:20,
//               width:"42%",
//               elevation:5,
//               shadowColor: 'grey',
              
            
//               shadowOffset: {
//                   width: 0,
//                   height: 9,
//               },
//               shadowOpacity: 0.50,
//               shadowRadius: 12.35,
//             }}
//           >
//             <Text style={{ color: "rgb(0, 172, 194)", fontSize: 25, fontWeight: "bold" }}>
//               LT
//             </Text>
//             <Text style={{ color: "rgb(0, 172, 194)", fontSize: 25, fontWeight: "bold" }}>
//               Meter
//             </Text>
//             <Ionicons name="speedometer-outline" size={50} color="rgb(0, 172, 194)" />
//           </View>


          
//         </View>
//         <View style={{display:"flex",flexDirection:"row"}}>



//           <View
//             style={{
//                backgroundColor: "white",
//               justifyContent: "center",
//               alignItems: "center",
//               padding: 20,
//               borderRadius: 25,
//               margin:20,
//               width:"42%",
//               elevation:5,
//               elevation:5,
//               shadowColor: 'grey',
              
            
//               shadowOffset: {
//                   width: 0,
//                   height: 9,
//               },
//               shadowOpacity: 0.50,
//               shadowRadius: 12.35,
//             }}
//           >
//             <Text style={{ color: "rgb(0, 172, 194)", fontSize: 25, fontWeight: "bold" }}>
//               Electricity
//             </Text>
//             <Text style={{ color: "rgb(0, 172, 194)", fontSize: 25, fontWeight: "bold" }}>
//               Meter
//             </Text>
//             <Ionicons name="speedometer-outline" size={50} color="rgb(0, 172, 194)" />
//           </View>

//           <View
//             style={{
//               backgroundColor: "white",
//               justifyContent: "center",
//               alignItems: "center",
//               padding: 20,
//               borderRadius: 25,
//               margin:20,
//               width:"42%",
//               elevation:5,
//               shadowColor: 'grey',
              
            
//               shadowOffset: {
//                   width: 0,
//                   height: 9,
//               },
//               shadowOpacity: 0.50,
//               shadowRadius: 12.35,
              
//             }}
//           >
//             <Text style={{ color: "rgb(0, 172, 194)", fontSize: 25, fontWeight: "bold" }}>
//               HT
//             </Text>
//             <Text style={{ color: "rgb(0, 172, 194)", fontSize: 25, fontWeight: "bold" }}>
//               Meter
//             </Text>
//             <Ionicons name="speedometer-outline" size={50} color="rgb(0, 172, 194)" />
//           </View>


          
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginHorizontal: 5,
//   },

//   Topheader: {
//     display: "flex",
//     justifyContent: "space-around",
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 10,
//     margin: 10,
//     backgroundColor: "rgb(0, 172, 194)",
//     borderRadius: 10,
//   },

//   Topheadertext: {
//     fontSize: 25,
//     color: "#fff",
//   },
// });

// export default Meters;
