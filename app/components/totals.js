import React from "react";
import { Text, View, FlatList } from "react-native";

export default Totals = ({ selectedMeal }) => {
  const roundToTwo = (num) => +(Math.round(num + "e+2") + "e-2");

  const getAddedCharge = (subtotal) =>
    [selectedMeal.serivceChargeAmount, selectedMeal.tipAmount]
      .map((amount) => roundToTwo((subtotal * amount) / 100))
      .reduce((a, b) => a + b, 0);

  const getIndividualTotal = (friend) => {
    return friend.items
      .map((item) => roundToTwo(item.amount / item.friends.length))
      .reduce((a, b) => a + b, 0);
  };

  const getSubTotal = () => {
    return selectedMeal.items
      .map((item) => roundToTwo(item.amount))
      .reduce((a, b) => a + b, 0);
  };

  const getTotal = (amount) => {
    return amount + getAddedCharge(amount);
  };

  const getServiceCharge = () => {
    if (selectedMeal.serivceChargeAmount)
      <Text>{`Service charge: £${(
        (getSubTotal() * selectedMeal.serivceChargeAmount) /
        100
      ).toFixed(2)}`}</Text>;
  };

  const getTip = () => {
    if (selectedMeal.tipAmount) {
      return (
        <Text>{`Service charge: £${(
          (getSubTotal() * selectedMeal.tipAmount) /
          100
        ).toFixed(2)}`}</Text>
      );
    }
  };

  const getIndividualItems = (friend) => {
    return friend.items
      .map((item) =>
        item.friends.length === 1 ? item.name : `${item.name} (shared)`
      )
      .join(", ");
  };

  const renderFlatListItem = (item) => {
    return (
      <View>
        <Text>
          {item.name} £{getIndividualTotal(item).toFixed(2)}
        </Text>
        <Text>{getIndividualItems(item)}</Text>
      </View>
    );
  };

  return (
    <View>
      <Text>Subtotal: £{getSubTotal().toFixed(2)}</Text>
      <FlatList
        data={selectedMeal.friends}
        renderItem={({ item }) => renderFlatListItem(item)}
        keyExtractor={(friend) => friend._id.toString()}
      />
      {getServiceCharge()}
      {getTip()}
      <Text>Total: £{getTotal(getSubTotal()).toFixed(2)}</Text>
    </View>
  );
};
