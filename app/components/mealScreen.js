import { StatusBar } from "expo-status-bar";
// Imports that allow you to use "react" and "react-natives" features.
import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { RealmProvider } from "../createRealmContext";

// Components that have been imported.
import Items from "./items";
import Users from "./users";

// The main component which acts as a container for all other components within the the codebase.
export default MealScreen = ({ selectedMeal, setSelectedMeal }) => {
  const [selectedFriend, setSelectedFriend] = useState();

  return (
    <View style={styles.container}>
      <Items
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
        selectedMeal={selectedMeal}
        setSelectedMeal={setSelectedMeal}
      />
      <Users
        setSelectedMeal={setSelectedMeal}
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
        selectedMeal={selectedMeal}
      />
      <StatusBar style="auto" />
    </View>
  );
};

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
