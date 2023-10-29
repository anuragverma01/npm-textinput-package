import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";
import { TextInputProps } from "./types";
import { styles } from "./styles";
const UITextInput: React.FC<TextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  isValid,
  warning,
  UIInputStyle,
  UIWarningStyle,
  UIContainerStyle,
  UIEmptyBorderStyle,
  UINonEmptyBorderStyle,
}) => {
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const handleTextInputChange = (text: string) => {
    onChangeText(text);
    setIsEmpty(text === "");
  };
  return (
    <View style={[styles.container, UIContainerStyle]}>
      <TextInput
        style={[
          styles.textInput,
          isEmpty ? UIEmptyBorderStyle : UINonEmptyBorderStyle,
          UIInputStyle,
        ]}
        value={value}
        onChangeText={handleTextInputChange}
        placeholder={placeholder}
      />
      {!isValid && isEmpty && (
        <Text style={[styles.warningText, UIWarningStyle]}>{warning}</Text>
      )}
    </View>
  );
};

export default UITextInput;
