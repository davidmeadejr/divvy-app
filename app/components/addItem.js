import React, { useState } from "react";
import { useRealm } from "../createRealmContext";
import { Item } from "../models/Item";
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import styles from "../common/styles";

const AddItem = ({ itemModalVisible, setItemModalVisible, selectedMeal }) => {
  const [itemName, setItemName] = useState("");
  const [itemAmount, setItemAmount] = useState("");

  const realm = useRealm();

  const addItemToRealm = (name, amount) => {
    realm.write(() => {
      const item = realm.create(
        "Item",
        new Item({ name: name, amount: amount })
      );
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
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add an item 😋</Text>
            <TextInput
              style={styles.enterDishInput}
              placeholder="Enter dish name"
              onChangeText={(name) => setItemName(name)}
            />
            <View style={{ padding: 10 }}></View>

            <Text style={styles.modalText}>Add item amount 😋</Text>
            <TextInput
              style={styles.enterDishInput}
              placeholder="Enter amount, eg. 8.99"
              onChangeText={(amount) => setItemAmount(amount)}
            />
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                onPress={() => {
                  setItemModalVisible(false);
                }}
              >
                <Text style={styles.cancelButtonText}>❌</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleItemModalAddDishOnPress}>
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 80 }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddItem;
