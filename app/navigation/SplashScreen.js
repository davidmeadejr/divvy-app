import { View, Image } from "react-native";
import { Pressable } from "react-native";
import React from "react";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#4B23F3" }}>
      <Pressable onPress={() => navigation.navigate("🏠")}>
        <Image source={require("../../assets/icon.png")} style={{ width: 200, height: 200 }} />
      </Pressable>
    </View>
  );
};

export default SplashScreen;
