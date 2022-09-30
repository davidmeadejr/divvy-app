import { StatusBar } from "expo-status-bar";
// Imports that allow you to use "react" and "react-natives" features.
import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { RealmProvider } from "./app/createRealmContext";

// Components that have been imported.
import Items from "./app/components/items";
import Users from "./app/components/users";

// The main component which acts as a container for all other components within the the codebase.
const App = () => {
  const [selectedFriends, setSelectedFriends] = useState([]);

  return (
    <View style={styles.container}>
      <Items selectedFriends={selectedFriends} setSelectedFriends={setSelectedFriends} />
      <Users selectedFriends={selectedFriends} setSelectedFriends={setSelectedFriends} />
      <StatusBar style="auto" />
    </View>
  );
};

export default function AppWrapper() {
  return (
    <RealmProvider>
      <App />
    </RealmProvider>
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
