import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Items = () => {
  return (
    <View>
      <Text style={styles.itemsContainer}>Items</Text>
      <Text style={styles.item}>Spag Bol: £5.00</Text>
      <Text style={styles.item}>Lasagne: £4.00</Text>
      <Text style={styles.item}>Ice cream: £4.00</Text>
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
