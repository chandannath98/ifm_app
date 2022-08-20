
import Home from "../screens/Home";
import PostDeatils from "../screens/postdetails";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {FontAwesome} from "@expo/vector-icons"
import VisitorsForm from "../components/Visitors_View/VisitorsForm";
import DulicateForm from "../components/Visitors_View/duplicateform";
import VisitorsChart from "../components/Visitors_View/chartView";
import ProjectSecurityItem from "../components/ProjectSecurity/ProjectSecurityItem";
import ProjectSecurity from "../components/ProjectSecurity/ProjectSecurityHome";
import { MaterialIcons } from '@expo/vector-icons';



const BottemTabNav=()=>{
const Tab=createBottomTabNavigator();

return(
    <Tab.Navigator 
    screenOptions={{
        tabBarActiveBackgroundColor: "#CEE5D0",
        tabBarActiveTintColor: "#5ba662",
        

    }} 
    sceneContainerStyle={{
        // backgroundColor: "#fff"
        }} >


        <Tab.Screen name={"VisitorsList"} component={Home} 
        options={
            {
            tabBarIcon:((color)=>(
                <FontAwesome name="home" size={25} color={"#0d0d0d"} />
            )),
            headerShown:false   
        }
        
        }/>
        <Tab.Screen name={"Proect Security"} component={ProjectSecurity} 
        options={
            {
            tabBarIcon:((color)=>(
                <MaterialIcons name="security" size={25} color="#0d0d0d" />
            )),
            headerShown:false   
        }
        
        }/>
        <Tab.Screen name={"Form"} component={VisitorsForm} 
        options={
            {
            tabBarIcon:((color)=>(
                <MaterialIcons name="home" size={25} color="#0d0d0d" />
            )),
            headerShown:false   
        }
        
        }
        />
        {/* <Tab.Screen name={"navigator"} component={AppNavigator} 
        options={
            {
            tabBarIcon:((color)=>(
                <FontAwesome name="home" size={25} color={"#0d0d0d"} />
            )),
            headerShown:false   
        }
        
        }/> */}


      
    </Tab.Navigator>
)

}
export default BottemTabNav;