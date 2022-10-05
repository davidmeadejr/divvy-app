import { View, Text, FlatList } from "react-native";
import styles from "./common/styles";
import { useQuery } from "./createRealmContext";

export default SavedMealsScreen = ({ navigation }) => {
  const result = useQuery("Meal");
  return (
    <View style={styles.container}>
      <Text>Saved Meals:</Text>
      <FlatList
        data={result}
        renderItem={({ item }) => <Text>{item.createdAt}</Text>}
        keyExtractor={(item) => item._id.toString()}
      />
    </View>
  );
};
