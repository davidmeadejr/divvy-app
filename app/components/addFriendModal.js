import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Modal,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Friend } from "../models/Friend";
import { useQuery, useRealm, RealmProvider } from "../createRealmContext";

// The AddFriendModal component handles the functionality of the modal.
// So that users can type a name and add that friend to a page.
const AddFriendModal = ({ selectedFriends, setSelectedFriends }) => {
  const realm = useRealm();
  const friends = useQuery("Friend");
  // The useState for handling the modal.
  const [modalVisible, setModalVisible] = useState(false);
  // The useState for handling data as an object e.g. ID's, names etc...
  const [data, setData] = useState([]);
  // The useState handling the names added.
  const [name, setName] = useState("");
  // The useState for handling the toggle functionality that highlights names on click.
  const [myStyle, setMyStyle] = useState(false);
  // Creates a new entry in the friend collection.

  const addFriendToRealm = (name) => {
    if (!realm.objects("Friend").filtered("name == $0", name).length) {
      realm.write(() => {
        const friend = realm.create("Friend", new Friend({ name: name }));
      });
      console.log(`realm log = ${friends.map((friend) => friend.name)}`);
    } else {
      Alert.alert("This name already exists, please use a different name.");
    }
  };

  // This function when called passes in the index from the key.
  // Which refers to the items (names) that have changed.
  // Also, setMyStyle is called which toggles the previous state that the index was before once clicked.
  const handleClick = (item, index) => {
    setMyStyle((prevState) => ({
      ...myStyle,
      [index]: !prevState[index],
    }));

    const friendIdx = selectedFriends
      .map((friend) => friend._id.toString())
      .indexOf(item._id.toString());
    if (friendIdx === -1) {
      setSelectedFriends([...selectedFriends, item]);
    } else {
      selectedFriends.splice(friendIdx, 1);
      setSelectedFriends(selectedFriends);
    }
  };

  console.log(data);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // Closes the modal on click.
        onRequestClose={() => {
          console.log("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add Friend</Text>
            <TextInput
              style={{ backgroundColor: "white", padding: 10, marginTop: 10 }}
              // Handles the typing of characters by the user.
              onChangeText={(name) => setName(name)}
              placeholder={"enter name"}
              value={name}
            />
            <View style={styles.modalButtonContainer}>
              {/* Pressable is react natives equivalent to "button".  */}
              <Pressable
                style={[styles.cancelButton, styles.cancelButtonClose]}
                // Toggles modal visibility on click
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.modalAddButton, styles.modalAddButtonOpen]}
                // When a user types a name.
                // Then presses the add button.
                // This adds the name to the page as a list.
                // While also logging the typed name to the console.
                onPress={() => {
                  if (name) {
                    // setData([...data, { name: name }]);
                    addFriendToRealm(name);
                  }
                  // console.log(`${name} has been added.`);
                  setName("");
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>➕</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      {/* Enables horizontal scrolling the the names added at the bottom of the screen.*/}
      <ScrollView
        contentContainerStyle={styles.openModalContainer}
        horizontal
        showsHorizontalScrollIndicator={true}
      >
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>➕</Text>
        </Pressable>
        {/*
         *
         */}

        {friends.map((item, index) => (
          <TouchableOpacity
            // When a users presses a name.
            // The function handleClick(index) is called.
            // Which handles the toggle functionality of the background colours.
            onPress={() => handleClick(item, index)}
            style={{
              backgroundColor: myStyle[`${index}`] ? "#2196F3" : "white",
              marginRight: myStyle[`${index}`] ? 16 : 16,
              borderRadius: myStyle[`${index}`] ? 10 : 10,
              padding: myStyle[`${index}`] ? 10 : 5,
            }}
            key={item._id.toString()}
          >
            {/* The names added by the users are then placed at the bottom of the screen as a horizontal list. */}
            <View>
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    position: "relative",
  },

  cancelButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    position: "relative",
    marginRight: 16,
  },

  cancelButtonClose: {
    backgroundColor: "#2196F3",
  },
  modalAddButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },

  modalAddButtonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  openModalContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  modalButtonContainer: {
    display: "flex",
    flexDirection: "row",
  },
});

export default AddFriendModal;
