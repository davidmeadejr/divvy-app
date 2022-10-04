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
import { View, Text, Image, ImageBackground, Button, TouchableHighlight } from "react-native";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#4B23F3" }}>
      <Pressable onPress={() => navigation.navigate("🏠")}>
        <Image
          source={require("./assets/icon.png")}
          style={{ width: 200, height: 200, backgroundColor: "rgb(75,35,243,0.3)" }}
        />
      </Pressable>
      <Text
        style={{
          color: "#fff",
          fontSize: 16,
          fontWeight: "bold",
          textShadowColor: "rgba(0, 0, 0, 0.5",
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 5,
        }}
      >
        Divide and conquer... food 🥙🍲😋
      </Text>
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
        <TouchableHighlight style={{ marginBottom: 32 }} onPress={() => navigation.navigate("Camera Screen")}>
          <Text
            style={{
              fontSize: 32,
              color: "#fff",
              borderWidth: 2,
              borderColor: "#4B23F3",
              borderRadius: 10,
              backgroundColor: "#4B23F3",
              padding: 10,
              overflow: "hidden",
              fontWeight: "bold",
            }}
          >
            New Meals 🍽️
          </Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text
            style={{
              fontSize: 32,
              color: "#fff",
              borderWidth: 2,
              borderColor: "#4B23F3",
              borderRadius: 10,
              backgroundColor: "#4B23F3",
              paddingTop: 10,
              paddingBottom: 10,
              overflow: "hidden",
              fontWeight: "bold",
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            My Meals 🍲
          </Text>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  );
};

const CameraScreen = ({ navigation }) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          // alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor: "#fff",
          flexDirection: "row",
          paddingTop: 32,
        }}
      >
        <TouchableHighlight onPress={() => navigation.navigate("🏠")}>
          <Text
            style={{
              fontSize: 20,
              color: "#fff",
              borderWidth: 2,
              borderColor: "#4B23F3",
              borderRadius: 10,
              backgroundColor: "#4B23F3",
              padding: 8,
              overflow: "hidden",
            }}
          >
            ⬅ Back
          </Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text
            style={{
              fontSize: 20,
              color: "#fff",
              borderWidth: 2,
              borderColor: "#4B23F3",
              borderRadius: 10,
              backgroundColor: "#4B23F3",
              padding: 8,
              overflow: "hidden",
            }}
          >
            Add ✨
          </Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text
            style={{
              fontSize: 20,
              color: "#fff",
              borderWidth: 2,
              borderColor: "#4B23F3",
              borderRadius: 10,
              backgroundColor: "#4B23F3",
              padding: 8,
              overflow: "hidden",
            }}
          >
            Upload 📁
          </Text>
        </TouchableHighlight>
      </View>
      <View style={{ flex: 0, alignItems: "center", padding: 16, backgroundColor: "#fff" }}>
        <TouchableHighlight>
          <Text
            style={{
              fontSize: 20,
              color: "#fff",
              borderWidth: 2,
              borderColor: "#4B23F3",
              borderRadius: 10,
              backgroundColor: "#4B23F3",
              padding: 8,
              overflow: "hidden",
            }}
          >
            📸
          </Text>
        </TouchableHighlight>
      </View>
    </>
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
        <Stack.Screen name="➗" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="🏠" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Camera Screen" component={CameraScreen} options={{ headerShown: false }} />
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
