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

  return (
    <View style={styles.container}>
      <Button title="<- Items" onPress={handleItemsButtonPress} />
      <Button
        title="Service Charge"
        onPress={() => setServiceChargeModalVisible(true)}
      />
      <Button title="Tip" onPress={() => setTipModalVisible(true)} />
      <Totals selectedMeal={selectedMeal} />
      <AddServiceCharge
        serviceChargeModalVisible={serviceChargeModalVisible}
        setServiceChargeModalVisible={setServiceChargeModalVisible}
      />
      <AddTip
        tipModalVisible={tipModalVisible}
        setTipModalVisible={setTipModalVisible}
      />
    </View>
  );
};
