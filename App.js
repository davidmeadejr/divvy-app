import React, { useState, useEffect } from "react";
import { RealmProvider } from "./app/createRealmContext";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import Items from "./app/components/items";
import { useRealm } from "./app/createRealmContext";
import { Meal } from "./app/models/Meal";
import styles from "./app/common/styles";
import Users from "./app/components/users";
import TotalsScreen from "./app/TotalsScreen";
import SavedMealsScreen from "./app/SavedMealsScreen";
import NewMealScreen from "./app/NewMealScreen";

const Stack = createNativeStackNavigator();

/*
 * Home Screen Functionality
 */
const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.homeScreenBackground}
      source={require("./assets/background-image.png")}
      resizeMode={"cover"}
    >
      <View style={styles.homeScreenContainer}>
        <Image
          style={styles.divvyLogo}
          source={require("./assets/adaptive-icon.png")}
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

/*
 * Save Photo Screen Functionality
 */
const SavePhotoScreen = ({ navigation }) => {
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
        <Text style={styles.photoScreenshot}>
          "Itemised Receipt functionality"
        </Text>
      </View>
    </>
  );
};

/*
 * Meal Screen Functionality
 */
const MealScreen = ({ navigation, route }) => {
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
      <Users
        selectedMeal={selectedMeal}
        setSelectedMeal={setSelectedMeal}
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
      />
    </View>
  );
};

/*
 * The main component which acts as a container for all other components within the the codebase.
 */
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home Screen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="New Meal Screen"
          component={NewMealScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Save Photo Screen"
          component={SavePhotoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Meal Screen"
          component={MealScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Totals Screen"
          component={TotalsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Saved Meals Screen"
          component={SavedMealsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function AppWrapper() {
  return (
    <RealmProvider>
      <App />
    </RealmProvider>
  );
}
