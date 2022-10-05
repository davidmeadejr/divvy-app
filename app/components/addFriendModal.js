import React, { useState } from "react";
import { View, Text, TextInput, Modal, Pressable, Alert } from "react-native";
import styles from "../common/styles";
import { Friend } from "../models/Friend";
import { useRealm } from "../createRealmContext";
import WhiteAddImage from "./whiteAddImage";

// The AddFriendModal component handles the functionality of the modal.
// So that users can type a name and add that friend to a page.
export default AddFriendModal = ({
  selectedMeal,
  modalVisible,
  setModalVisible,
}) => {
  const realm = useRealm();
  // The useState for handling the modal.
  // The useState handling the names added.
  const [name, setName] = useState("");

  const addFriendToRealm = (name) => {
    if (!selectedMeal.friends.some((friend) => friend.name === name)) {
      realm.write(() => {
        const friend = realm.create("Friend", new Friend({ name }));
        selectedMeal.friends.push(friend);
      });
    } else {
      Alert.alert("This name already exists, please use a different name.");
    }
  };

  const handleAddButtonPress = () => {
    if (name) {
      addFriendToRealm(name);
    }
    setName("");
    setModalVisible(false);
  };

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add Friend</Text>
            <TextInput
              style={styles.addFriendInput}
              // Handles the typing of characters by the user.
              onChangeText={setName}
              placeholder={"enter name"}
              value={name}
            />
            <View style={styles.modalButtonContainer}>
              <Pressable
                style={[styles.cancelButton, styles.cancelButtonClose]}
                // Toggles modal visibility on click
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>❌</Text>
              </Pressable>
              <Pressable
                style={[styles.modalAddButton, styles.modalAddButtonOpen]}
                // When a user types a name.
                // Then presses the add button.
                // This adds the name to the page as a list.
                // While also logging the typed name to the console.
                onPress={handleAddButtonPress}
              >
                <WhiteAddImage />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      {/* Enables horizontal scrolling the the names added at the bottom of the screen.*/}
    </View>
  );
};
