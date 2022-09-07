import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, ScrollView } from 'native-base';
import MaterialIn from './MaterialIN';
import MaterialOut from './MaterialOut';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';


const Tab = createMaterialTopTabNavigator();

const HomeScreen=()=>{
    return(
        <View>
            <Text> Home</Text>
        </View>
    )
}



function MaterialInOut({navigation}) {



  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity style={{marginHorizontal:5}}  onPress={() => navigation.openDrawer()} >
      <Feather name="menu" size={24} color="white" />
      </TouchableOpacity>
      ),
    });
  }, [navigation]);









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


















