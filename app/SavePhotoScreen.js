import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./common/styles";

export default SavePhotoScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.savePhotoContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Camera Screen")}>
          <Text style={styles.retakePhotoButton}>⬅ Retake</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Camera Screen")}>
          <Text style={styles.usePhotoButton}>Use</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.photoScreenshotContainer}>
        <Image></Image>
      </View>
    </>
  );
};
