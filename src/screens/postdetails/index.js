
import {StyleSheet, Text, View } from "react-native";
const PostDeatils=()=> {
  return (
    <View style={[styles.safeAreaViewStyle]}>

      <Text>Hello from details page</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaViewStyle: {    
    flex: 1,
  },

 
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    // backgroundColor:"white",
    // marginHorizontal:10
  },

  headerItem: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 7,
    paddingHorizontal: 8,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "space-around",
  },
});




export default PostDeatils;