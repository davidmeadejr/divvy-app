// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   SafeAreaVie,
//   FlatList,
//   Modal,
//   Alert,
//   Pressable,
//   StyleSheet,
// } from "react-native";

// const AddFriendInput = () => {
//   const [data, setData] = useState([{}]);
//   const [name, setName] = useState("");
//   return (
//     <>
//       <TextInput
//         style={{ backgroundColor: "white", padding: 10, marginTop: 10 }}
//         onChangeText={(name) => setName(name)}
//         placeholder={"enter name"}
//         value={name}
//       />
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => {
//           if (name) setData([...data, { name: name }]);
//           console.log(`${name} has been added.`);
//           setName("");
//         }}
//       >
//         <Text style={styles.textStyle}>➕</Text>
//       </Pressable>
//       <FlatList keyExtractor={(item, index) => index} data={data} renderItem={({ item }) => <Text>{item.name}</Text>} />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: "#F194FF",
//   },
// });
// export default AddFriendInput;
