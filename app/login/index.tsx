import { Image, StyleSheet, Platform, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import TextField from "@/components/ui/TextField";
import { useState } from "react";
import { TextInput } from "react-native";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import Login from "./Login";
import OtpPage from "./OtpPage";

export default function LoginPage() {
  const [number, setNumber] = useState("");
  const [otpPage, setOtpPage] = useState(false);
  console.log(otpPage);
  return (
    <SafeAreaView className="h-full">
      <StatusBar animated style="dark" />
      {otpPage ? (
        <OtpPage setOtpPage={setOtpPage} />
      ) : (
        <Login setOtpPage={setOtpPage} />
      )}
    </SafeAreaView>
  );
}
