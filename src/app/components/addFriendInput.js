import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaVie,
  FlatList,
  Modal,
  Alert,
  Pressable,
} from "react-native";

const AddFriendInput = () => {
  const [data, setData] = useState([{}]);
  const [name, setName] = useState("");
  return (
    <>
      <TextInput
        style={{ backgroundColor: "white", padding: 10, marginTop: 10 }}
        onChangeText={(name) => setName(name)}
        placeholder={"enter name"}
        value={name}
      />
      <Button
        title={"Add Friend"}
        onPress={() => {
          if (name) setData([...data, { name: name }]);
          console.log(`${name} has been added.`);
        }}
      />
      <FlatList keyExtractor={(item, index) => index} data={data} renderItem={({ item }) => <Text>{item.name}</Text>} />
    </>
  );
};

export default AddFriendInput;
