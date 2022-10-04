import { StatusBar } from "expo-status-bar";
// Imports that allow you to use "react" and "react-natives" features.
import { Pressable, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { RealmProvider } from "./app/createRealmContext";
// import MealScreen from "./app/components/mealScreen";
import SelectMealSplash from "./app/components/selectMealSplash";

import UploadReceipt from "./app/components/uploadReceipt";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Image,
  ImageBackground,
  Button,
  TouchableHighlight,
} from "react-native";
import addItem from "./app/components/addItem";

import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import uploadReceipt from "./app/components/uploadReceipt";
import AddItem from "./app/components/addItem";
import Items from "./app/components/items";
import { useRealm } from "./app/createRealmContext";
import { Meal } from "./app/models/Meal";
import styles from "./app/common/styles";
import Users from "./app/components/users";
import TotalsScreen from "./app/TotalsScreen";

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("./assets/background-image.png")}
      resizeMode={"cover"}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          source={require("./assets/adaptive-icon.png")}
          style={{
            width: 350,
            height: 350,
            backgroundColor: "rgb(75,35,243,0.3)",
            marginTop: -320,
          }}
        />
        <TouchableHighlight
          style={{ marginBottom: 32 }}
          onPress={() => navigation.navigate("Camera Screen")}
        >
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

const CameraScreen = ({
  navigation,
  selectedMeal,
  setSelectedMeal,
  testVar,
}) => {
  // const [selectedMeal, setSelectedMeal] = useState();
  const [createNewMeal, setCreateNewMeal] = useState(false);

  const [imageSource, setImageSource] = useState();
  const [imageObj, setImageObj] = useState();
  const realm = useRealm();

  return (
    // <>
    <ImageBackground
      source={require("./assets/background-image-two.png")}
      resizeMode={"cover"}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableHighlight onPress={() => navigation.navigate("🏠")}>
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
              marginBottom: 30,
            }}
          >
            ⬅ Back
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
              marginBottom: 30,
            }}
            onPress={() => {
              let newMeal;
              realm.write(() => {
                console.log("creating new meal");
                newMeal = realm.create("Meal", new Meal({}));
              });
              navigation.navigate("Meal Screen", { selectedMeal: newMeal });
            }}
          >
            Create ✨
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() =>
            launchImageLibrary(
              {
                cameraType: "back",
                mediaType: "photo",
                saveToPhotos: true,
                includeBase64: true,
              },
              (e) => {
                if (e.didCancel) {
                  console.log("cancelled");
                } else if (e.errorMessage) {
                  console.log("error: " + e.errorMessage);
                } else if (e.errorCode) {
                  console.log(e.errorCode);
                } else {
                  const source = {
                    uri: "data:image/jpeg;base64," + e.assets[0].base64,
                  };
                  setImageObj(
                    JSON.stringify({
                      image: e.assets[0].base64,
                      filename: e.assets[0].fileName,
                      contentType: e.assets[0].type,
                    })
                  );
                  setImageSource(source);
                }
              }
            )
          }
        >
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
              marginBottom: 30,
            }}
          >
            Upload 📁
          </Text>
        </TouchableHighlight>
        {/* <View style={{ flex: 0, alignItems: "center", padding: 16, backgroundColor: "#333" }}> */}
        <TouchableHighlight
          onPress={() => navigation.navigate("Save Photo Screen")}
        >
          <Text
            style={{
              fontSize: 32,
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
              marginBottom: 30,
            }}
          >
            📸
          </Text>
        </TouchableHighlight>
        {/* </View> */}
        {/* </> */}
      </View>
    </ImageBackground>
  );
};

const SavePhotoScreen = ({ navigation }) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          backgroundColor: "#333",
          flexDirection: "row",
          paddingLeft: 16,
          paddingRight: 16,
        }}
      >
        <TouchableHighlight
          onPress={() => navigation.navigate("Camera Screen")}
        >
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
              marginTop: 40,
            }}
          >
            ⬅ Retake
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigation.navigate("Camera Screen")}
        >
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
              marginTop: 40,
            }}
          >
            Use
          </Text>
        </TouchableHighlight>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#333",
        }}
      >
        <Text style={{ color: "#fff" }}>"Itemised Receipt functionality"</Text>
      </View>
    </>
  );
};

const MealScreen = ({ navigation, route }) => {
  const [selectedMeal, setSelectedMeal] = useState(route.params.selectedMeal);
  const [selectedFriend, setSelectedFriend] = useState();
  return (
    <View style={styles.container}>
      <Items
        selectedMeal={selectedMeal}
        setSelectedMeal={setSelectedMeal}
        selectedFriend={selectedFriend}
      />
      <Button
        title="Totals ->"
        onPress={() => navigation.navigate("Totals Screen")}
      />
      <Users
        selectedMeal={selectedMeal}
        setSelectedMeal={setSelectedMeal}
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
      />
      {/* <Users /> */}
    </View>
  );
};

const Stack = createNativeStackNavigator();

// The main component which acts as a container for all other components within the the codebase.
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="🏠"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Camera Screen"
          component={CameraScreen}
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
        {/* <Stack.Screen name="Upload Photo" component={UploadPhoto} options={{ headerShown: false }} /> */}
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
