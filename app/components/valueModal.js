import React, { useState } from "react";
import { useRealm } from "../createRealmContext";
import {
  View,
  Modal,
  Text,
  TextInput,
  Alert,
  FlatList,
  TouchableOpacity,
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
      <TouchableOpacity
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
      </TouchableOpacity>
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
      }}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={valueModalVisible}
      >
        <View style={styles.totalsModalCenteredView}>
          <View style={styles.totalsModalView}>
            <Text style={styles.modalText}>Add {getModalType()} value</Text>
            <TextInput
              style={styles.totalsModalInput}
              placeholder="10"
              onChangeText={setValue}
            />
            {/* <FlatList
              horizontal
              data={valueTypes}
              renderItem={({ item }) => flatListValueTypeButtons(item)}
              keyExtractor={(item) => valueTypes.indexOf(item)}
            /> */}
            <View style={{ flexDirection: "row" }}>
              {flatListValueTypeButtons("percent")}
              {flatListValueTypeButtons("amount")}
            </View>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                onPress={() => {
                  setValueModalVisible(false);
                }}
              >
                <Text style={styles.cancelButtonText}>❌</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handlePress()}>
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 80 }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
