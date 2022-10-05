import React, { useState } from "react";
import { useRealm } from "../createRealmContext";
import { Item } from "../models/Item";
import { View, Modal, Text, Pressable, TextInput, Alert } from "react-native";
import styles from "../common/styles";
export default AddServiceCharge = ({
  tipModalVisible,
  setTipModalVisible,
  selectedMeal,
  setSelectedMeal,
}) => {
  const realm = useRealm();
  const [tip, setTip] = useState("");

  const handlePress = () => {
    const tipFloat = parseFloat(tip);
    if (isNaN(tipFloat)) {
      Alert.alert("Only characters allowed in service charge are 0123456789.");
    } else if (parseFloat(tipFloat.toFixed(2)) !== tipFloat) {
      Alert.alert("Tip percentage can only be up to two decimal places");
    } else {
      realm.write(() => {
        selectedMeal.tipAmount = tipFloat;
        setSelectedMeal(selectedMeal);
      });
      setTipModalVisible(false);
    }
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
      <Modal animationType="slide" transparent={true} visible={tipModalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add tip %</Text>
            <TextInput
              style={{ backgroundColor: "white", padding: 10, marginTop: 10 }}
              placeholder="10"
              onChangeText={setTip}
            />
            <View style={styles.modalButtonContainer}>
              <Pressable
                style={[styles.cancelButton, styles.cancelButtonClose]}
                onPress={() => {
                  setTipModalVisible(!tipModalVisible);
                }}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.modalAddButton, styles.modalAddButtonOpen]}
                // style={[styles.modalAddButton, styles.modalAddButtonOpen]}
                onPress={() => handlePress()}
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
// modalAddButton: {
// borderRadius: 20,
// padding: 10,
// elevation: 2,
// },
// buttonOpen: {
//   backgroundColor: "#F194FF",
// },

// modalAddButtonOpen: {
//   backgroundColor: "#F194FF",
// },
// buttonClose: {
//   backgroundColor: "#2196F3",
// },
