import React from "react";
import { Text, View, FlatList } from "react-native";
import { useQuery } from "../createRealmContext";

const Totals = ({ selectedMeal }) => {
  const roundToTwo = (num) => +(Math.round(num + "e+2") + "e-2");

  const addedCharge = (subtotal) =>
    [selectedMeal.serivceChargeAmount, selectedMeal.tipAmount]
      .map((amount) => roundToTwo((subtotal * amount) / 100))
      .reduce((a, b) => a + b, 0);

  const individualTotalsObj = (friend) => {
    const friendSubTotal = friend.items
      .map((item) => roundToTwo(item.amount / item.friends.length))
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
      .map((item) => roundToTwo(item.amount))
      .reduce((a, b) => a + b, 0);
  };

  const getTotal = (amount) => {
    return amount + addedCharge(amount);
  };
  const serviceCharge = () => {
    if (selectedMeal.serivceChargeAmount) {
      return (
        <Text>
          Service charge: £
          {((subTotal() * selectedMeal.serivceChargeAmount) / 100).toFixed(2)}
        </Text>
      );
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
