import React, { useState } from "react";
import { useRealm } from "../createRealmContext";
import { Item } from "../models/Item";
import { View, Modal, Text, Pressable, TextInput } from "react-native";

export default AddItem = ({ itemModalVisible, setItemModalVisible }) => {
  const realm = useRealm();
  // const [modalVisible, setModalVisible] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemAmount, setItemAmount] = useState(0);

  const addItemToRealm = (name, amount) => {
    realm.write(() => {
      realm.create("Item", new Item({ name: name, amount: amount }));
    });
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      }}
    >
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
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
          }}
        >
          <View
            style={{
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
            }}
          >
            <Text>Hello world</Text>
            <TextInput
              style={{ backgroundColor: "white", padding: 10, marginTop: 10 }}
              placeholder="Enter dish name"
              onChangeText={(name) => setItemName(name)}
            />
            <TextInput
              style={{ backgroundColor: "white", padding: 10, marginTop: 10 }}
              placeholder="Enter dish amount"
              onChangeText={(amount) => setItemAmount(amount)}
            />
            <View>
              <Pressable
                onPress={() => {
                  setItemModalVisible(!itemModalVisible);
                  console.log("hello");
                }}
              >
                <Text>Send back</Text>
              </Pressable>
              <Pressable
                // style={[styles.modalAddButton, styles.modalAddButtonOpen]}
                onPress={() => {
                  if (itemName && itemAmount) {
                    addItemToRealm(itemName, itemAmount);
                    // console.log(itemName);
                  }
                  console.log(itemName);
                  setItemName("");
                  setItemModalVisible(!itemModalVisible);
                }}
              >
                <Text
                // style={styles.textStyle}
                >
                  ➕
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
