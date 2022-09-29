import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Items from "../app/components/items";
import Users from "../app/components/users";

export default function App() {
  return (
    <View style={styles.container}>
      <Items />
      <Users />
      <StatusBar style="auto" />
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
  },
});
