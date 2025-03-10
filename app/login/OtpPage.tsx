import { Image, StyleSheet, Platform, View, Pressable } from "react-native";

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
import OTP from "@/components/ui/OTP";
import { BackButtonIcon } from "@/components/ui/Icons";

type OtpProps = {
  setOtpPage: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function OtpPage(props: OtpProps) {
  const { setOtpPage } = props;
  return (
    <SafeAreaView className="h-full">
      <StatusBar animated style="dark" />
      <View className="px-6 h-full flex flex-col ">
        <View className="relative h-12">
          <View className="absolute h-full flex flex-row items-center">
            <BackButtonIcon
              onClick={() => {
                setOtpPage(false);
              }}
            />
          </View>
          <View className="flex-1 flex items-center flex-row justify-center relative">
            <Text className="text-bodyS_semibold">OTP</Text>
          </View>
        </View>
        <View className="flex flex-col justify-center flex-1 mb-12">
          <Text className="text-h2_semibold">Phone verification</Text>

          <Text className="text-label_medium text-grayscale_600 mt-2">
            Enter the code sent to your number
          </Text>
          <View className="mt-8">
            <OTP />
          </View>
          <View className="w-full flex flex-row justify-center items-center p-10">
            <Text className="text-label_medium text-grayscale_600">
              Didn't receive the code?
            </Text>
            <Button
              type="primary"
              className="w-fit"
              textOnly
              onPress={() => {}}
            >
              Resend
            </Button>
          </View>
          <View className="w-full">
            <Button className="mt-4 min-w-full" fullWidth onPress={() => {}}>
              Continue
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
