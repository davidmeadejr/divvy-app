import React, { useState } from "react";
import { View, Modal, Text, Pressable } from "react-native";

export default AddItem = ({ itemModalVisible, setItemModalVisible }) => {
  // const [modalVisible, setModalVisible] = useState(false);
  const [itemName, setItemName] = useState();

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
        // {modalVisible}
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
            <Pressable
              onPress={() => {
                setItemModalVisible(!itemModalVisible);
                console.log("hello");
              }}
            >
              <Text>Send back</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
