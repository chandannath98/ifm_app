
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, ScrollView } from 'native-base';
import MaterialIn from './MaterialIN';
import MaterialOut from './MaterialOut';


const Tab = createMaterialTopTabNavigator();

const HomeScreen=()=>{
    return(
        <View>
            <Text> Home</Text>
        </View>
    )
}



function MaterialInOut() {
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
      <Tab.Screen  name="Material In" component={MaterialIn} />
      <Tab.Screen name="Material Out" component={MaterialOut} />
      
    
    </Tab.Navigator>
   
  );
}


export default MaterialInOut


















