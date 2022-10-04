import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList, Pressable } from "react-native";
import { useRealm, useQuery } from "../createRealmContext";
import { Item } from "../models/Item";
import ItemComponent from "./itemComponent";
import Totals from "./totals";
import AddItem from "./addItem";
import AddServiceCharge from "./addServiceCharge";
import AddTip from "./addTip";

// The component which handles the functionality of the itemised receipt.
export default Items = ({ selectedFriend, selectedMeal, setSelectedMeal }) => {
  const [itemModalVisible, setItemModalVisible] = useState(false);
  const [serviceChargeModalVisible, setServiceChargeModalVisible] = useState(false);
  const [tipModalVisible, setTipModalVisible] = useState(false);

  const realm = useRealm();
  return (
    <View>
      <Text style={styles.itemsContainer}>Items</Text>
      <FlatList
        data={selectedMeal.items}
        renderItem={({ item }) => {
          return (
            <ItemComponent
              selectedFriend={selectedFriend}
              item={item}
              selectedMeal={selectedMeal}
              setSelectedMeal={setSelectedMeal}
            />
          );
        }}
        keyExtractor={(item) => item._id.toString()}
      />
      <AddItem
        itemModalVisible={itemModalVisible}
        setItemModalVisible={setItemModalVisible}
        selectedMeal={selectedMeal}
      />
      <Button title="Add Item" onPress={() => setItemModalVisible(true)}></Button>
      {/* <AddServiceCharge
        selectedMeal={selectedMeal}
        serviceChargeModalVisible={serviceChargeModalVisible}
        setServiceChargeModalVisible={setServiceChargeModalVisible}
      />
      <Button title="Add service charge" onPress={() => setServiceChargeModalVisible(true)}></Button>
      <AddTip selectedMeal={selectedMeal} tipModalVisible={tipModalVisible} setTipModalVisible={setTipModalVisible} />
      <Button title="Add tip" onPress={() => setTipModalVisible(true)}></Button> */}
      {/* <Totals selectedMeal={selectedMeal} /> */}
      <Button title="Back" onPress={() => setSelectedMeal()} />
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
