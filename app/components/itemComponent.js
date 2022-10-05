import React from "react";
import { useRealm } from "../createRealmContext";
import { Text, View, Pressable, Alert, Image } from "react-native";
import styles from "../common/styles";

export default ItemComponent = ({ selectedFriend, item, selectedMeal, setSelectedMeal }) => {
  const realm = useRealm();
  const itemFriends = (item) => {
    if (!item.friends.length) return [];
    return item.friends.map((friend) => friend.name).join(", ");
  };

  const handleLongPress = (item) => {
    realm.write(() => {
      realm.delete(item);
    });
    setSelectedMeal(realm.objectForPrimaryKey("Meal", selectedMeal._id));
  };

  const itemOnPressAddFriend = (item) => {
    if (selectedFriend) {
      const friendIdx = item.friends.map((friend) => friend._id.toString()).indexOf(selectedFriend._id.toString());
      realm.write(() => {
        friendIdx === -1 ? item.friends.push(selectedFriend) : item.friends.splice(friendIdx, 1);
      });
      setSelectedMeal(realm.objectForPrimaryKey("Meal", selectedMeal._id));
    }
  };

  return (
    <View>
      <Pressable
        style={styles.itemContainer}
        onPress={() => itemOnPressAddFriend(item)}
        // onLongPress={() => handleLongPress(item)}
      >
        <View style={styles.itemNameContainer}>
          <Text style={styles.redCancel} onLongPress={() => handleLongPress(item)}>
            ❌
          </Text>
          <Text style={styles.itemName} onLongPress={() => handleLongPress(item)}>
            {/* <Image style={styles.redCancel} source={require("../../assets/red-x.png")} /> */}
            {item.name}
          </Text>
        </View>
        <View style={styles.priceAndFriendsContainer}>
          <Text style={styles.amount}>£{item.amount.toFixed(2)}</Text>
          <Text style={styles.friend}>{itemFriends(item)}</Text>
        </View>
      </Pressable>
    </View>
  );
};

// export default ItemComponent;
