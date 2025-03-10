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
};

const Button = (props: ButtonProps) => {
  const { onPress, children, type = "primary", textOnly, className } = props;

  const styles = StyleSheet.create({
    primary: {
      backgroundColor: textOnly ? "" : "#FE8C00",
      padding: textOnly ? 8 : 16,
      borderRadius: 9999,
      width: "100%",
      color: textOnly ? "#FE8C00" : "#fff",
      display: "flex",
      flexDirection: "row",
      fontWeight: textOnly ? "600" : "500",
      fontSize: 14,
      justifyContent: "center",
    },
    secondary: {
      backgroundColor: "#fff",

      borderWidth: 1,
    },
    tertiary: {
      backgroundColor: "transparent",
    },
  });

  return (
    <View className={className}>
      <TouchableOpacity onPress={onPress} style={styles?.[type]}>
        {children}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
