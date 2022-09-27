import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [countOranges, setCountOranges] = useState(0);
  const [countApples, setCountApples] = useState(0);
  const [priceOfOranges, setPriceOfOranges] = useState(0);
  const [priceOfApples, setPriceOfApples] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.orangeEmoji}>🍊</Text>
      <Text style={styles.titleText}>£0.30p each{"\n"}</Text>
      <Text style={styles.appleEmoji}>🍎</Text>
      <Text style={styles.titleText}>£0.50p each{"\n"}</Text>
      <Text style={styles.peopleContainer}>
        <Text style={styles.mary}> 👩</Text>
        <Text style={styles.titleText}>Mary</Text>
        <Text style={styles.joseph}> 👨</Text>
        <Text style={styles.titleText}>Joseph</Text>
      </Text>
      <Button
        title="Add Orange for Mary"
        onPress={() => {
          setCountOranges(countOranges + 1);
          setPriceOfOranges(priceOfOranges + 0.3);
        }}
      />
      <Button
        title="Sell Mary's Oranges"
        onPress={() => {
          setCountOranges(0);
          setPriceOfOranges(0);
        }}
      />
      <Text>No. of Oranges: {countOranges}</Text>
      <Text>Total Price: £{priceOfOranges.toFixed(2)} </Text>
      <Button
        title="Add Apple for Joseph"
        onPress={() => {
          setCountApples(countApples + 1);
          setPriceOfApples(priceOfApples + 0.5);
        }}
      />
      <Button
        title="Sell Joseph's Apple"
        onPress={() => {
          setCountApples(0);
          setPriceOfApples(0);
        }}
      />

      <Text>No. of Apples: {countApples}</Text>
      <Text>Total Price: £{priceOfApples.toFixed(2)} </Text>

      {/* <Text>Total: 0</Text>
      <Text style={styles.appleButton}> Add Apple for Mary</Text>
      <Text style={styles.orangeButton}> Add Orange for Joseph</Text>
      <Text style={styles.appleButton}> Add Apple for Joseph</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 50,
  },
  orangeEmoji: {
    fontSize: 60,
  },
  appleEmoji: {
    fontSize: 60,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  peopleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  mary: {
    justifyContent: "center",
    fontSize: 60,
  },
  joseph: {
    fontSize: 60,
  },
});
