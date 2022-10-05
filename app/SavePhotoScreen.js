import { View, Text, Image, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import styles from "./common/styles";
import React from "react";

export default SavePhotoScreen = ({ navigation, route }) => {
  const [imageSrc, setImageSrc] = useState();
  const [loadingState, setLoadingState] = useState();
  useFocusEffect(
    React.useCallback(() => {
      const imageResult = route.params.imageResult;
      setImageSrc({
        uri: "data:image/jpeg;base64," + result.assets[0].base64,
      });
      setImageObj(
        JSON.stringify({
          image: e.assets[0].base64,
          filename: e.assets[0].fileName,
          contentType: e.assets[0].type,
        })
      );
      setImageSource(source);
    })
  );
  return (
    <>
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
        <Image source={imageSrc}></Image>
      </View>
    </>
  );
};
