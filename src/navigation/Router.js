import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Pressable,Text,View } from "react-native";
import ProjectSecurityDateWiseGrouping from "../components/ProjectSecurity/ProjectSecurityDateWiseGroup";
import VisitorsForm from "../components/Visitors_View/VisitorsForm";
import Home from "../screens/Home";
import PostDeatils from "../screens/postdetails";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottemTabNav from "./bottomTabNavigator";
import { useNavigation } from "@react-navigation/native";
import ProjectSecurityListing from "../components/ProjectSecurity/ProjectSecurityListing";
import ProjectSecurityDetailsPage from "../components/ProjectSecurity/ProjectSecurityDetailsPage";
import DGMeterDetails from "../components/Meters/dgMeter/DGMeterDetailPage";
import HTMeterDetails from "../components/Meters/htMeter/HTMeterDetails";
import LTMeterDetails from "../components/Meters/LTMeter/LTMeterDetails";
import ElecMeterDetails from "../components/Meters/ElecMeter/ElecMeterDetails";
import IView from "../components/Iview";
import MaterialInDetails from "../components/MaterialInOut/MaterialIN/MaterialInDetails";
import { Button } from "react-native";
import MaterialOutDetails from "../components/MaterialInOut/MaterialOut/MaterialOutDetails";
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNav from "./drawerNavigator";
import CheckListDetails from "../components/CheckList/CheckListDetailPage";
import CheckListForm from "../components/CheckList/CheckListForm";

// const navigation = useNavigation();

const Drawer = createDrawerNavigator();


const Route=()=>{

const stack= createStackNavigator();


function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  
  





return(
    <NavigationContainer>
        
        <stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: 'rgb(0, 172, 194)',borderColor:"rgb(0, 172, 194)",borderWidth:0 }
        }}>
            <stack.Screen name="Home" component={DrawerNav} options={{headerShown:false}} />
            {/* <stack.Screen name="Drawer" component={DrawerNav} options={{headerShown:false}} /> */}
            <stack.Screen name="PostDeatils" component={PostDeatils} options={{
                title: 'Visiors Details',
                headerTintColor:"white",
                headerStyle: { backgroundColor: 'rgb(0, 172, 194)',elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0, }
                
        }} />
            <stack.Screen name="VisitorsForm" component={VisitorsForm} options={{
                title: 'Visiors Form',
                headerTintColor:"white"
                
        }}/>
            <stack.Screen name="Project Security Date Wise"  component={ProjectSecurityDateWiseGrouping} options={{
                headerShown:true, title: 'Project Security', 
                headerTintColor:"rgb(0, 172, 194)",
                headerStyle: { backgroundColor: 'none',elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0, }
                
        }} />
            <stack.Screen name="Project Security Listing"  component={ProjectSecurityListing} options={{
                headerShown:true, title: 'Project Security', 
                headerTintColor:"rgb(0, 172, 194)",
                headerStyle: { backgroundColor: 'none',elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0, },
                
                // headerRight: (navigation) => (
                //     <Button
                //       onPress={() =>  navigation.navigate("Imagev")}
                //       title="Info"
                      
                //     />
                //   ),
        }} />
            <stack.Screen name="Project Security Detail Page"  component={ProjectSecurityDetailsPage} options={{
                headerShown:true, title: 'Project Security Detail Page', 
                headerTintColor:"white" 
                
        }} />
            <stack.Screen name="DG Detail Page"  component={DGMeterDetails} options={{
                headerShown:true, title: 'DG Detail Page', 
                headerTintColor:"white",
                headerStyle: { backgroundColor: 'rgb(0, 172, 194)' }
                
        }} />
            <stack.Screen name="HT Detail Page"  component={HTMeterDetails} options={{
                headerShown:true, title: 'HT Detail Page', 
                headerTintColor:"white",
                headerStyle: { backgroundColor: 'rgb(0, 172, 194)' }
                
        }} />
            <stack.Screen name="LT Detail Page"  component={LTMeterDetails} options={{
                headerShown:true, title: 'LT Detail Page', 
                headerTintColor:"white",
                headerStyle: { backgroundColor: 'rgb(0, 172, 194)' }
                
        }} />
            <stack.Screen name="Elec Detail Page"  component={ElecMeterDetails} options={{
                headerShown:true, title: 'Elec Detail Page', 
                headerTintColor:"white",
                headerStyle: { backgroundColor: 'rgb(0, 172, 194)' }
                
        }} />

            <stack.Screen name="ImageV"  component={IView} options={{
                headerShown:true,  title:"Image Viewer", presentation:"modal",
                headerTintColor:"rgb(0, 172, 194)",
                headerStyle: { backgroundColor: '#fff',elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0, }
                
        }} />
            <stack.Screen name="MaterialInDetail"  component={MaterialInDetails} options={{
                headerShown:true,  title:"Material In Detail", presentation:"card", 
                headerTintColor:"#fff",
                // headerStyle: { backgroundColor: '#fff' }
                
        }} />
            <stack.Screen name="MaterialOutDetail"  component={MaterialOutDetails} options={{
                headerShown:true,  title:"Material Out Detail", presentation:"card", 
                headerTintColor:"#fff",
                // headerStyle: { backgroundColor: '#fff' }
                
        }} />
            <stack.Screen name="CheckListDetailPage"  component={CheckListDetails} options={{
                headerShown:true,  title:"Checklist Detail", presentation:"card", 
                headerTintColor:"#fff",
                // headerStyle: { backgroundColor: '#fff' }
                
        }} />
            <stack.Screen name="CheckListForm"  component={CheckListForm} options={{
                headerShown:true,  title:"Checklist Form", presentation:"card", 
                headerTintColor:"rgb(0, 172, 194)",
                headerStyle: { backgroundColor: '#fff' }
                
        }} />
            
        </stack.Navigator>





       
        
     









    </NavigationContainer>
)

}
export default Route;