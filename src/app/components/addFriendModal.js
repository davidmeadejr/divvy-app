import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Modal, Pressable, ScrollView, TouchableOpacity } from "react-native";

const AddFriendModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([{}]);
  const [name, setName] = useState("");
  const [myStyle, setMyStyle] = useState(false);

  const handleClick = (index) => {
    setMyStyle((prevState) => ({
      ...myStyle,
      [index]: !prevState[index],
    }));
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
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
              onChangeText={(name) => setName(name)}
              placeholder={"enter name"}
              value={name}
            />
            <View style={styles.modalButtonContainer}>
              <Pressable
                style={[styles.cancelButton, styles.cancelButtonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.modalAddButton, styles.modalAddButtonOpen]}
                onPress={() => {
                  if (name) setData([...data, { name: name }]);
                  console.log(`${name} has been added.`);
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
      <ScrollView contentContainerStyle={styles.openModalContainer} horizontal showsHorizontalScrollIndicator={false}>
        <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>➕</Text>
        </Pressable>
        {data.map((item, index) => (
          <TouchableOpacity
            onPress={() => handleClick(index)}
            style={{
              backgroundColor: myStyle[`${index}`] ? "#2196F3" : "white",
              marginRight: myStyle[`${index}`] ? 16 : 16,
              borderRadius: myStyle[`${index}`] ? 10 : 10,
              padding: myStyle[`${index}`] ? 10 : 5,
            }}
            key={index}
          >
            <View horizontal keyExtractor={(item, index) => index} data={data} key={index}>
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
        {/* <AddFriendFooter /> */}
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
    position: "fixed",
  },

  cancelButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    position: "fixed",
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
