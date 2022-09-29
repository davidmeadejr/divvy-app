import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";

const AddFriendFooter = () => {
  const [data, setData] = useState([{}]);
  const [myStyle, setMyStyle] = useState(false);

  const handleClick = (index) => {
    setMyStyle((prevState) => ({
      ...myStyle,
      [index]: !prevState[index],
    }));
  };

  return (
    <View>
      {/* <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>➕</Text>
      </Pressable> */}
      {data.map((item, index) => (
        <TouchableOpacity
          onPress={() => handleClick(index)}
          style={{
            backgroundColor: myStyle[`${index}`] ? "#2196F3" : "white",
            marginRight: myStyle[`${index}`] ? 16 : 16,
            borderRadius: myStyle[`${index}`] ? 10 : 10,
            padding: myStyle[`${index}`] ? 10 : 5,
          }}
          key={index}
        >
          <View horizontal keyExtractor={(item, index) => index} data={data} key={index}>
            <Text>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default AddFriendFooter;
