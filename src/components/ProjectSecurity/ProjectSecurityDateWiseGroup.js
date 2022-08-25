import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,

} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { getFields } from "../../CustomFunctions/CustomFunctions";
import ProjectSecurityGropingItem from "./ProjectSecurityGropingItem";
import { AntDesign } from '@expo/vector-icons';









// ******************Main Function*************************//



const ProjectSecurityDateWiseGrouping = ({ navigation, route }) => {


  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

  var data = route.params.securitydata.filter((item)=>{
    {
      return (monthNames[(new Date(item.date).getMonth() + 1)] + " - " + new Date(item.date).getFullYear().toString())===route.params.value
    
    }});

  var dates = getFields("date", data).filter(
    (item, i, ar) => ar.indexOf(item) === i
  );


const onpress=()=>{
  console.log("presssed")
}




return(

  <SafeAreaView style={styles.container}>

<View style={styles.header}>
<AntDesign name="calendar" size={25} color="#fff" />
<Text style={styles.headertext}>Dates</Text>
</View>
    <View style={{
    
  // paddingVertical:10
  }}>
    <FlatList
    
      data={dates}
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 100,
        paddingHorizontal:6
      }}
      // stickyHeaderIndices={[0,6,10]}
      renderItem={({ item }) => <View>

     
      <ProjectSecurityGropingItem item={item} onpress={()=>navigation.navigate("Project Security Listing",{
        data:data, value:item
      })} />
     
      </View>
    }
    />
    </View>
    
  </SafeAreaView>
)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  header:{
    display:"flex",
    justifyContent:"space-around",
    flexDirection:"row",
    alignItems:"center",
    padding:10,
    margin:10,
    backgroundColor:"rgb(0, 172, 194)",
    borderRadius:10
  },
  headertext:{
    fontSize:25,
    color:"#fff"
    
  }
});

export default ProjectSecurityDateWiseGrouping;
