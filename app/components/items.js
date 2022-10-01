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
export default Items = ({ selectedFriends, selectedMeal, setSelectedMeal }) => {
  const [itemModalVisible, setItemModalVisible] = useState(false);

  return (
    <View>
      <Text style={styles.itemsContainer}>Items</Text>
      <FlatList
        data={selectedMeal.items}
        renderItem={({ item }) => {
          return (
            <ItemComponent selectedFriends={selectedFriends} item={item} />
          );
        }}
        keyExtractor={(item) => item._id.toString()}
      />
      <AddItem
        itemModalVisible={itemModalVisible}
        setItemModalVisible={setItemModalVisible}
        selectedMeal={selectedMeal}
      />
      <Button
        title="Add Item"
        onPress={() => setItemModalVisible(true)}
      ></Button>
      <Totals selectedMeal={selectedMeal} />
      <Pressable onPress={() => setSelectedMeal()}>
        <Text>Back</Text>
      </Pressable>
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
