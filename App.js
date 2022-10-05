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
          onPress={() => navigation.navigate("Camera Screen")}
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
 * Camera Screen Functionality
 */
const CameraScreen = ({
  navigation,
  selectedMeal,
  setSelectedMeal,
  testVar,
}) => {
  const [createNewMeal, setCreateNewMeal] = useState(false);
  const [imageSource, setImageSource] = useState();
  const [imageObj, setImageObj] = useState();
  const realm = useRealm();

  return (
    <ImageBackground
      source={require("./assets/background-image-two.png")}
      resizeMode={"cover"}
      style={styles.cameraScreenBackground}
    >
      <View style={styles.cameraScreenContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home Screen")}>
          <Text style={styles.cameraScreenBackButton}>⬅ Back</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.createButton}
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
        </TouchableOpacity>
        <TouchableOpacity
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
          <Text style={styles.uploadButton}>Upload 📁</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Save Photo Screen")}
        >
          <Text style={styles.cameraEmojiButton}>📸</Text>
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
