import { StyleSheet } from "nativewind";
import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";

interface TextFieldProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  className?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  className,
}) => {
  const handleChangeText = (text: string) => {
    if (onChangeText) {
      onChangeText(text);
    }
  };

  return (
    <View className={`${className}`}>
      {label && <Text className="mb-1 text-lg text-gray-800">{label}</Text>}
      <TextInput
        style={{
          height: 40,
          borderWidth: 1,
          borderColor: "#D1D5DB",
          borderRadius: 8,
          paddingHorizontal: 16,
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
