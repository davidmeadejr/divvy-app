import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, SafeAreaVie, FlatList, Modal, Alert } from "react-native";
import AddFriendModal from "./addFriendModal";

const Users = () => {
  const [data, setData] = useState([{}]);
  const [name, setName] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <AddFriendModal />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
    padding: 8,
    position: "absolute",
    bottom: 10,
  },
});

export default Users;
