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
    navigation.navigate("Home Screen", {
      // selectedMeal: selectedMeal,
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
          {/* <TextInput style={styles.divvyTitle} placeholder="Name" onChangeText={(name) => setDivvyName(name)} /> */}
          <Text style={styles.divvyTitle}>Total 🧾</Text>
          <View style={styles.separator}></View>
        </View>
        {/* <View style={styles.totalsInfoContainer}> */}
        {/* <Text style={styles.totalsInfoTitle}>Subtotal</Text> */}
        {/* <Text style={styles.totalsInfoTitle}>Total</Text> */}
        {/* </View> */}

        {/* <View style={styles.separator}></View> */}
        <Totals selectedMeal={selectedMeal} />
        {/* service charge view */}
        <View style={styles.additionalCostsContainer}>
          <View style={styles.individualCostContainer}>
            <TouchableOpacity onPress={() => setServiceChargeModalVisible(true)}>
              <Text style={styles.additionalCostTitle}>Service Charge</Text>
            </TouchableOpacity>
            <Text style={styles.individualCostAmount}>{getAddedCostAmountOrPercentage("serviceCharge")}</Text>
          </View>
          {/* tip view */}
          <View style={styles.individualCostContainer}>
            <TouchableOpacity onPress={() => setTipModalVisible(true)}>
              <Text style={styles.additionalCostTitle}>Tip</Text>
            </TouchableOpacity>
            <Text style={styles.individualCostAmount}>{getAddedCostAmountOrPercentage("tip")}</Text>
          </View>
          {/* tax view */}
          <View style={styles.individualCostContainer}>
            <TouchableOpacity
              onPress={() => {
                setTaxModalVisible(true);
              }}
            >
              <Text style={styles.additionalCostTitle}>Tax</Text>
            </TouchableOpacity>
            <Text style={styles.individualCostAmount}>{getAddedCostAmountOrPercentage("tax")}</Text>
          </View>
          {/* discount view */}
          <View style={styles.individualCostContainer}>
            <TouchableOpacity
              onPress={() => {
                setDiscountModalVisible(true);
              }}
            >
              <Text style={styles.additionalCostTitle}>Discount</Text>
            </TouchableOpacity>
            <Text style={styles.individualCostAmount}>{getAddedCostAmountOrPercentage("discount")}</Text>
          </View>
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
