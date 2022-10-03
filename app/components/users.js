import React from "react";
import { View, StyleSheet } from "react-native";
import AddFriendModal from "./addFriendModal";

// The Users component which is parent component of the AddFriendModal component.
const Users = ({
  selectedFriend,
  setSelectedFriend,
  selectedMeal,
  setSelectedMeal,
}) => {
  return (
    <View style={styles.container}>
      <AddFriendModal
        setSelectedMeal={setSelectedMeal}
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
        selectedMeal={selectedMeal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 8,
    position: "absolute",
    bottom: 10,
  },
});

export default Users;
