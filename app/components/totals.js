import React from "react";
import { Text, View, FlatList } from "react-native";
import { useRealm } from "../createRealmContext";

const Totals = ({ selectedMeal }) => {
  realm = useRealm();
  const individualTotals = () => {
    return selectedMeal.friends.map((friend) => {
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
