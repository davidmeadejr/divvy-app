import React from "react";
import { Text, View, FlatList } from "react-native";
import styles from "../common/styles";

export default Totals = ({ selectedMeal }) => {
  const getChargeText = (charge) => {
    const chargeName = charge === "Service charge" ? "serviceCharge" : charge.toLowerCase();
    if (selectedMeal[`${chargeName}Amount`]) {
      let chargeAmount = selectedMeal[`${chargeName}Amount`];
      if (selectedMeal[`${chargeName}Type`] === "percent")
        chargeAmount = getPercentageForString(selectedMeal[`${chargeName}Amount`]);
      return <Text>{`${charge}: £${chargeAmount.toFixed(2)}`}</Text>;
    }
  };

  const getPercentageForString = (charge) => (getSubTotal() * charge) / 100;

  const getFriendTotalsText = (item) => {
    return (
      <View>
        <View style={styles.totalsBreakdownContainer}>
          <Text style={styles.totalsItemName}>{item.name}</Text>
          <Text style={styles.totalsItemAmount}>£{getIndividualTotal(item).toFixed(2)}</Text>
        </View>
        <Text>{getIndividualItems(item)}</Text>
      </View>
    );
  };

  const getIndividualTotal = (friend) => {
    const itemsTotal = friend.items
      .map((item) => roundToTwo(item.amount / item.friends.length))
      .reduce((a, b) => a + b, 0);
    return itemsTotal + getAddedChargesSummed(itemsTotal, true);
  };

  const getAddedChargesSummed = (subtotal, forIndividualFriend) =>
    ["serviceCharge", "tip", "discount", "tax"]
      .map((charge) => {
        let chargeResult;
        if (selectedMeal[`${charge}Type`] === "percent") {
          chargeResult = roundToTwo((subtotal * selectedMeal[`${charge}Amount`]) / 100);
        } else if (forIndividualFriend) {
          chargeResult = roundToTwo(selectedMeal[`${charge}Amount`] / selectedMeal.friends.length);
        } else {
          chargeResult = selectedMeal[`${charge}Amount`];
        }
        return charge === "discount" ? -chargeResult : chargeResult;
      })
      .reduce((a, b) => a + b, 0);

  const roundToTwo = (num) => +(Math.round(num + "e+2") + "e-2");

  const getIndividualItems = (friend) => {
    return (
      <View style={styles.individualItemsContainer}>
        <Text style={styles.individualItems}>
          {friend.items.map((item) => (item.friends.length === 1 ? item.name : `${item.name} (shared)`)).join(", ")}
        </Text>
      </View>
    );
  };

  const getTotal = (amount) => {
    return amount + getAddedChargesSummed(amount);
  };

  const getSubTotal = () => {
    return selectedMeal.items.map((item) => roundToTwo(item.amount)).reduce((a, b) => a + b, 0);
  };

  return (
    <View>
      <View style={styles.totalsInfoContainer}>
        <Text style={styles.subTotalsInfoTitle}>Subtotal: £{getSubTotal().toFixed(2)}</Text>
        <Text style={styles.totalsInfoTitle}>Total: £{getTotal(getSubTotal()).toFixed(2)}</Text>
      </View>
      <View style={styles.totalsBreakdownContainer}>
        <FlatList
          data={["Service charge", "Tip", "Tax", "Discount"]}
          renderItem={({ item }) => getChargeText(item)}
          keyExtractor={(charge) => charge}
        />
        <FlatList
          data={selectedMeal.friends}
          renderItem={({ item }) => getFriendTotalsText(item)}
          keyExtractor={(friend) => friend._id.toString()}
        />
      </View>
    </View>
  );
};
