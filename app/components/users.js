import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AddFriendModal from "./addFriendModal";
// import styles from "../common/styles";

// The Users component which is parent component of the AddFriendModal component.
export default Users = ({ selectedFriend, setSelectedFriend, selectedMeal, setSelectedMeal }) => {
  return (
    <View style={styles.container}>
      {/* <Text>hello world</Text> */}
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

// export default Users;
