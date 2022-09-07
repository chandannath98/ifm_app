import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { getFields } from "../../CustomFunctions/CustomFunctions";
import { projectSecurityData } from "./projectsecuritydata";
import ProjectSecurityGropingItem from "./ProjectSecurityGropingItem";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";



const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


function geMonthYear(data) {
  var output = [];
  for (var i = 0; i < data.length; ++i)
    output.push(
      monthNames[(new Date(data[i]["date"]).getMonth() )] +
        " - " +
        new Date(data[i]["date"]).getFullYear().toString()
    );

  return output;
}



// ******************Main Function*************************

const ProjectSecurity = () => {


  const navigation = useNavigation();




  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity style={{marginHorizontal:5}}  onPress={() => navigation.openDrawer()} >
      <Feather name="menu" size={24} color="white" />
      </TouchableOpacity>
      ),
    });
  }, [navigation]);













  var securitydata = projectSecurityData;


  var data = geMonthYear(securitydata).filter((item, i, ar) => ar.indexOf(item) === i);

  const onpress=()=>{
    navigation.navigate("Project Security Date Wise",{securitydata:securitydata,data:data,value:item})
  }


return(
  <SafeAreaView style={styles.container}>
    {/* <View style={styles.Topheader}>
      <MaterialIcons name="security" size={30} color="white" />
      <Text style={styles.Topheadertext}>Project Security</Text>
    </View> */}
    {/* <View style={styles.header}>
      <AntDesign name="calendar" size={50} color="#fff" />
      <Text style={styles.headertext}>Month-Year</Text>
    </View> */}
    <View
      style={{
        // backgroundColor: "rgb(0, 172, 194)",
        
        marginVertical: 10,
        // paddingVertical:10
      }}
    >
      <FlatList
        data={data}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 100,
          paddingHorizontal:6
        }}
        // stickyHeaderIndices={[0,6,10]}
        renderItem={({ item }) => (
          <View>
            {/* <Pressable onPress={
            () => {
                  navigation.navigate("Project Security Date Wise",{securitydata:securitydata,data:data,value:item})
                }
          } 
          style={styles.item}>
              <Text style={styles.textStyle}>{item}</Text>
              <AntDesign name="right" size={20} color="black" />
            </Pressable> */}
                  <ProjectSecurityGropingItem item={item} onpress={()=>navigation.navigate("Project Security Date Wise",{securitydata:securitydata,data:data,value:item})} />

          </View>
        )}
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
  header: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    margin: 10,
    backgroundColor: "rgb(0, 172, 194)",
    borderRadius: 10,
  },
  Topheader: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    margin: 10,
    backgroundColor: "rgb(0, 172, 194)",
    borderRadius: 10,
  },
  headertext: {
    fontSize: 50,
    color: "#fff",
  },
  Topheadertext: {
    fontSize: 25,
    color: "#fff",
  },
  textStyle: {
    fontSize: 20,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 2,
    borderRadius: 6,
  },
});

export default ProjectSecurity;
