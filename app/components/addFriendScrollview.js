import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "../common/styles";
import { useRealm } from "../createRealmContext";
import WhiteAddImage from "./whiteAddImage";

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
  setMyStyle,
  setModalVisible,
  selectedFriend,
  setSelectedFriend,
  selectedMeal,
  setSelectedMeal,
}) => {
  const realm = useRealm();

  const handleClick = (item) => {
    const itemId = item._id.toString();
    [...Object.keys(myStyle), itemId].forEach(
      (key) => (myStyle[key] = key === itemId)
    );
    setMyStyle(myStyle);
    setSelectedFriend(item);
  };

  const handleLongPress = (item) => {
    if (selectedFriend && selectedFriend._id.toString() === item._id.toString())
      setSelectedFriend();
    realm.write(() => {
      realm.delete(item);
    });
    setSelectedMeal(realm.objectForPrimaryKey("Meal", selectedMeal._id));
  };
  return (
    <View style={styles.openModalContainer}>
      <TouchableOpacity
        style={[
          styles.button,
          styles.buttonOpen,
          styles.addFriendContainer,
          { marginRight: 10 },
        ]}
        onPress={() => setModalVisible(true)}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          i
        >
          <WhiteAddImage />
          <Text
            style={{
              textAlign: "center",
              marginLeft: 10,
              fontSize: 32,
            }}
          >
            👪
          </Text>
        </View>
        <Text style={styles.addFriendText}>Add Friend</Text>
      </TouchableOpacity>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        {selectedMeal.friends.map((item, index) => (
          <TouchableOpacity
            // When a users presses a name.
            // The function handleClick(index) is called.
            // Which handles the toggle functionality of the background colours.
            onPress={() => handleClick(item, index)}
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
            {/* The names added by the users are then placed at the bottom of the screen as a horizontal list. */}
            <View>
              <Text
                style={{
                  fontWeight: myStyle[item._id.toString()] ? "bold" : "normal",
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
  );
};
