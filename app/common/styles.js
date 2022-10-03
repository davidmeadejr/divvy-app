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
});
