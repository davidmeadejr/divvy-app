import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import { useRealm, useQuery } from "../createRealmContext";
import { Item } from "../models/Item";
// The component which handles the functionality of the itemised receipt.
const Items = ({ selectedFriends, setSelectedFriends }) => {
  const realm = useRealm();
  const itemsResult = useQuery("Item");
  const itemOnPressAddFriend = (item) => {
    realm.write(() => {
      item.friends = [...item.friends, ...selectedFriends];
    });
  };
  return (
    <View>
      {/* <Text style={styles.itemsContainer}>Items</Text>
      <Text style={styles.item}>Spag Bol: £5.00</Text>
      <Text style={styles.item}>Lasagne: £4.00</Text>
      <Text style={styles.item}>Ice cream: £4.00</Text> */}
      <FlatList
        data={itemsResult}
        renderItem={({ item }) => {
          return (
            <Text onPress={itemOnPressAddFriend(item)}>
              {item.name} £{item.amount.toFixed(2)} {item.friends}
            </Text>
          );
        }}
        keyExtractor={(item) => item._id.toString()}
      />
      {selectedFriends.map((friend, index) => {
        return <Text>{friend.name}</Text>;
      })}
      <Button
        title="Add Field"
        onPress={() => {
          realm.write(() => {
            realm.create("Item", new Item({ name: "Spag Bol", amount: 5 }));
            realm.create("Item", new Item({ name: "Lasagne", amount: 4 }));
            realm.create("Item", new Item({ name: "Ice cream", amount: 4 }));
          });
          console.log(itemsResult);
        }}
      ></Button>
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
