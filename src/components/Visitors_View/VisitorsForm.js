import { StyleSheet, Text, View,TextInput, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


const VisitorsForm=()=>{
    return(
        <View>
    <ScrollView style={styles.FormContainer}>
        
        <View style={styles.inputContainer}>

        <Text style={styles.label}>Visitor's Name</Text>
        <TextInput
        style={styles.input}
        placeholder={"Visitors Name"}
        />
        </View>

        <View style={styles.inputContainer}>

        <Text style={styles.label}>Visitor's Name</Text>
        <TextInput
        style={styles.input}
        placeholder={"Visitors Name"}
        />
        </View>

        <View style={styles.inputContainer}>

        <Text style={styles.label}>Visitor's Name</Text>
        <TextInput
        style={styles.input}
        placeholder={"Visitors Name"}
        />
        </View>

        <View style={styles.inputContainer}>

        <Text style={styles.label}>Visitor's Name</Text>
        <TextInput
        style={styles.input}
        placeholder={"Visitors Name"}
        />
        </View>

    </ScrollView>
    <View style={styles.buttonGroup}>
        <Button title="Cancel"/>
        <Button title="Save" color={"#5ba662"}/>
    </View>
     </View>
    )
}

const styles = StyleSheet.create({
    FormContainer:{
        paddingHorizontal:20,
        paddingTop:30
    },
input:{
    height:50,
    borderColor:"black",
    borderWidth: 1,
    paddingHorizontal:20,
    borderRadius:3,
    
},
label:{
    paddingBottom:5
},
inputContainer:{
    marginTop:15,
},
buttonGroup:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    position:"absolute",
    // bottom:0
}

})
export default VisitorsForm;