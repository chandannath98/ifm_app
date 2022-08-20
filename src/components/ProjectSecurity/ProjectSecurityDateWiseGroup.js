import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,

} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { getFields } from "../../CustomFunctions/CustomFunctions";
import ProjectSecurityItem from "./ProjectSecurityItem";
import { AntDesign } from '@expo/vector-icons';









// ******************Main Function*************************//



const ProjectSecurityDateWiseGrouping = ({ navigation, route }) => {


  var data = route.params.securitydata.filter((item)=>{
    {
      return ((new Date(item.date).getMonth() + 1).toString() + "-" + new Date(item.date).getFullYear().toString())===route.params.value
    
    }});

  var dates = getFields("date", data).filter(
    (item, i, ar) => ar.indexOf(item) === i
  );


const onpress=()=>{
  
}




return(

  <SafeAreaView style={styles.container}>

<View style={styles.header}>
<AntDesign name="calendar" size={50} color="#fff" />
<Text style={styles.headertext}>Dates</Text>
</View>
    <View style={{backgroundColor:"#CEE5D0",
    paddingHorizontal:10,
    paddingVertical:20,
    borderRadius:15,
    marginVertical:10,
  // paddingVertical:10
  }}>
    <FlatList
    
      data={dates}
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 100,
      }}
      // stickyHeaderIndices={[0,6,10]}
      renderItem={({ item }) => <View>

     
      <ProjectSecurityItem item={item} onpress={onpress}/>
     
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
    backgroundColor:"#CEE5D0",
    borderRadius:10
  },
  headertext:{
    fontSize:50,
    color:"#fff"
    
  }
});

export default ProjectSecurityDateWiseGrouping;
