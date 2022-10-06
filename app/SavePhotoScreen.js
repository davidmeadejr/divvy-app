import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import styles from "./common/styles";
import React from "react";
import axios from "axios";
import { useRealm } from "./createRealmContext";
import { Meal } from "./models/Meal";
import getInterpretedReceiptData from "./getInterpretedReceiptData";
import { Item } from "./models/Item";

export default SavePhotoScreen = ({ navigation, route }) => {
  const { imageTaggunObj, imageSrc } = route.params;
  const realm = useRealm();

  useFocusEffect(
    React.useCallback(() => {
      sendImageToTaggun();
    })
  );

  const sendImageToTaggun = async () => {
    try {
      const response = await axios.post(
        "https://api.taggun.io/api/receipt/v1/verbose/encoded",
        imageTaggunObj,
        {
          headers: {
            "Content-Type": "application/json",
            apikey: "3c61e4503e6911edb69573233a13efd6",
            accept: "application/json",
          },
        }
      );
      if (!response.data.amounts.length) throw new Error("No receipt data");
      const selectedMeal = createNewMealEntryFromData(response.data);
      navigation.navigate("Meal Screen", { selectedMeal });
    } catch (e) {
      if (e.toString().includes("No receipt data"))
        Alert.alert(
          "Please check this is an image of a receipt, or use better lighting"
        );
      else {
        Alert.alert(
          "There has been an issue uploading the receipt, please try again or create a blank meal"
        );
      }
      navigation.navigate("New Meal Screen");
    }
  };

  const createNewMealEntryFromData = (data) => {
    let newMeal;
    realm.write(() => {
      newMeal = realm.create("Meal", new Meal({}));
      getInterpretedReceiptData(data).forEach((receiptItem) => {
        const itemEntry = realm.create("Item", new Item(receiptItem));
        newMeal.items.push(itemEntry);
      });
    });
    realm.close();

    return newMeal;
  };

  return (
    <View style={styles.container}>
      <View style={styles.savePhotoContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("New Meal Screen")}
        >
          <Text style={styles.cancelButton}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.photoScreenshotContainer}>
        <Image style={{ width: 200, height: 300, marginBottom: 0 }} source={imageSrc}></Image>
        <Text style={styles.loadingImageButton}>Loading Data From Image...</Text>
      </View>
    </View>
  );
};
