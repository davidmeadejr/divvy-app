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
    // borderRadius: 20,
    // padding: 10,
    // elevation: 2,
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
    fontSize: 20,
    marginBottom: 15,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  openModalContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  modalButtonContainer: {
    display: "flex",
    flexDirection: "row",
  },
  container: {
    flex: 1,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
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
    height: "110%",
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
    height: "110%",
  },

  cameraScreenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  cameraScreenBackButton: {
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#4B23F3",
    borderRadius: 10,
    backgroundColor: "#4B23F3",
    paddingTop: 10,
    paddingBottom: 10,
    overflow: "hidden",
    fontWeight: "bold",
    paddingLeft: 130,
    paddingRight: 130,
    color: "#fff",
  },

  createButton: {
    fontSize: 24,
    color: "#fff",
    borderWidth: 2,
    borderColor: "#4B23F3",
    borderRadius: 10,
    backgroundColor: "#4B23F3",
    paddingTop: 10,
    paddingBottom: 10,
    overflow: "hidden",
    fontWeight: "bold",
    paddingLeft: 42,
    paddingRight: 42,
    // marginBottom: 30,
  },

  uploadButton: {
    fontSize: 24,
    color: "#fff",
    borderWidth: 2,
    borderColor: "#4B23F3",
    borderRadius: 10,
    backgroundColor: "#4B23F3",
    paddingTop: 10,
    paddingBottom: 10,
    overflow: "hidden",
    fontWeight: "bold",
    paddingLeft: 30,
    paddingRight: 30,
  },

  cameraEmojiButton: {
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#4B23F3",
    borderRadius: 10,
    backgroundColor: "#4B23F3",
    paddingTop: 10,
    paddingBottom: 10,
    overflow: "hidden",
    fontWeight: "bold",
    paddingLeft: 40,
    paddingRight: 40,
    color: "#fff",
  },

  /*
   * Save Photo Screen
   */
  processingScreenCOntainer: {
    // Display: "flex",
    flex: 1,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    // alignItems: "center",
  },
  savePhotoContainer: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#333",
    flexDirection: "row",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 50,
    // alignItems: "center",
  },

  processingScreenBackButton: {
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
    color: "#fff",
    alignItems: "center",
    marginLeft: 90,
  },

  cancelButton: {
    // width: 85,
    // alignItems: "center",
    // justifyContent: "center",
    // color: "#fff",
    // borderWidth: 2,
    // borderColor: "#4B23F3",
    // borderRadius: 10,
    // backgroundColor: "#4B23F3",
    // padding: 8,
    // overflow: "hidden",
    // marginTop: 40,
    // marginLeft: 125,
  },

  cancelButtonText: {
    fontSize: 35,
    paddingTop: 35,
    paddingRight: 60,
  },

  loadingImageButton: {
    width: 210,
    fontSize: 15,
    alignItems: "center",
    color: "#fff",
    borderWidth: 2,
    borderColor: "#4B23F3",
    borderRadius: 10,
    backgroundColor: "#4B23F3",
    padding: 8,
    overflow: "hidden",
    marginTop: 30,
    fontWeight: "bold",
    width: 250,
    paddingLeft: 27,
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
    flex: 3,
    alignItems: "center",
    justifyContent: "flex-start",
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

  totalsScreenItemsButton: {
    fontSize: 32,
    color: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: "bold",
    width: 215,
    marginBottom: 10,
  },

  mealScreenTotalButton: {
    fontSize: 32,
    color: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: "bold",
    paddingLeft: 15,
    width: 150,
    marginBottom: 10,
  },

  totalsScreenTotalButton: {
    fontSize: 32,
    color: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: "bold",
    paddingLeft: 3,
    width: 150,
    marginBottom: 10,
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
    height: 45,
    width: 230,
    marginBottom: 15,
    marginLeft: 14,
    marginRight: 10,
    borderWidth: 2,
    // padding: 10,
    borderColor: "#4B23F3",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
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
    width: 250,
    fontSize: 20,
    textAlign: "center",
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
    // justifyContent: "space-between",
    alignItems: "center",
  },
  itemName: {
    // marginBottom: 15,
    borderRadius: 10,
    // padding: 10,
    width: 190,
    overflow: "hidden",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
  },

  priceAndFriendsContainer: {
    // flexDirection: "column",
    // alignItems: "flex-end",
  },

  amount: {
    // marginBottom: 16,
    overflow: "hidden",
    color: "#FFD700",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "right",
    // borderBottomColor: "#fff",
    // borderBottomWidth: 2,
    marginRight: 0,
    flex: 1,
  },
  friend: {
    textAlign: "right",
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
    marginTop: 2,
    marginRight: 9,
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
    // padding: ,
    fontSize: 20,
    width: "100%",
    borderColor: "#4B23F3",
    textAlign: "center",
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
    borderWidth: 4,
    marginRight: 13,
    borderRadius: 10,
    padding: 8,
    // backgroundColor: "#fff",
    // display: "flex",
    // flexDirection: "row",
    alignItems: "center",
  },
  valueModalButtonDeselected: {
    borderWidth: 2,
    marginRight: 16,
    borderRadius: 10,
    padding: 10,
    paddingRight: 13,
  },
  valueModalButtonTextSelected: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  valueModalButtonTextDeselected: {
    fontSize: 20,

    fontWeight: "normal",
    color: "white",
  },

  /* *************************************************** */

  /*
   * totalScreen.js styles
   */

  /* *************************************************** */

  totalsScreenContainer: {
    height: "100%",
    paddingTop: 40,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: "#333",
  },

  totalsScreenBackButton: {
    fontSize: 32,
    marginBottom: 20,
  },

  divvyTitle: {
    color: "#fff",
    height: 40,
    marginBottom: 16,
    // borderWidth: 2,
    padding: 10,
    // borderColor: "#4B23F3",
    fontWeight: "bold",
    // borderRadius: 10,
    // overflow: "hidden",
    // backgroundColor: "#fff",
    // width: 100,
    alignItems: "center",
    fontSize: 32,
    marginTop: -16,
  },

  totalsHeader: {
    flexDirection: "row",
    // marginBottom: 1,
  },

  totalTitle: {
    color: "#fff",
    height: 40,
    marginBottom: 19,
    fontWeight: "bold",
    alignItems: "center",
    fontSize: 40,
  },

  divvyTitleContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 45,
    alignItems: "center",
  },

  totalsInfoContainer: {
    color: "#fff",
    borderWidth: 2,
    borderColor: "#4B23F3",
    borderRadius: 10,
    padding: 8,
    overflow: "hidden",
    marginBottom: 15,
  },

  totalsInfoTitle: {
    fontSize: 16,
    alignItems: "flex-end",
    // marginBottom: -10,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "right",

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
    flexDirection: "row",
    marginBottom: 5,
  },

  totalsItemName: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
  },

  totalsItemAmount: {
    color: "#fff",
    fontWeight: "bold",
    color: "#FFD700",

    fontSize: 24,
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
  individualItemsContainer: {
    marginTop: 10,
  },

  additionalCostsContainer: {
    zIndex: 1,
    bottom: 20,
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  additionalCostTitle: {
    fontWeight: "bold",
    // alignItems: "center",
    color: "#fff",
    borderWidth: 2,
    borderColor: "#4B23F3",
    borderRadius: 10,
    backgroundColor: "#4B23F3",
    padding: 8,
    overflow: "hidden",
    // marginTop: 10,
    marginBottom: 5,
  },

  individualCostAmount: {
    color: "#fff",
    fontWeight: "bold",
    alignItems: "center",
  },

  individualCostContainer: {
    paddingLeft: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  totalsModalInput: {
    color: "#000",
    // height: 40,
    marginBottom: 16,
    borderWidth: 2,
    padding: 10,
    borderColor: "#4B23F3",
    fontWeight: "bold",
    fontSize: 30,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  totalsModalCenteredView: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    // top: "0%",
  },

  totalsModalView: {
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
    // height: 270,
  },

  savedMealsContainer: {
    // display: "flex",
    // flexDirection: "row",
    // marginBottom: 5,
    // alignItems: "center",
    // justifyContent: "center",
    // flex: 1,
    alignItems: "center",
    // justifyContent: "space-evenly",
    backgroundColor: "#4B23F3",
    borderColor: "#4B23F3",
    borderWidth: 2,
    fontWeight: "bold",
    paddingTop: 30,
    paddingBottom: 30,

    // height: "50%",
    width: "80%",
    borderRadius: 10,
  },
  savedMealsText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    padding: 5,
  },

  savedMealsTitle: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },

  savedMealsTitleContainer: {
    marginTop: 30,
    width: "60%",
    // display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4B23F3",
  },

  savedMealsCenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  savedMealScreenBackButton: {
    fontSize: 32,
    color: "white",
    // paddingTop: 10,
    // paddingBottom: 10,
    fontWeight: "bold",
    paddingRight: 20,
    // paddingLeft: 15,
    // width: 215,
    // marginBottom: 40,
    // marginLeft: 20,
    marginTop: 30,
  },

  savedMealScreenMealName: {
    paddingLeft: 24,
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
  },
});
