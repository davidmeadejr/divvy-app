import React from "react";
import { useRealm } from "../createRealmContext";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../common/styles";

export default ItemComponent = ({
  selectedFriend,
  item,
  selectedMeal,
  setSelectedMeal,
}) => {
  const realm = useRealm();

  const itemFriends = (item) => {
    if (!item.friends.length) return [];
    return item.friends.map((friend) => friend.name).join(", ");
  };

  const handleDeleteItem = (item) => {
    realm.write(() => {
      realm.delete(item);
    });

    setSelectedMeal(realm.objectForPrimaryKey("Meal", selectedMeal._id));
  };

  const itemOnPressAddFriend = (item) => {
    if (selectedFriend) {
      const friendIdx = item.friends
        .map((friend) => friend._id.toString())
        .indexOf(selectedFriend._id.toString());
      realm.write(() => {
        friendIdx === -1
          ? item.friends.push(selectedFriend)
          : item.friends.splice(friendIdx, 1);
      });

      setSelectedMeal(realm.objectForPrimaryKey("Meal", selectedMeal._id));
    }
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <TouchableOpacity onPress={() => itemOnPressAddFriend(item)}>
        <View style={styles.itemContainer}>
          <View style={styles.itemNameContainer}>
            <Text
              style={styles.redCancel}
              onPress={() => handleDeleteItem(item)}
              onLongPress={() => handleDeleteItem(item)}
            >
              ❌
            </Text>
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
          {/* <View style={styles.priceAndFriendsContainer}> */}
          <Text style={styles.amount}>£{item.amount.toFixed(2)}</Text>
        </View>
        <Text style={styles.friend}>{itemFriends(item)}</Text>
      </TouchableOpacity>
    </View>
  );
};

// export default ItemComponent;
