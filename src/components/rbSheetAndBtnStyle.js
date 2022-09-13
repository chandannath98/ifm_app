import { StyleSheet } from "react-native";

const rbSheetandBtnstyles = StyleSheet.create({
    selecorItem: {
        paddingVertical: 7,
        marginVertical: 3,
        borderColor: "grey",
        borderWidth: 0.3,
        paddingHorizontal: 10,
        borderRadius: 15,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
      },
      selecedItem: {
        paddingVertical: 7,
        marginVertical: 3,
        borderColor: "grey",
        borderWidth: 0.3,
        paddingHorizontal: 10,
        borderRadius: 15,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: "rgb(0, 172, 194)",
      },
      selectorItemContainerforProject: {
        paddingHorizontal: 20,
        
        
      },
      selectorItemContainer: {
        paddingHorizontal: 20,
        flex:1
        
      },
      rbSheetStyle:{
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
      },
      modelClose:{
        backgroundColor: "#fff",
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 5,
       
        position:"absolute",
        top:-5,
        right:5
      },
      filterbtn:{
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
        
      }
    
})

export {rbSheetandBtnstyles};