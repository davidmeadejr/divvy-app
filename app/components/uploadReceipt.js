import { StatusBar } from "expo-status-bar";
// Imports that allow you to use "react" and "react-natives" features.
import { Text, View, Button, Image } from "react-native";
import React, { useState } from "react";
import styles from "../common/styles";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { Meal } from "../models/Meal";
// Components that have been imported.
// import Items from "./app/components/items";
// import Users from "./app/components/users";

// The main component which acts as a container for all other components within the the codebase.
export default UploadReceipt = ({ setCreateNewMeal, setSelectedMeal }) => {
  const [imageSource, setImageSource] = useState();
  const [imageObj, setImageObj] = useState();
  const [taggunResponse, setTaggunResponse] = useState({
    data: { text: { text: "awaiting taggun response" } },
  });

  const sendImageToTaggun = async () => {
    const axios = require("axios");
    const FormData = require("form-data");
    const data = new FormData();
    data.append("file", imageObj);

    let url = "https://api.taggun.io/api/receipt/v1/verbose/encoded";
    try {
      const response = await axios.post(url, imageObj, {
        headers: {
          "Content-Type": "application/json",
          apikey: "3c61e4503e6911edb69573233a13efd6", // this needs to be an ENV
          accept: "application/json",
        },
      });
      console.log(response);
      setTaggunResponse(response);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title="Take A Photo"
        color="darkgray"
        onPress={() =>
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
          )
        }
      />
      <Image style={{ width: 150, height: 150 }} source={imageSource} />
      <Button title="Submit to taggun" onPress={() => sendImageToTaggun()} />
      <Button
        title="No receipt meal"
        onPress={() => {
          let newMeal;
          realm.write(() => {
            newMeal = realm.create("Meal", new Meal({}));
          });
          setSelectedMeal(newMeal);
        }}
      />
      <Text>{taggunResponse.data.text.text}</Text>
      <StatusBar style="auto" />
    </View>
  );
};
