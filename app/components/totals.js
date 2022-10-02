import React from "react";
import { Text, View, FlatList } from "react-native";
import { useRealm, useQuery } from "../createRealmContext";
import { Realm } from "@realm/react";

const Totals = ({ selectedMeal }) => {
  const individualTotals = () => {
    return useQuery("Friend")
      .filtered("meal._id == $0", selectedMeal._id)
      .map((friend) => {
        return {
          name: friend.name,
          id: friend._id.toString(),
          amount: friend.items
            .map((item) => item.amount / item.friends.length)
            .reduce((a, b) => a + b, 0),
        };
      });
  };

  const mealTotal = () => {
    return selectedMeal.items
      .map((item) => item.amount)
      .reduce((a, b) => a + b, 0);
  };

  return (
    <View>
      <FlatList
        data={individualTotals()}
        renderItem={({ item }) => {
          return (
            <Text>
              {item.name} £{item.amount.toFixed(2)}
            </Text>
          );
        }}
        keyExtractor={(item) => item.id}
      />
      <Text>Total: £{mealTotal().toFixed(2)}</Text>
    </View>
  );
};

export default Totals;
