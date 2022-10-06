import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import styles from "./common/styles";
import { useRealm } from "./createRealmContext";
import { Meal } from "./models/Meal";

export default NewMealScreen = ({ navigation }) => {
  const realm = useRealm();

  const createNewMeal = () => {
    let newMeal;
    realm.write(() => {
      console.log("creating new meal");
      newMeal = realm.create("Meal", new Meal({}));
    });
    realm.close();

    navigation.navigate("Meal Screen", { selectedMeal: newMeal });
  };
  const handleImagePicker = (imageFunction) => {
    imageFunction(
      {
        cameraType: "back",
        mediaType: "photo",
        includeBase64: true,
        maxHeight: 640,
        maxWidgth: 640,
        quality: 1,
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
        <TouchableOpacity onPress={() => handleImagePicker(launchImageLibrary)}>
          <Text style={styles.uploadButton}>Upload 📁</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePicker(launchCamera)}>
          <Text style={styles.cameraEmojiButton}>📸</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
