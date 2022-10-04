import { StatusBar } from "expo-status-bar";
// Imports that allow you to use "react" and "react-natives" features.
import { Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { RealmProvider } from "./app/createRealmContext";
import MealScreen from "./app/components/mealScreen";
import SelectMealSplash from "./app/components/selectMealSplash";
import UploadReceipt from "./app/components/uploadReceipt";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Image, ImageBackground } from "react-native";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#4B23F3" }}>
      <Pressable onPress={() => navigation.navigate("🏠")}>
        <Image source={require("./assets/icon.png")} style={{ width: 200, height: 200 }} />
      </Pressable>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("./assets/background-image.png")}
      resizeMode={"cover"}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Hi</Text>
      </View>
    </ImageBackground>
  );
};

const Stack = createNativeStackNavigator();

// The main component which acts as a container for all other components within the the codebase.
const App = () => {
  // const [selectedMeal, setSelectedMeal] = useState();
  // const [createNewMeal, setCreateNewMeal] = useState(false);

  // const mainRender = () => {
  //   if (!selectedMeal && !createNewMeal) {
  //     return (
  //       <SelectMealSplash
  //         selectedMeal={selectedMeal}
  //         setSelectedMeal={setSelectedMeal}
  //         createNewMeal={createNewMeal}
  //         setCreateNewMeal={setCreateNewMeal}
  //       />
  //     );
  //   } else if (!selectedMeal && createNewMeal) {
  //     return <UploadReceipt setCreateNewMeal={setCreateNewMeal} setSelectedMeal={setSelectedMeal} />;
  //   } else {
  //     return <MealScreen selectedMeal={selectedMeal} setSelectedMeal={setSelectedMeal} />;
  //   }
  // };

  // return mainRender();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="➗" component={SplashScreen} />
        <Stack.Screen name="🏠" component={HomeScreen} /> */}
        <Stack.Screen name="➗" component={SplashScreen} />
        <Stack.Screen name="🏠" component={HomeScreen} />
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
