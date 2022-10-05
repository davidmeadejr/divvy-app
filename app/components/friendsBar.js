import React, { useState } from "react";
import { View } from "react-native";
import AddFriendModal from "./addFriendModal";
import styles from "../common/styles";
import AddFriendScrollView from "./addFriendScrollView";
import AddFriendButton from "./addFriendButton";
// The Users component which is parent component of the AddFriendModal component.
export default FriendsBar = ({
  selectedFriend,
  setSelectedFriend,
  selectedMeal,
  setSelectedMeal,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [myStyle, setMyStyle] = useState({});
  const handleSelectedFriendStyle = (item) => {
    const itemId = item._id.toString();
    [...Object.keys(myStyle), itemId].forEach(
      (key) => (myStyle[key] = key === itemId)
    );
    setMyStyle(myStyle);
    setSelectedFriend(item);
  };

  return (
    <View>
      <View style={{ ...styles.openModalContainer, ...styles.usersContainer }}>
        <AddFriendButton setModalVisible={setModalVisible} />
        <AddFriendScrollView
          handleSelectedFriendStyle={handleSelectedFriendStyle}
          myStyle={myStyle}
          setMyStyle={setMyStyle}
          setModalVisible={setModalVisible}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
          selectedMeal={selectedMeal}
          setSelectedMeal={setSelectedMeal}
        />
      </View>
      <AddFriendModal
        handleSelectedFriendStyle={handleSelectedFriendStyle}
        selectedMeal={selectedMeal}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};
