import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProjectSecurityDateWiseGrouping from "../components/ProjectSecurity/ProjectSecurityDateWiseGroup";
import VisitorsForm from "../components/Visitors_View/VisitorsForm";
import Home from "../screens/Home";
import PostDeatils from "../screens/postdetails";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottemTabNav from "./bottomTabNavigator";

const Route=()=>{
const stack= createStackNavigator();

return(
    <NavigationContainer>
        
        <stack.Navigator screenOptions={{
            //  cardStyle: {backgroundColor: "#CEE5D0"}
        }}>
            <stack.Screen name="Home" component={BottemTabNav} options={{headerShown:false}} />
            <stack.Screen name="PostDeatils" component={PostDeatils} />
            <stack.Screen name="VisitorsForm" component={VisitorsForm} />
            <stack.Screen name="Project Security Date Wise" component={ProjectSecurityDateWiseGrouping} options={{headerShown:true, }} />
            
        </stack.Navigator>
    </NavigationContainer>
)

}
export default Route;