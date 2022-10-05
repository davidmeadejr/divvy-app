import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
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
      <FlatList
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
      <View>
        <TouchableOpacity
          style={styles.addItemContainer}
          onPress={() => setItemModalVisible(true)}
        >
          {/* <Text style={styles.addItemButton} title="Add Item" onPress={() => setItemModalVisible(true)}>
          Add Item
        </Text> */}
          {/* <Image style={styles.addItemButton} source={require("../../assets/white-plus-sign.png")} /> */}
          <WhiteAddImage
            style={styles.addItemButton}
            selectedMeal={selectedMeal}
          />
          <Text style={styles.addItemText}> Add Item </Text>
        </TouchableOpacity>
      </View>
      <AddItem
        itemModalVisible={itemModalVisible}
        setItemModalVisible={setItemModalVisible}
        selectedMeal={selectedMeal}
      />
      {/* <AddServiceCharge
        selectedMeal={selectedMeal}
        serviceChargeModalVisible={serviceChargeModalVisible}
        setServiceChargeModalVisible={setServiceChargeModalVisible}
      />
      <Button title="Add service charge" onPress={() => setServiceChargeModalVisible(true)}></Button>
      <AddTip selectedMeal={selectedMeal} tipModalVisible={tipModalVisible} setTipModalVisible={setTipModalVisible} />
      <Button title="Add tip" onPress={() => setTipModalVisible(true)}></Button> */}
      {/* <Totals selectedMeal={selectedMeal} /> */}
      {/* <Button title="Back" onPress={() => setSelectedMeal()} /> */}
    </View>
  );
};
