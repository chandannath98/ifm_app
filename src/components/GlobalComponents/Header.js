import {
    Button,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    FlatList,
    Pressable,
  } from "react-native";

  import { AntDesign, Entypo } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";
 
  import { useState, useEffect } from "react";
  import { setfilterdVisitorsData } from "../../redux/actions";
  import { visitorsdata } from "../../components/Visitors_View/data";
  import { StatusBar } from "expo-status-bar";
  import { DrawerActions } from "@react-navigation/native";
  import { TouchableOpacity } from "react-native";
  import { Feather } from '@expo/vector-icons';
  import RBSheet from "react-native-raw-bottom-sheet";
  import { useRef } from "react";
  





const Header=(params)=>{



// ***************Use refs for bottom sheets***************

const refRBSheet1 = useRef();
const refRBSheet2 = useRef();
const refRBSheet3 = useRef();




const firstFilterVisiblity=true

const firstFiltervalue="First Filter"
const firstFilterName="Year"
const firstFilterList=[2020,2021,2022,2023]
const firstFilerOnSelection=()=>{
    
}




const secondFilterVisiblity=true

const secondFilterBtnText="First Filter"






const thirdFilterVisiblity=true

const thirdFilterBtnText="First Filter"








return(








<View style={{display:"flex",flexDirection:"row", backgroundColor:"white"}}>



{/* ******
      *******Bottom sheet popup 1 for year selection**********
      ******** */}






<RBSheet
        ref={refRBSheet1}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={500}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(5, 5, 5, 0.32)",
            borderTopEndRadius: 15,
          },
          draggableIcon: {
            backgroundColor: "black",
            width: 70,
          },
          container: {
            borderTopEndRadius: 15,
            borderTopStartRadius: 15,
           
           

          },
        }}
      >
        <View style={{flex:1}}>
          <View style={{ marginTop: 5, marginBottom: 15 }}>
            <Text style={{ alignSelf: "center", fontSize: 17, color: "grey" }}>
              {firstFilterName}
            </Text>
          </View>


          <TouchableOpacity
         onPress={() => {refRBSheet1.current.close()}}

          style={{
            backgroundColor: "#fff",
            borderRadius: 15,
            paddingHorizontal: 15,
            paddingVertical: 5,
           
            position:"absolute",
            top:-5,
            right:5
          }}
        >
                   <Entypo name="cross" size={24} color="grey" />

        </TouchableOpacity>




          <View style={styles.selectorItemContainer}>
            
            
            <FlatList
            
              data={firstFilterList}
              contentContainerStyle={{ paddingBottom: 400 }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => firstFilerOnSelection}
                  style={
                    firstFiltervalue === item ? styles.selecedItem : styles.selecorItem
                  }
                >
                  <Text
                    style={[
                      { fontSize: 17 },

                      firstFiltervalue != item
                        ? { color: "rgba(97, 96, 96, 0.79)" }
                        : { color: "white" },
                    ]}
                  >
                    {item}
                  </Text>
                  <AntDesign name="checkcircle" size={24} color="white" />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </RBSheet>



{/* ******
      *******Bottom sheet popup 2 for Month selection**********
      ******** */}






