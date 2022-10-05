import React, { useState } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { useRealm } from "../createRealmContext";
import ItemComponent from "./itemComponent";
import AddItem from "./addItem";
import styles from "../common/styles";
import WhiteAddImage from "./whiteAddImage";
import NameDivvyInput from "./nameDivvyInput.js";

export default Items = ({
  navigation,
  selectedFriend,
  selectedMeal,
  setSelectedMeal,
}) => {
  const [itemModalVisible, setItemModalVisible] = useState(false);
  const [editName, setEditName] = useState(true);
  const realm = useRealm();

  const getMealNameOrEdit = () => {
    if (editName)
      return (
        <NameDivvyInput setEditName={setEditName} selectedMeal={selectedMeal} />
      );
    return (
      <View style={{ flexDirection: "row", height: 61 }}>
        <Text style={{ fontSize: 20 }}>{selectedMeal.name}</Text>
        <TouchableOpacity onPress={() => setEditName(true)}>
          <Text style={{ fontSize: 20 }}>✎</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.itemsContainer}>
      <View style={styles.mealHeader}>
        <TouchableOpacity onPress={() => navigation.navigate("Home Screen")}>
          <Text style={styles.mealScreenBackButton}>⬅ Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Totals Screen", { selectedMeal: selectedMeal })
          }
        >
          <Text style={styles.mealScreenTotalButton}>Total ➡️</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mealList}>
        {getMealNameOrEdit()}
        {/* <Text style={styles.mealScreenBackButton}>Divvy ✎</Text> */}
        <View style={styles.separator}></View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.addItemContainer}
          onPress={() => setItemModalVisible(true)}
        >
          <WhiteAddImage
            style={styles.addItemButton}
            selectedMeal={selectedMeal}
          />
          <Text style={styles.addItemText}> Add Item </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={true}
        persistentScrollbar={true}
        style={{ height: "60%" }}
        data={selectedMeal.items}
        renderItem={({ item }) => {
          return (
            <ItemComponent
              selectedFriend={selectedFriend}
              item={item}
              selectedMeal={selectedMeal}
              setSelectedMeal={setSelectedMeal}
            />
          );
        }}
        keyExtractor={(item) => item._id.toString()}
      />
      <AddItem
        itemModalVisible={itemModalVisible}
        setItemModalVisible={setItemModalVisible}
        selectedMeal={selectedMeal}
      />
    </View>
  );
};
