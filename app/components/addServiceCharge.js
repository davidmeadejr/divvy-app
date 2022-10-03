import React, { useState } from "react";
import { useRealm } from "../createRealmContext";
import { Item } from "../models/Item";
import { View, Modal, Text, Pressable, TextInput, Alert } from "react-native";
import styles from "../common/styles";
export default AddServiceCharge = ({
  serviceChargeModalVisible,
  setServiceChargeModalVisible,
  selectedMeal,
}) => {
  const realm = useRealm();
  const [serviceCharge, setServiceCharge] = useState("");

  const handlePress = () => {
    const serviceChargeFloat = parseFloat(serviceCharge);
    if (isNaN(serviceChargeFloat)) {
      Alert.alert("Only characters allowed in service charge are 0123456789.");
    } else if (
      parseFloat(serviceChargeFloat.toFixed(2)) !== serviceChargeFloat
    ) {
      Alert.alert("Service charge can only be up to two decimal places");
    } else {
      realm.write(() => {
        selectedMeal.serivceChargeAmount = serviceChargeFloat;
      });
      setServiceChargeModalVisible(false);
    }
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={serviceChargeModalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add service charge %</Text>
            <TextInput
              style={{ backgroundColor: "white", padding: 10, marginTop: 10 }}
              placeholder="12.5"
              onChangeText={(amount) => setServiceCharge(amount)}
            />
            <View style={styles.modalButtonContainer}>
              <Pressable
                style={[styles.cancelButton, styles.cancelButtonClose]}
                onPress={() => {
                  setServiceChargeModalVisible(false);
                }}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.modalAddButton, styles.modalAddButtonOpen]}
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
