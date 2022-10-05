import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./common/styles";
import { useQuery } from "./createRealmContext";

export default SavedMealsScreen = ({ navigation }) => {
  const result = useQuery("Meal");
  const getMealNameOrDate = (meal) => {
    if (meal.name) return meal.name;
    const mealCreatedDateObj = new Date(Date.parse(meal.createdAt));
    return `Meal at ${mealCreatedDateObj.toDateString()} ${mealCreatedDateObj.toTimeString()}`;
  };

  const renderSavedMealListItem = (meal) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Meal Screen", { selectedMeal: meal })
        }
      >
        <Text>{getMealNameOrDate(meal)}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Saved Meals:</Text>
      <FlatList
        data={result}
        renderItem={({ item }) => renderSavedMealListItem(item)}
        keyExtractor={(item) => item._id.toString()}
      />
    </View>
  );
};
