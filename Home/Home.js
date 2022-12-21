import { View, Text, FlatList, StyleSheet, StatusBar } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Headers from "./Headers";
import Footer from "./Footer";

const Home = () => {
  const [dataSource, setDataSource] = useState([
    { id: 1, title: "Button" },
    { id: 2, title: "Card" },
    { id: 3, title: "Input" },
    { id: 4, title: "Avatar" },
    { id: 5, title: "CheckBox" },
    { id: 6, title: "Header" },
    { id: 7, title: "Icon" },
    { id: 8, title: "Lists" },
    { id: 9, title: "Rating" },
    { id: 10, title: "Pricing" },
    { id: 11, title: "Avatar" },
    { id: 12, title: "CheckBox" },
    { id: 13, title: "Header" },
    { id: 14, title: "Icon" },
    { id: 15, title: "Lists" },
    { id: 16, title: "Rating" },
    { id: 17, title: "Pricing" },
  ]);

  return (
    <SafeAreaView style={styles.header}>
      {/* <View style={styles.headerbox}>
        <Headers></Headers>
      </View> */}

      <View style={styles.body}>
        <FlatList
          style={styles.list}
          data={dataSource}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.title}</Text>
          )}
        ></FlatList>
      </View>
      {/* <View style={styles.footer}>
        
        <Footer></Footer>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "yellow",
    padding: 20,
    margin: 10,
  },
  header: {
    backgroundColor: "white",
    flex: 1,
  },
  headerbox: {
    backgroundColor: "skyblue",
    height: 50,
  },
  body: {
    flex: 2,
    backgroundColor: "white",
  },
  footer: {
    backgroundColor: "grey",
  },
});

export default Home;
