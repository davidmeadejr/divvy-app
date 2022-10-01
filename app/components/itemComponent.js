import React from "react";
import { Text, View, Pressable } from "react-native";

export default ItemComponent = ({ itemOnPressAddFriend, item }) => {
  const itemFriends = (item) => {
    if (!item.friends.length) return [];
    return item.friends.map((friend) => friend.name).join(", ");
  };

  return (
    <View>
      <Pressable onPress={() => itemOnPressAddFriend(item)}>
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
