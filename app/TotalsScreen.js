import { View, Text, Button, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import styles from "./common/styles";
import Totals from "./components/totals";
import ValueModal from "./components/valueModal";

export default TotalsScreen = ({ navigation, route }) => {
  const [selectedMeal, setSelectedMeal] = useState(route.params.selectedMeal);
  const [serviceChargeModalVisible, setServiceChargeModalVisible] = useState(false);
  const [tipModalVisible, setTipModalVisible] = useState(false);
  const [discountModalVisible, setDiscountModalVisible] = useState(false);
  const [taxModalVisible, setTaxModalVisible] = useState(false);

  const handleItemsButtonPress = () => {
    navigation.navigate("Meal Screen", {
      selectedMeal: selectedMeal,
    });
  };

  const getAddedCostAmountOrPercentage = (addedCost, name) => {
    if (selectedMeal[`${addedCost}Type`] === "percent") return `${selectedMeal[`${addedCost}Amount`]}%`;
    return `£${selectedMeal[`${addedCost}Amount`].toFixed(2)}`;
  };

  return (
    <>
      <View style={styles.totalScreenContainer}>
        {/* <TouchableOpacity onPress={handleItemsButtonPress}>
          <Text style={styles.totalsScreenBackButton}>🏠</Text>
        </TouchableOpacity>

        <TextInput style={styles.divvyTitle} placeholder="Name" onChangeText={(name) => setDivvyName(name)} /> */}
        <View style={styles.totalsHeader}>
          <TouchableOpacity onPress={handleItemsButtonPress}>
            <Text style={styles.totalsScreenBackButton}>🏠</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divvyTitleContainer}>
          <TextInput style={styles.divvyTitle} placeholder="Name" onChangeText={(name) => setDivvyName(name)} />
          <View style={styles.separator}></View>
        </View>
        {/* <View style={styles.totalsInfoContainer}> */}
        {/* <Text style={styles.totalsInfoTitle}>Subtotal</Text> */}
        {/* <Text style={styles.totalsInfoTitle}>Total</Text> */}
        {/* </View> */}

        <Totals selectedMeal={selectedMeal} />
        {/* service charge view */}
        <View>
          <Button title="Service Charge" onPress={() => setServiceChargeModalVisible(true)} />
          <Text>{getAddedCostAmountOrPercentage("serviceCharge")}</Text>
        </View>
        {/* tip view */}
        <View>
          <Button title="Tip" onPress={() => setTipModalVisible(true)} />
          <Text>{getAddedCostAmountOrPercentage("tip")}</Text>
        </View>
        {/* tax view */}
        <View>
          <Button
            title="Tax"
            onPress={() => {
              setTaxModalVisible(true);
            }}
          />
          <Text>{getAddedCostAmountOrPercentage("tax")}</Text>
        </View>
        {/* discount view */}
        <View>
          <Button
            title="Discount"
            onPress={() => {
              setDiscountModalVisible(true);
            }}
          />
          <Text>{getAddedCostAmountOrPercentage("discount")}</Text>
        </View>
        {/* service charge value modal */}
        <ValueModal
          valueModalVisible={serviceChargeModalVisible}
          setValueModalVisible={setServiceChargeModalVisible}
          selectedMeal={selectedMeal}
          setSelectedMeal={setSelectedMeal}
          modalType={"serviceCharge"}
        />
        {/* tip value modal */}
        <ValueModal
          valueModalVisible={tipModalVisible}
          setValueModalVisible={setTipModalVisible}
          selectedMeal={selectedMeal}
          setSelectedMeal={setSelectedMeal}
          modalType={"tip"}
        />
        {/* discount value modal */}
        <ValueModal
          valueModalVisible={discountModalVisible}
          setValueModalVisible={setDiscountModalVisible}
          selectedMeal={selectedMeal}
          setSelectedMeal={setSelectedMeal}
          modalType={"discount"}
        />
        {/* tax value modal */}
        <ValueModal
          valueModalVisible={taxModalVisible}
          setValueModalVisible={setTaxModalVisible}
          selectedMeal={selectedMeal}
          setSelectedMeal={setSelectedMeal}
          modalType={"tax"}
        />
      </View>
    </>
  );
};
