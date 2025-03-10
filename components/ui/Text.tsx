import React, { ReactNode } from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from "react-native";

interface TextProps extends RNTextProps {
  children: ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <RNText
      style={{ fontFamily: "metro" }}
      {...rest}
      className={`${className}`}
    >
      {children}
    </RNText>
  );
};

export default Text;
