import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "./common/styles";
import { useQuery } from "./createRealmContext";

export default SavedMealsScreen = ({ navigation }) => {
  const result = useQuery("Meal");

  const renderSavedMealListItem = (meal) => {
    return (
      <View style={styles.savedMealsContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Meal Screen", { selectedMeal: meal })
          }
          style={styles.savedMealsContainer}
        >
          <Text style={styles.savedMealsText}>{getMealNameOrDate(meal)}</Text>
          <Text> ➡️</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const getMealNameOrDate = (meal) => {
    if (meal.name) return meal.name;
    const mealDateStr = new Date(Date.parse(meal.createdAt)).toDateString();
    return `Meal at ${mealDateStr}`;
  };

  return (
    <ImageBackground
      style={styles.homeScreenBackground}
      source={require("../assets/background-image.png")}
      resizeMode={"cover"}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Home Screen")}>
        <Text style={styles.savedMealScreenBackButton}>⬅ Back</Text>
      </TouchableOpacity>
      <View style={styles.savedMealsTitleContainer}>
        <Text style={styles.savedMealsTitle}>Saved Meals: 💾 </Text>
        {/* <View style={styles.separator}></View> */}
        <FlatList
          data={result}
          renderItem={({ item }) => renderSavedMealListItem(item)}
          keyExtractor={(item) => item._id.toString()}
        />
      </View>
    </ImageBackground>
  );
};
