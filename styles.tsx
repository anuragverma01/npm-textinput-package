import { StyleSheet } from "react-native";
import { errorColor } from "./types";
import { windowHeight, windowWidth } from "./types";
export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  textInput: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.06,
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  warningText: {
    color: errorColor,
  },
});
