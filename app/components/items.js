import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  FlatList,
  Pressable,
} from "react-native";
import { useRealm, useQuery } from "../createRealmContext";
import { Item } from "../models/Item";
import ItemComponent from "./itemComponent";
import Totals from "./totals";
import AddItem from "./addItem";

// The component which handles the functionality of the itemised receipt.
export default Items = ({ selectedFriends, setSelectedFriends }) => {
  const realm = useRealm();
  const itemsResult = useQuery("Item");
  const [itemModalVisible, setItemModalVisible] = useState(false);

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
            <ItemComponent
              itemOnPressAddFriend={itemOnPressAddFriend}
              item={item}
            />
          );
        }}
        keyExtractor={(item) => item._id.toString()}
      />
      <AddItem
        itemModalVisible={itemModalVisible}
        setItemModalVisible={setItemModalVisible}
      />
      <Button
        title="Add Item"
        onPress={() => setItemModalVisible(true)}
      ></Button>
      {/* <Button
        title="Add Field"
        onPress={() => {
          realm.write(() => {
            realm.create("Item", new Item({ name: "Spag Bol", amount: 5 }));
            realm.create("Item", new Item({ name: "Lasagne", amount: 4 }));
            realm.create("Item", new Item({ name: "Ice cream", amount: 4 }));
          });
        }}
      ></Button> */}
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
