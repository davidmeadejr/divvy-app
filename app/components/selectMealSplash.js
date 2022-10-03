import React, { useState } from "react";
import {
  View,
  Button,
  Modal,
  Text,
  Pressable,
  TextInput,
  Alert,
  FlatList,
  Image,
} from "react-native";
import { useRealm, useQuery } from "../createRealmContext";
import { Meal } from "../models/Meal";
import * as FileSystem from "expo-file-system";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import RNFS from "react-native-fs";
import axios from "axios";

export default SelectMealSplash = ({ selectedMeal, setSelectedMeal }) => {
  // const [selectedMeal, setSelectedMeal] = useState();
  const [imageSource, setImageSource] = useState();
  const [taggunResponse, setTaggunResponse] = useState({
    text: { text: "awaiting taggun response" },
  });

  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const realm = useRealm();
  const result = useQuery("Meal");
  const handleButtonPress = () => {
    try {
      realm.write(() => {
        const meal = realm.create("Meal", new Meal({}));
        setSelectedMeal(meal);
      });
    } catch {
      Alert.alert("There was an issue creating a new meal");
    }
  };

  const handleItemPress = (item) => {
    setSelectedMeal(item);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        marginTop: 50,
        marginRight: 16,
        marginBottom: 16,
        marginLeft: 16,
      }}
    >
      <Text>Select your meal!</Text>
      <Button
        title="Create new meal"
        onPress={() => handleButtonPress()}
      ></Button>
      {/* <Image style={{ width: 100, height: 100 }} source={imageSource} /> */}

      <FlatList
        data={result}
        renderItem={({ item }) => {
          return (
            <Pressable
              style={{ padding: 5 }}
              onPress={() => handleItemPress(item)}
            >
              <Text>Meal at {new Date(item.createdAt).toUTCString()}</Text>
            </Pressable>
          );
        }}
        keyExtractor={(item) => item._id.toString()}
      />
      {/* <Button
        title="Take A Photo"
        color="darkgray"
        onPress={() =>
          launchImageLibrary(
            {
              // cameraType: "back",
              // mediaType: "photo",
              // saveToPhotos: true,
              // includeBase64: true,
              noData: true,
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
                setImageSource(source.uri);
                setFile(e.assets[0]);
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
      /> */}
      {/* <Button title="Submit to taggun" onPress={() => submitPhoto()} /> */}
      {/* <Text>{imageSource.uri}</Text> */}
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     marginTop: 50,
//     marginRight: 16,
//     marginBottom: 16,
//     marginLeft: 16,
//   },
// });
