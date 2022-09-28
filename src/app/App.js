import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import Items from "../app/components/items";
import Users from "../app/components/users";
import Header from "../app/components/header";

export default function App() {
  return (
    <View style={styles.container}>
      <Items />
      {/* <Header />
      <Users /> */}
      <StatusBar style="auto" />
      <Users />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
    marginRight: 16,
    marginBottom: 16,
    marginLeft: 16,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
