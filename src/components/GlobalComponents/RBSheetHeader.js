
import {
    
    Text,
    View,
    
  } from "react-native";


const RBSheetHeader=(params)=>{
return(
<View style={{ marginTop: 5, marginBottom: 15 }}>
            <Text style={{ alignSelf: "center", fontSize: 17, color: "grey" }}>
              {params.name}
            </Text>
          </View>
)

}

export default RBSheetHeader;

