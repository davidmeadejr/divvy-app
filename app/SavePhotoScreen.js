import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import styles from "./common/styles";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useRealm } from "./createRealmContext";
import { Meal } from "./models/Meal";
import getInterpretedReceiptData from "./getInterpretedReceiptData";
import { Item } from "./models/Item";

export default SavePhotoScreen = ({ navigation, route }) => {
  const [loadingState, setLoadingState] = useState();
  const [uploadStatus, setUploadStatus] = useState();
  const { imageTaggunObj, imageSrc } = route.params;
  const realm = useRealm();

  useFocusEffect(
    React.useCallback(() => {
      sendImageToTaggun();
    })
  );

  const createNewMealEntryFromData = (data) => {
    let newMeal;
    realm.write(() => {
      newMeal = realm.create("Meal", new Meal({}));
      getInterpretedReceiptData(data).forEach((receiptItem) => {
        const itemEntry = realm.create("Item", new Item(receiptItem));
        newMeal.items.push(itemEntry);
      });
    });
    return newMeal;
  };

  const sendImageToTaggun = async () => {
    let url = "https://api.taggun.io/api/receipt/v1/verbose/encoded";
    try {
      const response = await axios.post(url, imageTaggunObj, {
        headers: {
          "Content-Type": "application/json",
          apikey: "3c61e4503e6911edb69573233a13efd6", // this needs to be an ENV
          accept: "application/json",
        },
      });
      console.log(response);
      const selectedMeal = createNewMealEntryFromData(response.data);
      navigation.navigate("Meal Screen", { selectedMeal });
    } catch (e) {
      console.error(e);
      Alert.alert(
        "There has been an issue uploading the receipt, please try again or create a blank meal"
      );
      navigation.navigate("New Meal Screen");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.savePhotoContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("New Meal Screen")}
        >
          <Text style={styles.retakePhotoButton}>⬅ Retake</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Camera Screen")}>
          <Text style={styles.usePhotoButton}>Use</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.photoScreenshotContainer}>
        <Image style={{ width: 150, height: 200 }} source={imageSrc}></Image>
        <Text>Loading Data From Image...</Text>
      </View>
    </View>
  );
};
