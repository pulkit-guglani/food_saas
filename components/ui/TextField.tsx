import { StyleSheet } from "nativewind";
import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";

interface TextFieldProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}) => {
  const handleChangeText = (text: string) => {
    if (onChangeText) {
      onChangeText(text);
    }
  };

  return (
    <View className="my-2">
      {label && <Text className="mb-1 text-lg text-gray-800">{label}</Text>}
      <TextInput
        style={{
          height: 40,
          borderWidth: 1,
          borderColor: "#D1D5DB",
          borderRadius: 4,
          paddingHorizontal: 12,
        }}
        placeholder={placeholder}
        value={value}
        onChangeText={handleChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={"#677990"}
      />
    </View>
  );
};

export default TextField;
