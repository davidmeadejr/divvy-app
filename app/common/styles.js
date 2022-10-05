import { StyleSheet } from "react-native-web";

export default styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: "#4B23F3",
    // backgroundColor: "#333",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    position: "relative",
  },

  cancelButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    position: "relative",
    marginRight: 16,
  },

  cancelButtonClose: {
    // backgroundColor: "#fff",
  },
  modalAddButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    // backgroundColor: "#F194FF",
  },

  modalAddButtonOpen: {
    // backgroundColor: "#fff",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  openModalContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  modalButtonContainer: {
    display: "flex",
    flexDirection: "row",
  },
  container: {
    flex: 1,
    marginTop: 50,
    marginRight: 16,
    marginBottom: 16,
    marginLeft: 16,
  },

  usersContainer: {
    position: "absolute",
    bottom: -40,
    marginTop: 50,
    marginRight: 16,
    marginBottom: 16,
    marginLeft: 16,
  },

  /* *************************************************** */

  /*
   * App.js styles
   */

  /* *************************************************** */

  /*
   * HomeScreen
   */

  homeScreenBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  homeScreenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  divvyLogo: {
    width: 350,
    height: 350,
    backgroundColor: "rgb(75,35,243,0.3)",
    marginTop: -320,
  },

  newMealsButton: {
    marginBottom: 32,
  },

  newMealsButtonText: {
    fontSize: 32,
    color: "#fff",
    borderWidth: 2,
    borderColor: "#4B23F3",
    borderRadius: 10,
    backgroundColor: "#4B23F3",
    padding: 10,
    overflow: "hidden",
    fontWeight: "bold",
  },

  myMealsButtonText: {
    fontSize: 32,
    color: "#fff",
    borderWidth: 2,
    borderColor: "#4B23F3",
    borderRadius: 10,
    backgroundColor: "#4B23F3",
    paddingTop: 10,
    paddingBottom: 10,
    overflow: "hidden",
    fontWeight: "bold",
    paddingLeft: 20,
    paddingRight: 20,
  },

  /*
   * CameraScreen
   */

  cameraScreenBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  cameraScreenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  cameraScreenBackButton: {
    fontSize: 32,
    color: "#fff",
    borderWidth: 2,
    borderColor: "#4B23F3",
    borderRadius: 10,
    backgroundColor: "#4B23F3",
    paddingTop: 10,
    paddingBottom: 10,
    overflow: "hidden",
    fontWeight: "bold",
    paddingLeft: 20,
    paddingRight: 20,
  },

  createButton: {
    fontSize: 32,
    color: "#fff",
    borderWidth: 2,
    borderColor: "#4B23F3",
    borderRadius: 10,
    backgroundColor: "#4B23F3",
    paddingTop: 10,
    paddingBottom: 10,
    overflow: "hidden",
    fontWeight: "bold",
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 30,
  },

  uploadButton: {
    fontSize: 32,
    color: "#fff",
    borderWidth: 2,
    borderColor: "#4B23F3",
    borderRadius: 10,
    backgroundColor: "#4B23F3",
    paddingTop: 10,
    paddingBottom: 10,
    overflow: "hidden",
    fontWeight: "bold",
    paddingLeft: 20,
    paddingRight: 20,
  },

  cameraEmojiButton: {
    fontSize: 32,
    borderWidth: 2,
    borderColor: "#4B23F3",
    borderRadius: 10,
    backgroundColor: "#4B23F3",
    paddingTop: 10,
    paddingBottom: 10,
    overflow: "hidden",
    fontWeight: "bold",
    paddingLeft: 20,
    paddingRight: 20,
  },

  /*
   * Save Photo Screen
   */
  savePhotoContainer: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#333",
    flexDirection: "row",
    paddingLeft: 16,
    paddingRight: 16,
  },

  retakePhotoButton: {
    fontSize: 20,
    color: "#fff",
    borderWidth: 2,
    borderColor: "#4B23F3",
    borderRadius: 10,
    backgroundColor: "#4B23F3",
    padding: 8,
    overflow: "hidden",
    marginTop: 40,
  },

  usePhotoButton: {
    fontSize: 20,
    color: "#fff",
    borderWidth: 2,
    borderColor: "#4B23F3",
    borderRadius: 10,
    backgroundColor: "#4B23F3",
    padding: 8,
    overflow: "hidden",
    marginTop: 40,
  },

  photoScreenshotContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
  },

  photoScreenshot: {
    color: "#fff",
  },

  /*
   * Meal Screen
   */

  mealScreenContainer: {
    flex: 1,
    backgroundColor: "#333",
    // marginTop: 50,
    // marginRight: 16,
    // marginBottom: 16,
    // marginLeft: 16,
    // alignItems: "center",
  },

  /* *************************************************** */

  /*
   * items.js styles
   */

  /* *************************************************** */

  itemsContainer: {
    display: "flex",
    backgroundColor: "#333",
    marginTop: 40,
    alignItems: "center",
  },

  mealScreenBackButton: {
    fontSize: 32,
    color: "#fff",
    // borderWidth: 2,
    // borderColor: "#4B23F3",
    // borderRadius: 10,
    // backgroundColor: "#4B23F3",
    paddingTop: 10,
    paddingBottom: 10,
    // overflow: "hidden",
    fontWeight: "bold",
    paddingLeft: 15,
    // paddingRight: 10,
    width: 215,
    marginBottom: 10,
    // marginRight: 30,
  },

  mealScreenTotalButton: {
    fontSize: 32,
    color: "#fff",
    // borderWidth: 2,
    // borderColor: "#4B23F3",
    // borderRadius: 10,
    // backgroundColor: "#4B23F3",
    paddingTop: 10,
    paddingBottom: 10,
    // overflow: "hidden",
    fontWeight: "bold",
    paddingLeft: 15,
    // paddingRight: 10,
    width: 150,
    marginBottom: 10,
    // marginRight: 30,
    // marginLeft: 15,
  },

  itemsText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginRight: 90,
  },

  totalsText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },

  item: {
    display: "flex",
    flexDirection: "column",
  },
  mealHeader: {
    flexDirection: "row",
  },

  mealList: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 16,
    marginRight: 16,
    // borderBottomColor: "#fff",
    // borderBottomWidth: 2,
    marginBottom: 40,
    alignItems: "center",
  },

  addItemButton: {
    width: 32,
    height: 32,
  },

  separator: {
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
    width: 350,
    alignItems: "center",
    marginBottom: -30,
  },

  /* *************************************************** */

  /*
   * nameDivvyInput.js styles
   */

  /* *************************************************** */

  divvyInputField: {
    color: "#000",
    height: 40,
    marginBottom: 16,
    borderWidth: 2,
    padding: 10,
    borderColor: "#4B23F3",
    fontWeight: "bold",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
  },

  /* *************************************************** */

  /*
   * addItem.js styles
   */

  /* *************************************************** */

  enterDishInput: {
    color: "#000",
    height: 40,
    marginBottom: 16,
    borderWidth: 2,
    padding: 10,
    borderColor: "#4B23F3",
    fontWeight: "bold",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
  },

  enterDishAmount: {
    color: "#000",
    height: 40,
    marginBottom: 16,
    borderWidth: 2,
    padding: 10,
    borderColor: "#4B23F3",
    fontWeight: "bold",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
  },

  addFriendModalContainer: {
    backgroundColor: "#000",
  },

  /* *************************************************** */

  /*
   * itemComponent.js styles
   */

  /* *************************************************** */

  itemContainer: {
    display: "flex",
    flexDirection: "row",
    width: 350,
    // backgroundColor: "#4B2",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemName: {
    marginBottom: 15,
    borderRadius: 10,
    padding: 10,
    width: 190,
    overflow: "hidden",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
  },

  priceAndFriendsContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
  },

  amount: {
    // marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
    padding: 10,
    overflow: "hidden",
    color: "#FFD700",
    fontWeight: "bold",
    fontSize: 24,
    // borderBottomColor: "#fff",
    // borderBottomWidth: 2,
    marginRight: -10,
  },
  friend: {
    marginTop: -10,
    marginLeft: 10,
    color: "#fff",
    fontWeight: "500",
  },

  // test: {
  //   display: "flex",
  //   flexDirection: "row",
  // },

  itemNameContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  redCancel: {
    marginBottom: 12,
  },

  /* *************************************************** */

  /*
   * addFriendModal.js styles
   */

  /* *************************************************** */

  addFriendInput: {
    color: "#000",
    height: 40,
    marginBottom: 16,
    borderWidth: 2,
    padding: 10,
    borderColor: "#4B23F3",
    fontWeight: "bold",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
  },

  addItemText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
    // marginTop: -150,
    // position: "absolute",
  },

  addItemContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "#781",
  },

  addFriendText: {
    marginTop: 5,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
  },
  // addFriendContainer: {
  //   display: "flex",
  //   // flexDirection: "row",
  //   // alignItems: "center",
  //   // backgroundColor: "#345",
  // },

  testing: { backgroundColor: "#781" },
  valueModalButtonSelected: {
    borderWidth: 5,
    marginRight: 13,
    borderRadius: 10,
    padding: 7,
  },
  valueModalButtonDeselected: {
    borderWidth: 2,
    marginRight: 16,
    borderRadius: 10,
    padding: 10,
  },
  valueModalButtonTextSelected: {
    fontWeight: "bold",
  },
  valueModalButtonTextDeselected: {
    fontWeight: "normal",
  },

  /* *************************************************** */

  /*
   * totalScreen.js styles
   */

  /* *************************************************** */

  totalScreenContainer: {
    flex: 1,
    paddingTop: 50,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    backgroundColor: "#333",
  },

  totalsScreenBackButton: {
    fontSize: 32,
    marginBottom: 20,
  },

  divvyTitle: {
    color: "#000",
    height: 40,
    marginBottom: 16,
    borderWidth: 2,
    padding: 10,
    borderColor: "#4B23F3",
    fontWeight: "bold",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    width: 100,
    alignItems: "center",
  },

  totalsHeader: {
    flexDirection: "row",
  },

  divvyTitleContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 40,
    alignItems: "center",
  },

  totalsInfoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  totalsInfoTitle: {
    fontSize: 16,
    alignItems: "flex-end",
    // marginBottom: -10,
    color: "#fff",
    fontWeight: "bold",
    // marginLeft: 275,
    // width: 100,
  },
  subTotalsInfoTitle: {
    fontSize: 16,
    alignItems: "flex-end",
    // marginBottom: -25,
    color: "#fff",
    fontWeight: "bold",
    // marginLeft: 275,
    // width: 100,
  },
  totalsBreakdownContainer: {
    display: "flex",
    justifyContent: "space-between",
    color: "#fff",
    fontWeight: "bold",
    flexDirection: "row",
    marginTop: 20,
  },

  totalsItemName: {
    color: "#fff",
    fontWeight: "bold",
  },

  totalsItemAmount: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 258,
  },

  individualItems: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
  },

  addFriendEmojiText: {
    textAlign: "center",
    marginLeft: 10,
    fontSize: 32,
  },

  addFriendEmojiView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
