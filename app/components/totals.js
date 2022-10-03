import React from "react";
import { Text, View, FlatList } from "react-native";
import { useRealm, useQuery } from "../createRealmContext";
import { Realm } from "@realm/react";

const Totals = ({ selectedMeal }) => {
  const addedCharge = (subtotal) =>
    [selectedMeal.serivceChargeAmount, selectedMeal.tipAmount]
      .map((amount) => (subtotal * amount) / 100)
      .reduce((a, b) => a + b, 0);

  const individualTotalsObj = (friend) => {
    const friendSubTotal = friend.items
      .map((item) => item.amount / item.friends.length)
      .reduce((a, b) => a + b, 0);
    return {
      name: friend.name,
      id: friend._id.toString(),
      amount: getTotal(friendSubTotal),
    };
  };
  const individualTotals = () => {
    return useQuery("Friend")
      .filtered("meal._id == $0", selectedMeal._id)
      .map(individualTotalsObj);
  };

  const subTotal = () => {
    return selectedMeal.items
      .map((item) => item.amount)
      .reduce((a, b) => a + b, 0);
  };

  const getTotal = (amount) => {
    return amount + addedCharge(amount);
  };

  const serviceCharge = () => {
    if (selectedMeal.serivceChargeAmount) {
      return <Text>Service charge: {selectedMeal.serivceChargeAmount}%</Text>;
    }
  };

  const tip = () => {
    if (selectedMeal.tipAmount) {
      return <Text>Tip: {selectedMeal.tipAmount}%</Text>;
    }
  };

  return (
    <View>
      <Text>Subtotal: £{subTotal().toFixed(2)}</Text>
      {serviceCharge()}
      {tip()}
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
      <Text>Total: £{getTotal(subTotal()).toFixed(2)}</Text>
    </View>
  );
};

export default Totals;
