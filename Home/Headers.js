import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Popup from "./Popup";
import { createDrawerNavigator } from "@react-navigation/native-stack";
import { Navigate } from "react-router-native";

const Headers = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View>
          <MaterialIcons
            name="menu"
            size={10}
            style={{ padding: 10 }}
          ></MaterialIcons>
        </View>
        <View>
          <Text style={styles.logo}>CARGOFLO</Text>
        </View>
        <View style={styles.logos} >
          <Popup></Popup>
        </View>
        {/* <TouchableOpacity>
          <MaterialIcons
            name="person"
            size={30}
            style={{ padding: 10 }}
          ></MaterialIcons>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor:"skyblue"
  },

  logo: {
    fontSize: 30,
    color: "coral",
    margin: 2,
    paddingLeft: 10,
  },
 
});

export default Headers;
