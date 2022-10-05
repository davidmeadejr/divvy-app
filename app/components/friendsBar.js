import React, { useState } from "react";
import { View } from "react-native";
import AddFriendModal from "./addFriendModal";
import styles from "../common/styles";

// The Users component which is parent component of the AddFriendModal component.
export default FriendsBar = ({
  selectedFriend,
  setSelectedFriend,
  selectedMeal,
  setSelectedMeal,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.usersContainer}>
      <AddFriendModal
        selectedMeal={selectedMeal}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <AddFriendScrollView
        setModalVisible={setModalVisible}
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
        selectedMeal={selectedMeal}
        setSelectedMeal={setSelectedMeal}
      />
    </View>
  );
};
