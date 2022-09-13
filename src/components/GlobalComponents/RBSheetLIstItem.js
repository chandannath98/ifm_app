
import { AntDesign } from "@expo/vector-icons";
import {
    
    Text,
    View,
    
  } from "react-native";
import { rbSheetandBtnstyles } from "../rbSheetAndBtnStyle";


const RBSheetListItem=(params)=>{
return(

<View style={
                    params.value === params.item ? rbSheetandBtnstyles.selecedItem : rbSheetandBtnstyles.selecorItem
                  }>


                  
                  <Text
                    style={[
                      { fontSize: 17 },

                      params.value != params.item
                        ? { color: "rgba(97, 96, 96, 0.79)" }
                        : { color: "white" },
                    ]}
                  >
                    {params.item}
                  </Text>
                  <AntDesign name="checkcircle" size={24} color="white" />
                  </View>
)

}

export default RBSheetListItem;

