import React, { useState } from "react";
import { useRealm } from "../createRealmContext";
import {
  View,
  Modal,
  Text,
  Pressable,
  TextInput,
  Alert,
  FlatList,
} from "react-native";
import styles from "../common/styles";

export default ValueModal = ({
  valueModalVisible,
  setValueModalVisible,
  selectedMeal,
  setSelectedMeal,
  modalType,
}) => {
  const realm = useRealm();
  const [value, setValue] = useState("");
  const valueTypes = ["percent", "amount"];
  const [typeSelected, setTypeSelected] = useState(
    selectedMeal[`${modalType}Type`]
  );

  const handlePress = () => {
    const valueFloat = parseFloat(value);
    if (isNaN(valueFloat)) {
      Alert.alert("Only characters allowed in value are 0123456789.");
    } else if (parseFloat(valueFloat.toFixed(2)) !== valueFloat) {
      Alert.alert("Value can only be up to two decimal places");
    } else {
      console.log("serviceCharge");
      console.log(modalType);
      console.log(selectedMeal[`${modalType}Amount`]);
      realm.write(() => {
        selectedMeal[`${modalType}Amount`] = valueFloat;
        setSelectedMeal(selectedMeal);
      });
      setValueModalVisible(false);
    }
  };

  const getPressableStyle = (isTypeSelected) =>
    isTypeSelected
      ? styles.valueModalButtonSelected
      : styles.valueModalButtonDeselected;

  const getPressableTextStyle = (isTypeSelected) =>
    isTypeSelected
      ? styles.valueModalButtonTextSelected
      : styles.valueModalButtonTextDeselected;

  const flatListValueTypeButtons = (item) => {
    const isTypeSelected = typeSelected === item;
    const itemNameTitled = item.charAt(0).toUpperCase() + item.slice(1);
    return (
      <Pressable
        style={getPressableStyle(isTypeSelected)}
        onPress={() => {
          realm.write(() => {
            selectedMeal[`${modalType}Type`] = item;
            setSelectedMeal(selectedMeal);
            setTypeSelected(item);
          });
        }}
      >
        <Text style={getPressableTextStyle(isTypeSelected)}>
          {itemNameTitled}
        </Text>
      </Pressable>
    );
  };

  const getModalType = () =>
    modalType === "serviceCharge" ? "service charge" : modalType;
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
        visible={valueModalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add {getModalType()} value</Text>
            <TextInput
              style={{ backgroundColor: "white", padding: 10, marginTop: 10 }}
              placeholder="10"
              onChangeText={setValue}
            />
            <FlatList
              style={styles.modalButtonContainer}
              data={valueTypes}
              renderItem={({ item }) => flatListValueTypeButtons(item)}
              keyExtractor={(item) => valueTypes.indexOf(item)}
            />
            <View style={styles.modalButtonContainer}>
              <Pressable
                style={[styles.cancelButton, styles.cancelButtonClose]}
                onPress={() => {
                  setValueModalVisible(false);
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
