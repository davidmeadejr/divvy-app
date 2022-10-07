import React, { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import styles from "../common/styles";

export default Totals = ({ selectedMeal }) => {
  const getChargeText = (charge) => {
    const chargeName = charge;
    if (selectedMeal[`${chargeName}Amount`]) {
      let chargeAmount = selectedMeal[`${chargeName}Amount`];
      if (selectedMeal[`${chargeName}Type`] === "percent")
        chargeAmount = getPercentageForString(
          selectedMeal[`${chargeName}Amount`]
        );
      return chargeAmount;
    }
  };

  const getPercentageForString = (charge) => (getSubTotal() * charge) / 100;

  const getIndividualTotal = (friend) => {
    const itemsTotal = friend.items
      .map((item) => item.amount / item.friends.length)
      .reduce((a, b) => a + b, 0);
    return itemsTotal + getAddedChargesSummed(itemsTotal, true);
  };

  const getAddedChargesSummed = (subtotal, forIndividualFriend) =>
    ["serviceCharge", "tip", "discount", "tax"]
      .map((charge) => {
        let chargeResult;
        if (selectedMeal[`${charge}Type`] === "percent") {
          chargeResult = (subtotal * selectedMeal[`${charge}Amount`]) / 100;
        } else if (forIndividualFriend) {
          chargeResult =
            selectedMeal[`${charge}Amount`] / selectedMeal.friends.length;
        } else {
          chargeResult = selectedMeal[`${charge}Amount`];
        }
        return charge === "discount" ? -chargeResult : chargeResult;
      })
      .reduce((a, b) => a + b, 0);

  const roundToTwo = (num) => +(Math.round(num + "e+2") + "e-2");
  const getIndividualItems = (friend) => {
    return friend.items
      .map((item) =>
        item.friends.length === 1 ? item.name : `${item.name} (shared)`
      )
      .join(", ");
  };

  const getTotal = (amount) => {
    return roundToTwo(
      roundToTwo(amount) + roundToTwo(getAddedChargesSummed(amount))
    );
  };

  const getSubTotal = () => {
    return roundToTwo(
      selectedMeal.items
        .map((item) => roundToTwo(item.amount))
        .reduce((a, b) => roundToTwo(a) + roundToTwo(b), 0)
    );
  };

  const returnAllTotals = () => {
    const amounts = {
      subTotal: getSubTotal(),
      total: getTotal(getSubTotal()),
    };
    ["serviceCharge", "tip", "tax", "discount"].forEach((charge) => {
      amounts[charge] = roundToTwo(getChargeText(charge));
    });
    selectedMeal.friends.forEach(
      (friend) =>
        (amounts[friend._id.toString()] = roundToTwo(
          getIndividualTotal(friend)
        ))
    );
    if (
      !!selectedMeal.friends.length &&
      selectedMeal.items.map((item) => item.friends.length).filter(Boolean)
        .length === selectedMeal.items.length
    ) {
      const friendsTotal = selectedMeal.friends
        .map((friend) => amounts[friend._id.toString()])
        .reduce((a, b) => a + b, 0);
      if (friendsTotal < amounts.total)
        amounts[selectedMeal.friends[0]._id.toString()] += 0.01;
    }

    const charges = ["serviceCharge", "tip", "tax", "discount"];
    return (
      <View>
        <View style={styles.totalsInfoContainer}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              color: "#fff",
            }}
          >
            <Text style={styles.subTotalsInfoTitle}>
              Subtotal: £{amounts.subTotal.toFixed(2)}
            </Text>
            <Text style={styles.totalsInfoTitle}>
              Total: £{amounts.total.toFixed(2)}
            </Text>
          </View>
          <FlatList
            data={["Service charge", "Tip", "Tax", "Discount"]}
            renderItem={({ item, index }) => {
              const chargeText = charges[index];
              if (amounts[chargeText])
                return (
                  <Text
                    style={{ fontSize: 16, color: "#fff" }}
                  >{`${item}: £${amounts[chargeText].toFixed(2)}`}</Text>
                );
            }}
            keyExtractor={(charge) => charge}
          />
        </View>
        <FlatList
          style={{ height: getFlatListHeight() }}
          data={selectedMeal.friends}
          renderItem={({ item }) => {
            return (
              <View>
                <View style={styles.totalsBreakdownContainer}>
                  <Text style={styles.totalsItemName}>{item.name}</Text>
                  <Text style={styles.totalsItemAmount}>
                    £{amounts[item._id.toString()].toFixed(2)}
                  </Text>
                </View>
                <Text
                  style={{
                    marginBottom: 20,
                    color: "white",
                  }}
                >
                  {getIndividualItems(item)}
                </Text>
              </View>
            );
          }}
          keyExtractor={(friend) => friend._id.toString()}
        />
      </View>
    );
  };

  const getFlatListHeight = () => {
    console.log(selectedMeal);
    const heights = ["69%", "66%", "62%", "59%", "55%"];
    const heightsIdx = [
      selectedMeal.serviceChargeAmount,
      selectedMeal.tipAmount,
      selectedMeal.taxAmount,
      selectedMeal.discountAmount,
    ].filter(Boolean).length;
    console.log(heightsIdx);
    return heights[heightsIdx];
  };

  return <View>{returnAllTotals()}</View>;
};
