import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from "../common/styles";
import { useRealm } from "../createRealmContext";

const friendColours = [
  "#e6194B",
  "#3cb44b",
  "#ffe119",
  "#4363d8",
  "#f58231",
  "#42d4f4",
  "#f032e6",
  "#fabed4",
  "#469990",
  "#dcbeff",
  "#9A6324",
  "#fffac8",
  "#800000",
  "#aaffc3",
  "#000075",
  "#a9a9a9",
];
export default AddFriendScrollView = ({
  myStyle,
  selectedFriend,
  setSelectedFriend,
  selectedMeal,
  setSelectedMeal,
  handleSelectedFriendStyle,
}) => {
  const realm = useRealm();

  const handleLongPress = (item) => {
    console.log(item);
    if (selectedFriend && selectedFriend._id.toString() === item._id.toString())
      realm.write(() => {
        realm.delete(item);
      });
    setSelectedFriend(null);
    setSelectedMeal(realm.objectForPrimaryKey("Meal", selectedMeal._id));
  };

  return (
    <View style={{ flex: 1 }}>
      <View>
        <ScrollView horizontal>
          {selectedMeal.friends.map((item, index) => (
            <TouchableOpacity
              onPress={() => handleSelectedFriendStyle(item)}
              onLongPress={() => handleLongPress(item)}
              style={{
                borderWidth: myStyle[item._id.toString()] ? 5 : 2,
                borderColor: friendColours[index],
                marginRight: myStyle[item._id.toString()] ? 13 : 16,
                borderRadius: 10,
                padding: myStyle[item._id.toString()] ? 7 : 10,
              }}
              key={item._id.toString()}
            >
              <View>
                <Text
                  style={{
                    fontWeight: myStyle[item._id.toString()]
                      ? "bold"
                      : "normal",
                    color: "#fff",
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
