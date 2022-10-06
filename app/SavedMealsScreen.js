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
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Meal Screen", { selectedMeal: meal })
          }
        >
          <Text style={styles.savedMealsText}>
            {getMealNameOrDate(meal)} ➡️
          </Text>
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
      source={require("../assets/saved-meals-bg-img.png")}
      resizeMode={"cover"}
    >
      <View style={styles.savedMealsCenteredView}>
        <View style={styles.savedMealsContainer}>
          <Text style={styles.savedMealsTitle}>Saved Meals: 💾 </Text>
          <FlatList
            style={{ height: "50%" }}
            data={result}
            renderItem={({ item }) => renderSavedMealListItem(item)}
            keyExtractor={(item) => item._id.toString()}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Home Screen")}>
            <Text style={styles.savedMealScreenBackButton}>⬅ Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
