import React from "react";
import { View } from "react-native";
import AddFriendModal from "./addFriendModal";
import styles from "../common/styles";

// The Users component which is parent component of the AddFriendModal component.
export default Users = ({
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
