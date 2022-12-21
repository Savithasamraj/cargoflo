import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const Popup = () => {
  return (
    <MenuProvider style={{flex: 1}}>
      <Menu  >
        <MenuTrigger optionsContainerStyle={{marginLeft: -10,width:200}}  >
          <MaterialIcons
            name="person"
            size={30}
            style={{ padding: 10 }}
          ></MaterialIcons>
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={{marginLeft: -10,width:200}}>
          <MenuOption
            customStyles={{
              optionWrapper: {
                flexDirection: "row",

                justifyContent: "space-evenly",
                width: 100,
              },
            }}
          >
            <Text>logout</Text>
            <MaterialIcons
              name="logout"
              size={20}
              style={{ paddingLeft: 10 }}
            ></MaterialIcons>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </MenuProvider>
  );
};

export default Popup;

const styles = StyleSheet.create({
    slideInOption: {
        padding: 50,
      },
});
