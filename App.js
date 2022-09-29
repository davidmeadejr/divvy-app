import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState, useCallback } from "react";
import Realm from "realm";
import {
  useQuery,
  useRealm,
  RealmProvider,
} from "./components/createRealmContext";
import { Task } from "./models/Task";

const App = () => {
  const realm = useRealm();
  const result = useQuery("Task");

  const handleAddTask = () => {
    try {
      realm.write(() => {
        const task = realm.create("Task", new Task({ name: "New entry" }));
      });
      console.log(result);
      // Alert.alert("Success Creating New Task");
    } catch (e) {
      Alert.alert("Error Creating Task", e.message);
    }
  };

  const [countOranges, setCountOranges] = useState(0);
  const [countApples, setCountApples] = useState(0);
  const [priceOfOranges, setPriceOfOranges] = useState(0);
  const [priceOfApples, setPriceOfApples] = useState(0);
  return (
    // <RealmProvider>
    <View style={styles.container}>
      <Button
        title="Add new entry"
        onPress={() => {
          handleAddTask();
        }}
      ></Button>
      <Button
        title="Delete all"
        onPress={() => {
          realm.write(() => {
            realm.delete(
              realm.objects("Task").filtered("name == $0", "New entry")
            );
          });
        }}
      ></Button>
      {result.map((task) => {
        return (
          <Text>
            {task.name} {task._id.toString()}
          </Text>
        );
      })}
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
    // </RealmProvider>
  );
};

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
export default function AppWrapper() {
  return (
    <RealmProvider>
      <App />
    </RealmProvider>
  );
}
// export default App;
