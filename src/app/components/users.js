import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, SafeAreaVie, FlatList } from "react-native";
import { v4 as uuidv4 } from "uuid";

const Users = () => {
  const [data, setData] = useState([{}]);
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={{ backgroundColor: "white", padding: 10, marginTop: 10 }}
        onChangeText={(name) => setName(name)}
        placeholder={"enter name"}
        value={name}
      />
      <Button
        title={"Add Friend "}
        onPress={() => {
          if (name) setData([...data, { name: name }]);
          console.log("hi");
        }}
      />
      <FlatList keyExtractor={(item) => item} data={data} renderItem={({ item }) => <Text>{item.name}</Text>} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});

export default Users;
