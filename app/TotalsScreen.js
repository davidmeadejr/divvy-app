import {
  View,
  Text,
  Image,
  ImageBackground,
  Button,
  TouchableHighlight,
} from "react-native";
import { useState } from "react";
import styles from "./common/styles";
import Totals from "./components/totals";
import AddServiceCharge from "./components/addServiceCharge";
import AddTip from "./components/addTip";

export default TotalsScreen = ({ navigation, route }) => {
  const [selectedMeal, setSelectedMeal] = useState(route.params.selectedMeal);
  const [serviceChargeModalVisible, setServiceChargeModalVisible] =
    useState(false);
  const [tipModalVisible, setTipModalVisible] = useState(false);

  const handleItemsButtonPress = () => {
    navigation.navigate("Meal Screen", {
      selectedMeal: selectedMeal,
    });
  };

  const getZeroOrAmountAsPercentage = (amountType) => {
    return !selectedMeal[amountType] ? "0%" : selectedMeal[amountType] + "%";
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
            // discount modal doesn't exist yet
          }}
        />
        <Text>0%</Text>
      </View>
      <View>
        <Button
          title="Tax"
          onPress={() => {
            // tax modal doens't exist yet
          }}
        />
        <Text>0%</Text>
      </View>
      <AddServiceCharge
        serviceChargeModalVisible={serviceChargeModalVisible}
        setServiceChargeModalVisible={setServiceChargeModalVisible}
        selectedMeal={selectedMeal}
        setSelectedMeal={setSelectedMeal}
      />
      <AddTip
        tipModalVisible={tipModalVisible}
        setTipModalVisible={setTipModalVisible}
        selectedMeal={selectedMeal}
        setSelectedMeal={setSelectedMeal}
      />
    </View>
  );
};
