
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
