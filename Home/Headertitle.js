import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
const Headertitle = () => {
  return (
    <SafeAreaView>
      <View>
        
        <View style={styles.Headertitle}>
          <MaterialCommunityIcons style={styles.Headericon} name="airplane" color={"black"} size={40} />
          {/* <MaterialIcons
        name="airplane"
        size={30}
        style={{ padding: 10 }}
      ></MaterialIcons> */}

          <Text style={styles.Headertext}>PreFlight</Text>
        </View>
       
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  Headertitle: {
    flexDirection: "row",

    marginTop: 20,
  },
  Headertext: {
    fontSize: 20,
    marginTop: 10,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  Headericon:{
    marginRight:10
  }
});

export default Headertitle;
