import React, { useState } from "react";
import { View, Button, Text, Pressable, Alert, FlatList } from "react-native";
import { useRealm, useQuery } from "../createRealmContext";
import { Meal } from "../models/Meal";

export default SelectMealSplash = ({ selectedMeal, setSelectedMeal, setCreateNewMeal }) => {
  const realm = useRealm();
  const result = useQuery("Meal");
  const handleButtonPress = () => {
    try {
      // realm.write(() => {
      //   const meal = realm.create("Meal", new Meal({}));
      //   // setSelectedMeal(meal);
      // });
      setCreateNewMeal(true);
    } catch {
      Alert.alert("There was an issue creating a new meal");
    }
  };

  const handleItemPress = (item) => {
    setSelectedMeal(item);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        marginTop: 50,
        marginRight: 16,
        marginBottom: 16,
        marginLeft: 16,
      }}
    >
      <Text>Select your meal!</Text>
      <Button title="Create new meal" onPress={() => handleButtonPress()}></Button>

      <FlatList
        data={result}
        renderItem={({ item }) => {
          return (
            <Pressable style={{ padding: 5 }} onPress={() => handleItemPress(item)}>
              <Text>Meal at {new Date(item.createdAt).toUTCString()}</Text>
            </Pressable>
          );
        }}
        keyExtractor={(item) => item._id.toString()}
      />
    </View>
  );
};
