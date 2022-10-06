import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  Alert,
  TouchableOpacity,
} from "react-native";
import styles from "../common/styles";
import { Friend } from "../models/Friend";
import { useRealm } from "../createRealmContext";
import WhiteAddImage from "./whiteAddImage";

export default AddFriendModal = ({
  handleSelectedFriendStyle,
  selectedMeal,
  modalVisible,
  setModalVisible,
}) => {
  const realm = useRealm();
  const [name, setName] = useState("");

  const addFriendToRealm = (name) => {
    if (!selectedMeal.friends.some((friend) => friend.name === name)) {
      realm.write(() => {
        const friend = realm.create("Friend", new Friend({ name }));
        selectedMeal.friends.push(friend);
        handleSelectedFriendStyle(friend);
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
              <TouchableOpacity
                style={[styles.cancelButton, styles.cancelButtonClose]}
                // Toggles modal visibility on click
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>❌</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalAddButton, styles.modalAddButtonOpen]}
                onPress={handleAddButtonPress}
              >
                <WhiteAddImage />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
