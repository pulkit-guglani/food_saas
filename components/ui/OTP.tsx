import { OtpInput } from "react-native-otp-entry";
import { ViewStyle, TextStyle } from "react-native";

interface OTPProps {
  numberOfDigits?: number;
  focusColor?: string;
  autoFocus?: boolean;
  hideStick?: boolean;
  placeholder?: string;
  blurOnFilled?: boolean;
  disabled?: boolean;
  type?: "numeric" | "alpha" | "alphanumeric" | undefined;
  secureTextEntry?: boolean;
  focusStickBlinkingDuration?: number;
  onFocus?: () => void;
  onBlur?: () => void;
  onTextChange?: (text: string) => void;
  onFilled?: (text: string) => void;
  textInputProps?: React.ComponentProps<typeof OtpInput>["textInputProps"];
  theme?: {
    containerStyle?: ViewStyle;
    pinCodeContainerStyle?: ViewStyle;
    pinCodeTextStyle?: TextStyle;
    focusStickStyle?: ViewStyle;
    focusedPinCodeContainerStyle?: ViewStyle;
    placeholderTextStyle?: TextStyle;
    filledPinCodeContainerStyle?: ViewStyle;
    disabledPinCodeContainerStyle?: ViewStyle;
  };
}

const OTP = ({
  numberOfDigits = 5,
  focusColor = "orange",
  autoFocus = false,
  hideStick = true,
  placeholder = "",
  blurOnFilled = true,
  disabled = false,
  type = "numeric",
  secureTextEntry = false,
  focusStickBlinkingDuration = 500,
  onFocus = () => {},
  onBlur = () => {},
  onTextChange = () => {},
  onFilled = () => {},
  textInputProps = {},
  theme = {},
}: OTPProps) => {
  return (
    <OtpInput
      numberOfDigits={numberOfDigits}
      focusColor={focusColor}
      autoFocus={autoFocus}
      hideStick={hideStick}
      placeholder={placeholder}
      blurOnFilled={blurOnFilled}
      disabled={disabled}
      type={type}
      secureTextEntry={secureTextEntry}
      focusStickBlinkingDuration={focusStickBlinkingDuration}
      onFocus={onFocus}
      onBlur={onBlur}
      onTextChange={onTextChange}
      onFilled={onFilled}
      textInputProps={textInputProps}
      theme={theme}
    />
  );
};

export default OTP;
