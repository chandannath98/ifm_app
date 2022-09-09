import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottemTabNav from './bottomTabNavigator';
import CheckList from '../components/CheckList';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.openDrawer()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
   
      <Drawer.Navigator >
        <Drawer.Screen name="Home Drawer" component={BottemTabNav} 
        options={{
            headerTintColor:"white",
            headerStyle: { backgroundColor: 'rgb(0, 172, 194)',elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,height:30 },
            // tabBarIcon:((color)=>(
            //     <FontAwesome name="home" size={25} color={"#0d0d0d"} />
            // ))
            // tabBarIcon: ({ focused, size }) => {
            //   // const icon=focused?"bell":"home";
            //   const color = focused ? "rgb(0, 172, 194)" : "black";
            //   return <MaterialIcons name="people" size={25} color={color} />;
            // },
            title:"Home",
  
            headerShown: false,
          }}
        />
        <Drawer.Screen name="CheckList" component={CheckList} options={{
            headerTintColor:"rgb(0, 172, 194)",
            
            // tabBarIcon:((color)=>(
            //     <FontAwesome name="home" size={25} color={"#0d0d0d"} />
            // ))
            // tabBarIcon: ({ focused, size }) => {
            //   // const icon=focused?"bell":"home";
            //   const color = focused ? "rgb(0, 172, 194)" : "black";
            //   return <MaterialIcons name="people" size={25} color={color} />;
            // },
            title:"Checklist",
  
            // headerShown: false,
          }} />
      </Drawer.Navigator>
      
  );
}