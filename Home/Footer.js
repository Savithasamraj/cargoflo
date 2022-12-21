import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";

const Footer = () => {
  const [dataSource, setDataSource] = useState([
    { id: 1, title: "Button" },
    { id: 2, title: "Card" },
    { id: 3, title: "Input" },
    { id: 4, title: "Avatar" },
    { id: 9, title: "Rating" },
    { id: 10, title: "Pricing" },
    { id: 11, title: "Avatar" },
    { id: 12, title: "CheckBox" },
    { id: 13, title: "Header" },
  ]);
  return (
    <View style={styles.footer}>
      <FlatList
        horizontal
        data={dataSource}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
        showsHorizontalScrollIndicator={true}
        
      ></FlatList>
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    height: 50,
    marginTop: 10,
  },
  item: {
    paddingRight: 10,
  },
});

export default Footer;
