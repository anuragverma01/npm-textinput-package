import { ViewStyle, TextStyle } from "react-native";
export declare type TextInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  isValid: boolean;
  warning?: string;
  width?: string | number;
  height?: string | number;
  UIContainerStyle?: ViewStyle | TextStyle;
  UIInputStyle?: ViewStyle | TextStyle;
  UIWarningStyle?: ViewStyle | TextStyle;
  UIEmptyBorderStyle?: ViewStyle;
  UINonEmptyBorderStyle?: ViewStyle;
};
// Colors.ts
export const primaryColor = "blue";
export const secondaryColor = "green";
export const errorColor = "red";
// Dimensions.ts
import { Dimensions } from "react-native";

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;