import React, { useState } from "react";
import { View, TextInput } from "react-native";
import styles from "../common/styles";

const NameDivvyInput = () => {
  // const [text, onChangeText] = React.useState("Name your Divvy 🍲");
  // const [number, onChangeNumber] = React.useState(null);

  const [divvyName, setDivvyName] = useState("");

  const changeText = () => {};

  return (
    <View>
      {/* <TextInput style={styles.divvyInputField} onChangeText={onChangeText} value={text} /> */}
      <TextInput
        // style={{ backgroundColor: "white", padding: 10, marginTop: 10 }}
        style={styles.divvyInputField}
        placeholder="Name your Divvy 🍲"
        onChangeText={(name) => setDivvyName(name)}
      />
    </View>
  );
};

export default NameDivvyInput;
