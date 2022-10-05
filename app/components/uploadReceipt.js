import { StatusBar } from "expo-status-bar";
// Imports that allow you to use "react" and "react-natives" features.
import { Text, View, Button, Image } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../common/styles";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from "axios";
import { useRealm } from "../createRealmContext";
import { Item } from "../models/Item";
import { Meal } from "../models/Meal";
import getInterpretedReceiptData from "../getInterpretedReceiptData";
// The main component which acts as a container for all other components within the the codebase.
export default UploadReceipt = ({ setCreateNewMeal, setSelectedMeal }) => {
  const [imageSource, setImageSource] = useState();
  const [imageObj, setImageObj] = useState();
  const [taggunResponse, setTaggunResponse] = useState();
  const realm = useRealm();

  const handleTakePhotoButtonPress = () => {
    launchImageLibrary(
      {
        cameraType: "back",
        mediaType: "photo",
        saveToPhotos: true,
        includeBase64: true,
      },
      (e) => {
        if (e.didCancel) {
          console.log("cancelled");
        } else if (e.errorMessage) {
          console.log("error: " + e.errorMessage);
        } else if (e.errorCode) {
          console.log(e.errorCode);
        } else {
          const source = {
            uri: "data:image/jpeg;base64," + e.assets[0].base64,
          };
          setImageObj(
            JSON.stringify({
              image: e.assets[0].base64,
              filename: e.assets[0].fileName,
              contentType: e.assets[0].type,
            })
          );
          setImageSource(source);
        }
      }
    );
  };

  const sendImageToTaggun = async () => {
    const url = "https://api.taggun.io/api/receipt/v1/verbose/encoded";
    try {
      const response = await axios.post(url, imageObj, {
        headers: {
          "Content-Type": "application/json",
          apikey: "3c61e4503e6911edb69573233a13efd6", // this needs to be an ENV
          accept: "application/json",
        },
      });
      setTaggunResponse(response);
    } catch (e) {
      console.error(e);
    }
  };

  const createMealFromTaggunResponse = () => {
    realm.write(() => {
      const newMeal = realm.create("Meal", new Meal({}));
      getInterpretedReceiptData(taggunResponse.data).forEach((item) => {
        const newItem = realm.create("Item", new Item(item));
        newMeal.items.push(newItem);
      });
      setSelectedMeal(newMeal);
      setCreateNewMeal(false);
    });
  };

  useEffect(() => {
    if (taggunResponse) createMealFromTaggunResponse();
  });

  return (
    <View style={styles.container}>
      <Button
        title="Take A Photo"
        color="darkgray"
        onPress={handleTakePhotoButtonPress}
      />
      <Image style={{ width: 150, height: 150 }} source={imageSource} />
      <Button title="Submit to taggun" onPress={sendImageToTaggun} />
      <Button
        title="Take A Photo"
        color="darkgray"
        onPress={handleTakePhotoButtonPress}
      /> 
       <Image style={{ width: 150, height: 150 }} source={imageSource} />
      <StatusBar style="auto" />
    </View>
  );
};
