import React from "react";
import { useRealm } from "../createRealmContext";
import { Text, View, Pressable, Alert } from "react-native";

export default ItemComponent = ({
  selectedFriends,
  item,
  selectedMeal,
  setSelectedMeal,
}) => {
  const realm = useRealm();
  const itemFriends = (item) => {
    if (!item.friends.length) return [];
    return item.friends.map((friend) => friend.name).join(", ");
  };

  const handleLongPress = (item) => {
    realm.write(() => {
      realm.delete(item);
    });
  };

  const itemOnPressAddFriend = (item) => {
    selectedFriends.forEach((selectedFriend) => {
      const friendIdx = item.friends
        .map((friend) => friend._id.toString())
        .indexOf(selectedFriend._id.toString());
      realm.write(() => {
        friendIdx === -1
          ? item.friends.push(selectedFriend)
          : item.friends.splice(friendIdx, 1);
      });
    });
    setSelectedMeal(realm.objectForPrimaryKey("Meal", selectedMeal._id));
  };

  return (
    <View>
      <Pressable
        onPress={() => itemOnPressAddFriend(item)}
        onLongPress={() => handleLongPress(item)}
      >
        <Text
          style={{
            backgroundColor: "#2196F3",
            marginRight: 16,
            marginTop: 5,
            marginBottom: 5,
            borderRadius: 10,
            padding: 10,
          }}
        >
          {item.name} £{item.amount.toFixed(2)} {itemFriends(item)}
        </Text>
      </Pressable>
    </View>
  );
};

// export default ItemComponent;
