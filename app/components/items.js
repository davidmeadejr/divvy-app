import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import { useRealm, useQuery } from "../createRealmContext";
import { Item } from "../models/Item";
import Totals from "./totals";

// The component which handles the functionality of the itemised receipt.
const Items = ({ selectedFriends, setSelectedFriends }) => {
  const realm = useRealm();
  const itemsResult = useQuery("Item");

  const itemFriends = (item) => {
    if (!item.friends.length) return [];
    return item.friends.map((friend) => friend.name).join(", ");
  };

  const itemOnPressAddFriend = (item) => {
    selectedFriends.forEach((selectedFriend) => {
      const friendIdx = item.friends
        .map((friend) => friend._id.toString())
        .indexOf(selectedFriend._id.toString());
      realm.write(() => {
        friendIdx === -1
          ? item.friends.push(selectedFriend)
          : item.friends.splice(friendIdx, 1);
      });
    });
  };

  return (
    <View>
      <Text style={styles.itemsContainer}>Items</Text>
      <FlatList
        data={itemsResult}
        renderItem={({ item }) => {
          return (
            <View>
              <Text
                style={{
                  backgroundColor: "#2196F3",
                  marginRight: 16,
                  marginTop: 5,
                  marginBottom: 5,
                  borderRadius: 10,
                  padding: 10,
                }}
                onPress={() => itemOnPressAddFriend(item)}
              >
                {item.name} £{item.amount.toFixed(2)} {itemFriends(item)}
              </Text>
            </View>
          );
        }}
        keyExtractor={(item) => item._id.toString()}
      />
      {/* {selectedFriends.map((friend, index) => {
        return <Text>{friend.name}</Text>;
      })} */}
      <Button
        title="Add Field"
        onPress={() => {
          realm.write(() => {
            realm.create("Item", new Item({ name: "Spag Bol", amount: 5 }));
            realm.create("Item", new Item({ name: "Lasagne", amount: 4 }));
            realm.create("Item", new Item({ name: "Ice cream", amount: 4 }));
          });
        }}
      ></Button>
      <Totals />
    </View>
  );
};

const styles = StyleSheet.create({
  itemsContainer: {
    display: "flex",
    fontSize: 30,
    fontWeight: "bold",
  },
  item: {
    display: "flex",
    flexDirection: "column",
  },
});

export default Items;
