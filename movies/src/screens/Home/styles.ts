import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: "#cbe8f8",
    alignItems: "center",
  },
  noResult: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10,
  },
  flatList: {
    width: width,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    padding: 25,
  },
  headerText: {
    marginTop: 30,
    fontSize: 24,
    lineHeight: 45,
    color: "#000000",
  },
  containerInput: {
    backgroundColor: "rgb(193, 213, 216)",
    height: 42,
    padding: 10,
    borderRadius: 16,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  input: {
    color: "#FFF",
    width: "80%",
    paddingLeft: 15,
  },
});