import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

const Items = () => {
  return <Text style={styles.item}>Items</Text>;
};

const styles = StyleSheet.create({
  item: {
    display: "flex",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Items;
