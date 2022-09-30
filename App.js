import { StatusBar } from "expo-status-bar";
// Imports that allow you to use "react" and "react-natives" features.
import { StyleSheet, View } from "react-native";
import React from "react";

// Components that have been imported.
import Items from "./app/components/items";
import Users from "./app/components/users";

// The main component which acts as a container for all other components within the the codebase.
export default function App() {
  return (
    <View style={styles.container}>
      <Items />
      <Users />
      <StatusBar style="auto" />
    </View>
  );
}

// CSS styling for the App component.
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
