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

// const navigation = useNavigation();

const Route=()=>{

const stack= createStackNavigator();

return(
    <NavigationContainer>
        
        <stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: 'rgb(0, 172, 194)' }
        }}>
            <stack.Screen name="Home" component={BottemTabNav} options={{headerShown:false}} />
            <stack.Screen name="PostDeatils" component={PostDeatils} options={{
                title: 'Visiors Details',
                headerTintColor:"white"
                
        }} />
            <stack.Screen name="VisitorsForm" component={VisitorsForm} options={{
                title: 'Visiors Form',
                headerTintColor:"white"
                
        }}/>
            <stack.Screen name="Project Security Date Wise"  component={ProjectSecurityDateWiseGrouping} options={{
                headerShown:true, title: 'Project Security', 
                headerTintColor:"white"
                
        }} />
            <stack.Screen name="Project Security Listing"  component={ProjectSecurityListing} options={{
                headerShown:true, title: 'Project Security', 
                headerTintColor:"white"
                
        }} />
            <stack.Screen name="Project Security Detail Page"  component={ProjectSecurityDetailsPage} options={{
                headerShown:true, title: 'Project Security Detail Page', 
                headerTintColor:"white"
                
        }} />
            
        </stack.Navigator>
    </NavigationContainer>
)

}
export default Route;