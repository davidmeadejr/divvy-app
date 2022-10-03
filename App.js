import { StatusBar } from "expo-status-bar";
// Imports that allow you to use "react" and "react-natives" features.
import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { RealmProvider } from "./app/createRealmContext";
import MealScreen from "./app/components/mealScreen";
import SelectMealSplash from "./app/components/selectMealSplash";
import UploadReceipt from "./app/components/uploadReceipt";

// The main component which acts as a container for all other components within the the codebase.
const App = () => {
  const [selectedMeal, setSelectedMeal] = useState();
  const [createNewMeal, setCreateNewMeal] = useState(false);

  const mainRender = () => {
    if (!selectedMeal && !createNewMeal) {
      return (
        <SelectMealSplash
          selectedMeal={selectedMeal}
          setSelectedMeal={setSelectedMeal}
          createNewMeal={createNewMeal}
          setCreateNewMeal={setCreateNewMeal}
        />
      );
    } else if (!selectedMeal && createNewMeal) {
      return (
        <UploadReceipt
          setCreateNewMeal={setCreateNewMeal}
          setSelectedMeal={setSelectedMeal}
        />
      );
    } else {
      return (
        <MealScreen
          selectedMeal={selectedMeal}
          setSelectedMeal={setSelectedMeal}
        />
      );
    }
  };

  return mainRender();
};

export default function AppWrapper() {
  return (
    <RealmProvider>
      <App />
    </RealmProvider>
  );
}
// CSS styling for the App component.
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     marginTop: 50,
//     marginRight: 16,
//     marginBottom: 16,
//     marginLeft: 16,
// }
