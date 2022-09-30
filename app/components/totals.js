import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import { useRealm, useQuery } from "../createRealmContext";
import { Item } from "../models/Item";
import { Friend } from "../models/Friend";
import { Realm } from "@realm/react";

const Totals = () => {
  const realm = useRealm();

  const individualTotals = () => {
    return realm.objects("Friend").map((friend) => {
      return {
        id: friend._id.toString(),
        amount: friend.items
          .map((item) => item.amount / item.friends.length)
          .reduce((a, b) => a + b, 0),
      };
    });
  };

  return (
    <View>
      <FlatList
        data={individualTotals()}
        renderItem={({ item }) => {
          const friendName = realm.objectForPrimaryKey(
            "Friend",
            Realm.BSON.ObjectId(item.id)
          ).name;
          return (
            <Text>
              {friendName} £{item.amount.toFixed(2)}
            </Text>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Totals;
