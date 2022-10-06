import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import styles from "./common/styles";

export default HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.homeScreenBackground}
      source={require("../assets/background-image.png")}
      resizeMode={"cover"}
    >
      <View style={styles.homeScreenContainer}>
        <Image
          style={styles.divvyLogo}
          source={require("../assets/adaptive-icon.png")}
        />
        <TouchableOpacity
          style={styles.newMealsButton}
          onPress={() => navigation.navigate("New Meal Screen")}
        >
          <Text style={styles.newMealsButtonText}>New Meals 🍽️</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Saved Meals Screen")}
        >
          <Text style={styles.myMealsButtonText}>My Meals 🍲</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
