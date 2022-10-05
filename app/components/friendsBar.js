import React, { useState } from "react";
import { View } from "react-native";
import AddFriendModal from "./addFriendModal";
import styles from "../common/styles";
import AddFriendScrollView from "./addFriendScrollView";
// The Users component which is parent component of the AddFriendModal component.
export default FriendsBar = ({
  selectedFriend,
  setSelectedFriend,
  selectedMeal,
  setSelectedMeal,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [myStyle, setMyStyle] = useState({});

  return (
    <View style={styles.usersContainer}>
      <AddFriendModal
        myStyle={myStyle}
        setMyStyle={setMyStyle}
        setSelectedFriend={setSelectedFriend}
        selectedMeal={selectedMeal}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <AddFriendScrollView
        myStyle={myStyle}
        setMyStyle={setMyStyle}
        setModalVisible={setModalVisible}
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
        selectedMeal={selectedMeal}
        setSelectedMeal={setSelectedMeal}
      />
    </View>
  );
};