<RBSheet
        ref={refRBSheet2}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={650}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(5, 5, 5, 0.32)",
            borderTopEndRadius: 15,
          },
          draggableIcon: {
            backgroundColor: "black",
            width: 70,
          },
          container: {
            borderTopEndRadius: 15,
            borderTopStartRadius: 15,
           
           

          },
        }}
      >
        <View style={{flex:1}}>
          <View style={{ marginTop: 5, marginBottom: 15 }}>
            <Text style={{ alignSelf: "center", fontSize: 17, color: "grey" }}>
              Month
            </Text>
          </View>


          <TouchableOpacity
         onPress={() => {refRBSheet2.current.close()}}

          style={{
            backgroundColor: "#fff",
            borderRadius: 15,
            paddingHorizontal: 15,
            paddingVertical: 5,
           
            position:"absolute",
            top:-5,
            right:5
          }}
        >
                   <Entypo name="cross" size={24} color="grey" />

        </TouchableOpacity>




          <View style={styles.selectorItemContainer}>
            
           









            <FlatList
            
              data={monthNames}
              contentContainerStyle={{ paddingBottom: 400 }}
              renderItem={({ item }) => (
                <TouchableOpacity
                onPress={() => [refRBSheet2.current.close(),setselectedMonth(item),filterDataFunction("All",selectedYear,item)]}

                  style={
                    selectedMonth === item ? styles.selecedItem : styles.selecorItem
                  }
                >
                  <Text
                    style={[
                      { fontSize: 17 },

                      selectedMonth != item
                        ? { color: "rgba(97, 96, 96, 0.79)" }
                        : { color: "white" },
                    ]}
                  >
                    {item}
                  </Text>
                  <AntDesign name="checkcircle" size={24} color="white" />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </RBSheet>


    



{/* ******
      *******Bottom sheet popup 3 for Rating selection**********
      ******** */}






<RBSheet
        ref={refRBSheet3}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={650}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(5, 5, 5, 0.32)",
            borderTopEndRadius: 15,
          },
          draggableIcon: {
            backgroundColor: "black",
            width: 70,
          },
          container: {
            borderTopEndRadius: 15,
            borderTopStartRadius: 15,
           
           

          },
        }}
      >
        <View style={{flex:1}}>
          <View style={{ marginTop: 5, marginBottom: 15 }}>
            <Text style={{ alignSelf: "center", fontSize: 17, color: "grey" }}>
              Rating
            </Text>
          </View>


          <TouchableOpacity
         onPress={() => {refRBSheet3.current.close()}}

          style={{
            backgroundColor: "#fff",
            borderRadius: 15,
            paddingHorizontal: 15,
            paddingVertical: 5,
           
            position:"absolute",
            top:-5,
            right:5
          }}
        >
                   <Entypo name="cross" size={24} color="grey" />

        </TouchableOpacity>




          <View style={styles.selectorItemContainer}>
            
           


          <TouchableOpacity
                onPress={() => [refRBSheet3.current.close(),setSelectedRating("All"),filterDataFunction("All",selectedYear,selectedMonth)]}

                  style={
                    selectedRating === "All" ? styles.selecedItem : styles.selecorItem
                  }
                >
                  <Text
                    style={[
                      { fontSize: 17 },

                      selectedRating != "All"
                        ? { color: "rgba(97, 96, 96, 0.79)" }
                        : { color: "white" },
                    ]}
                  >
                    All
                  </Text>
                  <AntDesign name="checkcircle" size={24} color="white" />
                </TouchableOpacity>






            <FlatList
            
              data={["⭐⭐⭐⭐⭐","⭐⭐⭐⭐","⭐⭐⭐","⭐⭐","⭐"]}
              contentContainerStyle={{ paddingBottom: 400 }}
              renderItem={({ item }) => (
                <TouchableOpacity
                onPress={() => [refRBSheet3.current.close(),setSelectedRating(item),filterDataFunction(item,selectedYear,selectedMonth)]}

                  style={
                    selectedRating === item ? styles.selecedItem : styles.selecorItem
                  }
                >
                  <Text
                    style={[
                      { fontSize: 17 },

                      selectedRating != item
                        ? { color: "rgba(97, 96, 96, 0.79)" }
                        : { color: "white" },
                    ]}
                  >
                    {item}
                  </Text>
                  <AntDesign name="checkcircle" size={24} color="white" />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </RBSheet>








<Feather onPress={() => navigation.openDrawer()}  style={{flex:1,alignSelf:"center",paddingHorizontal:2}} name="menu" size={25} color="rgb(0, 172, 194)" />




<View style={{
          display: "flex",
          flexDirection: "row",
          marginHorizontal: 10,
          margin: 15,
          flex:20,
          // justifyContent:"space-between"
        }}>




 
{firstFilterVisiblity?
    <TouchableOpacity
    onPress={() => refRBSheet1.current.open()}

          
          style={[{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 3,
            borderColor: "rgb(0, 172, 194)",
            borderWidth: 0.3,
            borderRadius: 15,
            maxWidth: 800,
            justifyContent: "center",
            paddingHorizontal: 10,
            marginHorizontal: 10,
            
          },Platform.OS === "web" ? {paddingHorizontal:15 } : { paddingHorizontal: 10, }]}
        >
          <Text style={{ fontSize: 17,color:"rgb(0, 172, 194)" }}>
            {firstFiltervalue}
            </Text>
          <Entypo  name="chevron-down" size={17} color="rgb(0, 172, 194)" />
        </TouchableOpacity>
        :<Text></Text>
}


        
 
{secondFilterVisiblity?
    <TouchableOpacity
    onPress={() => refRBSheet2.current.open()}

          
          style={[{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 3,
            borderColor: "rgb(0, 172, 194)",
            borderWidth: 0.3,
            borderRadius: 15,
            maxWidth: 800,
            justifyContent: "center",
            paddingHorizontal: 10,
            marginHorizontal: 10,
            
          },Platform.OS === "web" ? {paddingHorizontal:15 } : { paddingHorizontal: 10, }]}
        >
          <Text style={{ fontSize: 17,color:"rgb(0, 172, 194)" }}>
            {secondFilterBtnText}
            </Text>
          <Entypo  name="chevron-down" size={17} color="rgb(0, 172, 194)" />
        </TouchableOpacity>
        :<Text></Text>
}

        
 
{thirdFilterVisiblity?
    <TouchableOpacity
    onPress={() => refRBSheet2.current.open()}

          
          style={[{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 3,
            borderColor: "rgb(0, 172, 194)",
            borderWidth: 0.3,
            borderRadius: 15,
            maxWidth: 800,
            justifyContent: "center",
            paddingHorizontal: 10,
            marginHorizontal: 10,
            
          },Platform.OS === "web" ? {paddingHorizontal:15 } : { paddingHorizontal: 10, }]}
        >
          <Text style={{ fontSize: 17,color:"rgb(0, 172, 194)" }}>
            {thirdFilterBtnText}
            </Text>
          <Entypo  name="chevron-down" size={17} color="rgb(0, 172, 194)" />
        </TouchableOpacity>
        :<Text></Text>
}


        




        

        

        





      </View>
</View>

)



}