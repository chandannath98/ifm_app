
import Home from "../screens/Home";
import PostDeatils from "../screens/postdetails";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {FontAwesome} from "@expo/vector-icons"
import VisitorsForm from "../components/Visitors_View/VisitorsForm";

const BottemTabNav=()=>{
const Tab=createBottomTabNavigator();

return(
    <Tab.Navigator 
    screenOptions={{
        tabBarActiveBackgroundColor: "#CEE5D0",
        tabBarActiveTintColor: "#fff",

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
        <Tab.Screen name={"Proect Security"} component={PostDeatils} 
        options={
            {
            tabBarIcon:((color)=>(
                <FontAwesome name="home" size={25} color={"#0d0d0d"} />
            )),
            headerShown:false   
        }
        
        }/>
        <Tab.Screen name={"Form"} component={VisitorsForm} 
        options={
            {
            tabBarIcon:((color)=>(
                <FontAwesome name="home" size={25} color={"#0d0d0d"} />
            )),
            headerShown:false   
        }
        
        }/>
        <Tab.Screen name={"OverView"} component={Home} 
        options={
            {
            tabBarIcon:((color)=>(
                <FontAwesome name="home" size={25} color={"#0d0d0d"} />
            )),
            headerShown:false   
        }
        
        }/>


      
    </Tab.Navigator>
)

}
export default BottemTabNav;