import React from "react";
import { RealmProvider } from "./app/createRealmContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogBox } from "react-native";
import TotalsScreen from "./app/TotalsScreen";
import SavedMealsScreen from "./app/SavedMealsScreen";
import NewMealScreen from "./app/NewMealScreen";
import SavePhotoScreen from "./app/SavePhotoScreen";
import HomeScreen from "./app/HomeScreen";
import MealScreen from "./app/MealScreen";

const Stack = createNativeStackNavigator();

export default App = () => {
  LogBox.ignoreAllLogs();

  return (
    <RealmProvider>
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
    </RealmProvider>
  );
};
