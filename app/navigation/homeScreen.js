import { View, ImageBackground, Text } from "react-native";
import { Pressable } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ImageBackground
        source={"./assets/background-image.png"}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
      <Text>Hi</Text>
    </View>
  );
};

export default HomeScreen;
