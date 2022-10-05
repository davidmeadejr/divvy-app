import { View, Text, Image, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import styles from "./common/styles";
import React from "react";

export default SavePhotoScreen = ({ navigation, route }) => {
  const [imageSrc, setImageSrc] = useState();
  useFocusEffect(
    React.useCallback(() => {
      const imageResult = route.params.imageResult;
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
