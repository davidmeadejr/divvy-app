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
  const [imageSource, setImageSource] = useState();
  const [imageObj, setImageObj] = useState();
  const realm = useRealm();

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
        <TouchableOpacity>
          <Text
            style={styles.createButton}
            onPress={() => {
              let newMeal;
              realm.write(() => {
                console.log("creating new meal");
                newMeal = realm.create("Meal", new Meal({}));
              });
              navigation.navigate("Meal Screen", { selectedMeal: newMeal });
            }}
          >
            Create ✨
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
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
        >
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
