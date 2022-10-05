import { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import styles from "./common/styles";
import { useRealm } from "./createRealmContext";
import { Meal } from "./models/Meal";

export default NewMealScreen = ({ navigation }) => {
  // const [imageSource, setImageSource] = useState();
  // const [imageObj, setImageObj] = useState();
  const realm = useRealm();

  const createNewMeal = () => {
    let newMeal;
    realm.write(() => {
      console.log("creating new meal");
      newMeal = realm.create("Meal", new Meal({}));
    });
    navigation.navigate("Meal Screen", { selectedMeal: newMeal });
  };

  const handleLibraryImage = () => {
    launchImageLibrary(
      {
        cameraType: "back",
        mediaType: "photo",
        saveToPhotos: true,
        includeBase64: true,
      },
      (imageResult) => {
        if (imageResult.didCancel) {
          console.log("cancelled");
        } else if (imageResult.errorMessage) {
          console.log("error: " + imageResult.errorMessage);
        } else if (imageResult.errorCode) {
          console.log(imageResult.errorCode);
        } else {
          const imageSrc = {
            uri: "data:image/jpeg;base64," + imageResult.assets[0].base64,
          };
          const imageTaggunObj = JSON.stringify({
            image: imageResult.assets[0].base64,
            filename: imageResult.assets[0].fileName,
            contentType: imageResult.assets[0].type,
          });

          navigation.navigate("Save Photo Screen", {
            imageTaggunObj,
            imageSrc,
          });
        }
      }
    );
  };
  // const source = {
  //   uri: "data:image/jpeg;base64," + result.assets[0].base64,
  // };
  // setImageObj(
  //   JSON.stringify({
  //     image: e.assets[0].base64,
  //     filename: e.assets[0].fileName,
  //     contentType: e.assets[0].type,
  //   })
  // );
  // setImageSource(source);

  return (
    <ImageBackground
      source={require("../assets/background-image-two.png")}
      resizeMode={"cover"}
      style={styles.cameraScreenBackground}
    >
      <View style={styles.cameraScreenContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home Screen")}>
          <Text style={styles.cameraScreenBackButton}>⬅ Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={createNewMeal}>
          <Text style={styles.createButton}>Create ✨</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLibraryImage}>
          <Text style={styles.uploadButton}>Upload 📁</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Save Photo Screen")}
        >
          <Text style={styles.cameraEmojiButton}>📸</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
