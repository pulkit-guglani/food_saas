import { Children, ReactNode } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

type ButtonType = "primary" | "secondary" | "tertiary";

type ButtonProps = {
  onPress: () => void;
  type?: ButtonType;
  textColor?: string;
  children: ReactNode;
  className?: string;
  textOnly?: boolean;
  fullWidth?: boolean;
};

const Button = (props: ButtonProps) => {
  const {
    onPress,
    children,
    type = "primary",
    textOnly,
    fullWidth,
    className,
  } = props;

  const buttonStyle = StyleSheet.create({
    primary: {
      backgroundColor: textOnly ? "" : "#FE8C00",
      padding: textOnly ? 8 : 16,
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      width: "auto",
      justifyContent: "center",
      alignSelf: fullWidth ? "stretch" : "flex-start",
    },
    secondary: {},
    tertiary: {},
  });
  const textStyle = StyleSheet.create({
    primary: {
      color: textOnly ? "#FE8C00" : "#fff",

      fontWeight: textOnly ? "600" : "500",
      fontSize: 14,
    },
    secondary: {},
    tertiary: {},
  });

  return (
    <View className={className}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={[buttonStyle?.[type], { opacity: 1 }]}
      >
        <Text style={textStyle?.[type]}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
