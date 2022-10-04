import React, { useState } from "react";
import { useRealm } from "../createRealmContext";
import { Item } from "../models/Item";
import { View, Modal, Text, Pressable, TextInput, Alert } from "react-native";
import styles from "../common/styles";

const AddItem = ({ itemModalVisible, setItemModalVisible, selectedMeal }) => {
  const [itemName, setItemName] = useState("");
  const [itemAmount, setItemAmount] = useState("");

  const realm = useRealm();

  const addItemToRealm = (name, amount) => {
    realm.write(() => {
      const item = realm.create("Item", new Item({ name: name, amount: amount }));
      selectedMeal.items.push(item);
    });
  };

  const handleItemModalAddDishOnPress = () => {
    const itemAmountFloat = parseFloat(itemAmount);
    if (itemName && itemAmount) {
      if (isNaN(itemAmountFloat)) {
        Alert.alert("Only characters allowed in item amount are 0123456789.");
      } else if (parseFloat(itemAmountFloat.toFixed(2)) !== itemAmountFloat) {
        Alert.alert("Item amount can only be up to two decimal places");
      } else {
        addItemToRealm(itemName, itemAmountFloat);
        setItemName("");
        setItemAmount("");
        setItemModalVisible(!itemModalVisible);
      }
    } else {
      Alert.alert("Enter a name and amount");
    }
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={itemModalVisible}
        // Closes the modal on click.
        // onRequestClose={() => {
        //   console.log("Modal has been closed.");
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add an item</Text>
            <TextInput
              style={{ backgroundColor: "white", padding: 10, marginTop: 10 }}
              placeholder="Enter dish name"
              onChangeText={(name) => setItemName(name)}
            />
            <TextInput
              style={{ backgroundColor: "white", padding: 10, marginTop: 10 }}
              placeholder="Enter dish amount - eg. 15.99"
              onChangeText={(amount) => setItemAmount(amount)}
            />
            <View style={styles.modalButtonContainer}>
              <Pressable
                style={[styles.cancelButton, styles.cancelButtonClose]}
                onPress={() => {
                  setItemModalVisible(!itemModalVisible);
                }}
              >
                <Text style={styles.textStyle}>Send back</Text>
              </Pressable>
              <Pressable
                style={[styles.modalAddButton, styles.modalAddButtonOpen]}
                onPress={() => handleItemModalAddDishOnPress()}
              >
                <Text style={styles.textStyle}>➕</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddItem;
