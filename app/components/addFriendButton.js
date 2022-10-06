import { View, Text, TouchableOpacity } from "react-native";
import WhiteAddImage from "./whiteAddImage";
import styles from "../common/styles";

export default AddFriendButton = ({ setModalVisible }) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          ...styles.button,
          ...styles.buttonOpen,
          ...styles.addFriendContainer,
          marginRight: 10,
        }}
        onPress={() => setModalVisible(true)}
      >
        <View style={styles.addFriendEmojiView}>
          <WhiteAddImage />
          <Text style={styles.addFriendEmojiText}>👪</Text>
        </View>
        <Text style={styles.addFriendText}>Add Friend</Text>
      </TouchableOpacity>
    </View>
  );
};
