import React, { useState } from "react";
import { View, Text, TextInput, Modal, Pressable, ScrollView, TouchableOpacity, Alert } from "react-native";
import styles from "../common/styles";
import { Friend } from "../models/Friend";
import { useRealm } from "../createRealmContext";
import WhiteAddImage from "./whiteAddImage";

const friendColours = [
  "#e6194B",
  "#3cb44b",
  "#ffe119",
  "#4363d8",
  "#f58231",
  "#42d4f4",
  "#f032e6",
  "#fabed4",
  "#469990",
  "#dcbeff",
  "#9A6324",
  "#fffac8",
  "#800000",
  "#aaffc3",
  "#000075",
  "#a9a9a9",
];

// The AddFriendModal component handles the functionality of the modal.
// So that users can type a name and add that friend to a page.
export default AddFriendModal = ({ selectedFriend, setSelectedFriend, selectedMeal, setSelectedMeal }) => {
  const realm = useRealm();
  // The useState for handling the modal.
  const [modalVisible, setModalVisible] = useState(false);
  // The useState handling the names added.
  const [name, setName] = useState("");
  // The useState for handling the toggle functionality that highlights names on click.
  const [myStyle, setMyStyle] = useState({});
  // Creates a new entry in the friend collection.

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

  // This function when called passes in the index from the key.
  // Which refers to the items (names) that have changed.
  // Also, setMyStyle is called which toggles the previous state that the index was before once clicked.
  const handleClick = (item, index) => {
    const itemId = item._id.toString();
    // myStyle[itemId] = true;
    [...Object.keys(myStyle), itemId].forEach((key) => (myStyle[key] = key === itemId));
    setMyStyle(myStyle);
    setSelectedFriend(item);
  };

  const handleLongPress = (item) => {
    if (selectedFriend && selectedFriend._id.toString() === item._id.toString()) setSelectedFriend();
    realm.write(() => {
      realm.delete(item);
    });
    setSelectedMeal(realm.objectForPrimaryKey("Meal", selectedMeal._id));
  };

  return (
    <>
      <View style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Add Friend</Text>
              <TextInput
                style={styles.addFriendInput}
                // Handles the typing of characters by the user.
                onChangeText={(name) => setName(name)}
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
                  onPress={() => {
                    if (name) {
                      addFriendToRealm(name);
                    }
                    setName("");
                    setModalVisible(false);
                  }}
                >
                  <WhiteAddImage />
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        {/* Enables horizontal scrolling the the names added at the bottom of the screen.*/}
      </View>
      <ScrollView contentContainerStyle={styles.openModalContainer} horizontal showsHorizontalScrollIndicator={true}>
        <Pressable
          style={[styles.button, styles.buttonOpen, styles.addFriendContainer, { marginRight: 10 }]}
          onPress={() => setModalVisible(true)}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
            i
          >
            <WhiteAddImage />
            <Text
              style={{
                textAlign: "center",
                marginLeft: 10,
                fontSize: 32,
              }}
            >
              👪
            </Text>
          </View>
          <Text style={styles.addFriendText}>Add Friend</Text>
        </Pressable>
        {selectedMeal.friends.map((item, index) => (
          <TouchableOpacity
            // When a users presses a name.
            // The function handleClick(index) is called.
            // Which handles the toggle functionality of the background colours.
            onPress={() => handleClick(item, index)}
            onLongPress={() => handleLongPress(item)}
            style={{
              borderWidth: myStyle[item._id.toString()] ? 5 : 2,
              borderColor: friendColours[index],
              marginRight: myStyle[item._id.toString()] ? 13 : 16,
              borderRadius: 10,
              padding: myStyle[item._id.toString()] ? 7 : 10,
            }}
            key={item._id.toString()}
          >
            {/* The names added by the users are then placed at the bottom of the screen as a horizontal list. */}
            <View>
              <Text
                style={{
                  fontWeight: myStyle[item._id.toString()] ? "bold" : "normal",
                  color: "#fff",
                }}
              >
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};
