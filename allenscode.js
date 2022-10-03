import { StatusBar } from "expo-status-bar";
// Imports that allow you to use "react" and "react-natives" features.
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import React, { useState } from "react";
import { RealmProvider } from "./app/createRealmContext";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
// Components that have been imported.
import Items from "./app/components/items";
import Users from "./app/components/users";
import * as FileSystem from "expo-file-system";
// The main component which acts as a container for all other components within the the codebase.
const App = () => {
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [imageSource, setImageSource] = useState();
  const [taggunResponse, setTaggunResponse] = useState({
    text: { text: "awaiting taggun response" },
  });
  const sendImageToTaggun = async () => {
    const axios = require("axios");
    const FormData = require("form-data");
    // const fs = require("fs");
    const API_KEY = "3c61e4503e6911edb69573233a13efd6";
    const data = new FormData();
    let options = { encoding: FileSystem.EncodingTypes.Base64 };
    const imageFile = await FileSystem.readAsStringAsync(imageSource, options);
    data.append("file", imageFile);

    const headers = {
      "Content-Type": "multipart/form-data",
      apikey: API_KEY,
      ...data.getHeaders(),
    };
    const config = {
      method: "post",
      url: "https://api.taggun.io/api/receipt/v1/verbose/file",
      headers,
      data,
    };
    const response = await axios(config);
    setTaggunResponse(response.data);
    console.log(response.data);
  };
  return (
    <View style={styles.container}>
      <Items
        selectedFriends={selectedFriends}
        setSelectedFriends={setSelectedFriends}
      />
      <Users
        selectedFriends={selectedFriends}
        setSelectedFriends={setSelectedFriends}
      />
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
                setImageSource(source);
                // setImageSRC(source);
                // navigation.navigate({
                //   name: 'Task',
                //   params: {image: source},
                //   merge: true,
                // });
              }
            }
          )
        }
      />
      <Image style={{ width: 100, height: 100 }} source={imageSource} />
      <Button title="Submit to taggun" onPress={() => sendImageToTaggun()} />
      <Text>{taggunResponse.text.text}</Text>
      <StatusBar style="auto" />
    </View>
  );
};
export default function AppWrapper() {
  return (
    <RealmProvider>
      <App />
    </RealmProvider>
  );
}
// CSS styling for the App component.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
    marginRight: 16,
    marginBottom: 16,
    marginLeft: 16,
  },
});
