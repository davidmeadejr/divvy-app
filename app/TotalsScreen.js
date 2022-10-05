import { View, Text, Button } from "react-native";
import { useState } from "react";
import styles from "./common/styles";
import Totals from "./components/totals";
import ValueModal from "./components/valueModal";

export default TotalsScreen = ({ navigation, route }) => {
  const [selectedMeal, setSelectedMeal] = useState(route.params.selectedMeal);
  const [serviceChargeModalVisible, setServiceChargeModalVisible] =
    useState(false);
  const [tipModalVisible, setTipModalVisible] = useState(false);
  const [discountModalVisible, setDiscountModalVisible] = useState(false);
  const [taxModalVisible, setTaxModalVisible] = useState(false);

  const handleItemsButtonPress = () => {
    navigation.navigate("Meal Screen", {
      selectedMeal: selectedMeal,
    });
  };

  return (
    <View style={styles.container}>
      <Button title="<- Items" onPress={handleItemsButtonPress} />

      <Totals selectedMeal={selectedMeal} />
      <View>
        <Button
          title="Service Charge"
          onPress={() => setServiceChargeModalVisible(true)}
        />
        <Text>{selectedMeal.serivceChargeAmount + "%"}</Text>
      </View>
      <View>
        <Button title="Tip" onPress={() => setTipModalVisible(true)} />
        <Text>{selectedMeal.tipAmount + "%"}</Text>
      </View>
      <View>
        <Button
          title="Discount"
          onPress={() => {
            setDiscountModalVisible(true);
          }}
        />
        <Text>0%</Text>
      </View>
      <View>
        <Button
          title="Tax"
          onPress={() => {
            setTaxModalVisible(true);
          }}
        />
        <Text>0%</Text>
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
  );
};
