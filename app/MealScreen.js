import { View } from "react-native";
import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import Items from "./components/items";
import FriendsBar from "./components/friendsBar";

export default MealScreen = ({ navigation, route }) => {
  const [selectedMeal, setSelectedMeal] = useState(route.params.selectedMeal);
  const [selectedFriend, setSelectedFriend] = useState();

  useFocusEffect(
    React.useCallback(() => {
      setSelectedMeal(route.params.selectedMeal);
    })
  );

  return (
    <View style={styles.mealScreenContainer}>
      <Items
        selectedMeal={selectedMeal}
        setSelectedMeal={setSelectedMeal}
        selectedFriend={selectedFriend}
        navigation={navigation}
      />
      <FriendsBar
        selectedMeal={selectedMeal}
        setSelectedMeal={setSelectedMeal}
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
      />
    </View>
  );
};
