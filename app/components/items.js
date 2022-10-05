import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useRealm } from "../createRealmContext";
import ItemComponent from "./itemComponent";
import AddItem from "./addItem";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "../common/styles";
import { SvgUri } from "react-native-svg";
import WhiteAddImage from "./whiteAddImage";
import NameDivvyInput from "./nameDivvyInput.js";

/*
 * The component which handles the functionality divvying out meals.
 */
const Stack = createNativeStackNavigator();

export default Items = ({
  navigation,
  selectedFriend,
  selectedMeal,
  setSelectedMeal,
}) => {
  const [itemModalVisible, setItemModalVisible] = useState(false);
  const [serviceChargeModalVisible, setServiceChargeModalVisible] =
    useState(false);
  const [tipModalVisible, setTipModalVisible] = useState(false);

  const realm = useRealm();
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
        <NameDivvyInput />
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
