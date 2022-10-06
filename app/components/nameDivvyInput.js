import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "../common/styles";
import { useRealm } from "../createRealmContext";

export default NameDivvyInput = ({ selectedMeal, setEditName }) => {
  const [divvyName, setDivvyName] = useState("");
  const realm = useRealm();

  const getPlaceholderText = () =>
    selectedMeal.name ? selectedMeal.name : "Name your meal";

  const handleTouchablePress = () => {
    if (divvyName) {
      realm.write(() => {
        selectedMeal.name = divvyName;
      });
    }
    setEditName(false);
  };
  return (
    <View style={styles.modalButtonContainer}>
      <TextInput
        style={styles.divvyInputField}
        placeholder={getPlaceholderText()}
        onChangeText={(name) => setDivvyName(name)}
      />
      <TouchableOpacity onPress={handleTouchablePress}>
        <Text style={{ fontSize: 50, marginTop: -9 }}>☑️</Text>
      </TouchableOpacity>
    </View>
  );
};
