import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React, { useState } from "react";
import Realm from "realm";

const TaskSchema = {
  name: "Task",
  properties: {
    _id: "int",
    name: "string",
    status: "string?",
  },
  primaryKey: "_id",
};

// const CustomerSchema = {
//   name: "Customer",
//   properties: {
//     name: "String"
//   }
// }

(async () => {
  // use realm to interact with database
  const realm = await Realm.open({
    path: "myrealm",
    schema: [TaskSchema],
  });

  // ### write records to database
  // realm.write(() => {
  //   task1 = realm.create("Task", {
  //     _id: 1,
  //     name: "go grocery shopping",
  //     dateCreated: Date.now(),
  //     status: "Open",
  //   });
  // });
  //   task2 = realm.create("Task", {
  //     _id: 2,
  //     name: "go exercise",
  //     dateCreated: Date.now(),
  //     status: "Open",
  //   });
  //   console.log(`created two tasks: ${task1.name} & ${task2.name}`);
  // });

  // ### read records from database
  const tasks = realm.objects("Task");
  console.log(
    `The lists of tasks are: ${tasks.map((task) => {
      return task.name + " " + task._id + "\n\r";
    })}`
  );
  console.log(tasks[0]);

  // ### read ONE record from database
  // const myTask = realm.objectForPrimaryKey("Task", 1637096347792); // search for a realm object with a primary key that is an int.
  // console.log(`got task: ${myTask.name} & ${myTask._id}`);

  // ### modify ONE record from database
  // realm.write(() => {
  //   let myTask = realm.objectForPrimaryKey("Task", 1637096347792);
  //   console.log(`original task: ${myTask.name} & ${myTask._id} ${myTask.status}`);
  //   myTask.status = "Closed"
  // });

  // ### delete ONE record from database
  // realm.write(() => {
  //   try {
  //     let myTask = realm.objectForPrimaryKey("Task", 1637096312440);
  //     realm.delete(myTask);
  //     console.log("deleted task ");
  //     myTask = null;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });
})();

const App = () => {
  const [countOranges, setCountOranges] = useState(0);
  const [countApples, setCountApples] = useState(0);
  const [priceOfOranges, setPriceOfOranges] = useState(0);
  const [priceOfApples, setPriceOfApples] = useState(0);

  return (
    <View style={styles.container}>
      <Text></Text>
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

export default App;
