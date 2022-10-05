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
    backgroundColor: "#2196F3",
  },
  modalAddButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },

  modalAddButtonOpen: {
    backgroundColor: "#F194FF",
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
    backgroundColor: "#fff",
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
    marginBottom: 30,
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
    marginBottom: 30,
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
    marginBottom: 30,
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
});
