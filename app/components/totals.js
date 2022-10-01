import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import { useRealm, useQuery } from "../createRealmContext";
// import { Item } from "../models/Item";
// import { Friend } from "../models/Friend";
// import { Realm } from "@realm/react";

const Totals = () => {
  realm = useRealm();
  const individualTotals = () => {
    return useQuery("Friend").map((friend) => {
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
    return realm
      .objects("Item")
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
